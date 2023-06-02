import { NextSeo } from "next-seo";
import { BASE_URL } from "@/utils/constants";

export default function Page() {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: `${BASE_URL}/plantuml_use-case`,
          title: "Plantuml use-case documentation",
          description:
            "Documentation for creating a use-case diagram in plantuml",
          images: [
            {
              url: `${BASE_URL}/images/plantuml_use-case.png`,
              width: 820,
              height: 836,
              alt: "Plantuml use-case diagram example",
            },
          ],
        }}
      />
      Exist plantuml use case
    </>
  );
}
