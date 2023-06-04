import { useEffect } from "react";
import { NextSeo } from "next-seo";
import { OpenGraph } from "next-seo/lib/types";
import { useRouter } from "next/router";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";

import { BASE_URL } from "@/utils/constants";

type PageName = "nomnoml_class" | "plantuml_use-case";

type Props = {
  pageName: PageName;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { pageName: "nomnoml_class" } },
      { params: { pageName: "plantuml_use-case" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return { props: { pageName: params?.pageName as PageName } };
};

const SEO_DATA: Record<PageName, OpenGraph> = {
  nomnoml_class: {
    type: "website",
    url: `${BASE_URL}/nomnoml_class`,
    title: "Use Case Diagram | Nomnoml",
    description: "Documentation for creating a class diagram in nomnoml",
    images: [
      {
        url: `${BASE_URL}/images/nomnoml_class.png`,
        width: 820,
        height: 651,
        alt: "Nomnoml class diagram example",
      },
    ],
  },
  "plantuml_use-case": {
    type: "website",
    url: `${BASE_URL}/plantuml_use-case`,
    title: "Use Case Diagram | Plantuml",
    description: "Documentation for creating a use-case diagram in plantuml",
    images: [
      {
        url: `${BASE_URL}/images/plantuml_use-case.png`,
        width: 820,
        height: 836,
        alt: "Plantuml use-case diagram example",
      },
    ],
  },
};

const REDIRECT_URLS: Record<PageName, string> = {
  nomnoml_class: "https://www.nomnoml.com",
  "plantuml_use-case": "https://plantuml.com/use-case-diagram",
};

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
      <NextSeo openGraph={SEO_DATA[pageName]} />
    </>
  );
}
