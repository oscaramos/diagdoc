import { NextSeo } from "next-seo";
import { BASE_URL } from "@/utils/constants";
import { OpenGraph } from "next-seo/lib/types";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";

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

export default function Page({
  pageName,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      Page name: {pageName}
      <NextSeo openGraph={SEO_DATA[pageName]} />
    </>
  );
}
