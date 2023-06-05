import { useEffect } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";

import { supportedDiagrams } from "@/utils/supportedDiagrams";
import { BASE_URL, DiagramTypeSyntax } from "@/utils/constants";

const pageNames = supportedDiagrams.flatMap(({ diagramLanguage, types }) =>
  types.map(({ diagramType }) => `${diagramLanguage}_${diagramType}`)
) as DiagramTypeSyntax[];

type PageName = (typeof pageNames)[number];

type Props = {
  pageName: PageName;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: pageNames.map((pageName) => ({
      params: { pageName },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return { props: { pageName: params?.pageName as PageName } };
};

const OPENGRAPH_DATA = Object.assign(
  {},
  ...supportedDiagrams.flatMap((item) =>
    item.types.map((type) => {
      const pageName: PageName = `${item.diagramLanguage}_${type.diagramType}`;
      return {
        [pageName]: {
          type: "website",
          url: `${BASE_URL}/${pageName}`,
          title: `${
            type.diagramType.charAt(0).toUpperCase() + type.diagramType.slice(1)
          } Diagram | ${
            item.diagramLanguage.charAt(0).toUpperCase() +
            item.diagramLanguage.slice(1)
          }`,
          description: `Documentation for creating a ${type.diagramType} diagram in ${item.diagramLanguage}`,
          images: [
            {
              url: `${BASE_URL}/images/${pageName}.jpg`,
              width: 1200,
              height: 600,
              alt: `${item.diagramLanguage} ${type.diagramType} diagram example`,
            },
          ],
        },
      };
    })
  )
);

const REDIRECT_URLS = Object.assign(
  {},
  ...supportedDiagrams.flatMap((item) =>
    item.types.map((type) => ({
      [`${item.diagramLanguage}_${type.diagramType}`]: type.documentationURL,
    }))
  )
);

export default function Page({
  pageName,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const urlToRedirect = REDIRECT_URLS[pageName];

  useEffect(() => {
    void router.push(urlToRedirect);
  }, [router, urlToRedirect]);

  return (
    <>
      Redirecting to: {urlToRedirect}
      <NextSeo openGraph={OPENGRAPH_DATA[pageName]} />
    </>
  );
}
