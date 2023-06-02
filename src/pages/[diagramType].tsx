import { NextSeo } from 'next-seo';
import { useRouter } from "next/router";
import { OpenGraph } from "next-seo/lib/types";

const BASE_URL = "https://diagdoc.vercel.app"

const diagramTypes = ["plantuml_use-case", "nomnoml_class"]
type DiagramType = (typeof diagramTypes)[number]

export default function Page() {
  const router = useRouter();
  const diagramType = router.query.diagramType as DiagramType

  const getOpenGraph: Record<DiagramType, OpenGraph> = {
    "plantuml_use-case": {
      title: 'Plantuml use-case documentation',
      description: 'Documentation for creating a use-case diagram in plantuml',
      type: 'website',
      url: `${BASE_URL}/plantuml_use-case`,
      images: [
        {
          url: `${BASE_URL}/images/plantuml-usecase.png`,
          width: 820,
          height: 836,
          alt: 'Plantuml use-case diagram example',
        }
      ],
    },
    "nomnoml_class": {
      title: 'Nomnoml documentation',
      description: 'Documentation for creating a class diagram in nomnoml',
      type: 'website',
      url: `${BASE_URL}/nomnoml_class`,
      images: [
        {
          url: `${BASE_URL}/images/nomnoml.png`,
          width: 820,
          height: 651,
          alt: 'Nomnoml class diagram example',
        }
      ]
    }
  }

  const openGraph = getOpenGraph[diagramType]

  if(openGraph) {
    return (
      <div>
        <NextSeo
          openGraph={openGraph}
        />

        Exist!
      </div>
    )
  }
  return <div>
    Does not exist
  </div>
}
