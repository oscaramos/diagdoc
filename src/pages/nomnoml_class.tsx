import { NextSeo } from "next-seo";
import { BASE_URL } from "@/utils/constants";

export default function Page() {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: `${BASE_URL}/nomnoml_class`,
          title: "Nomnoml class documentation",
          description: "Documentation for creating a class diagram in nomnoml",
          images: [
            {
              url: `${BASE_URL}/images/nomnoml_class.png`,
              width: 820,
              height: 651,
              alt: "Nomnoml class diagram example",
            },
          ],
        }}
      />
      Exist Nomnoml class
    </>
  );
}
