import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantuml use-case documentation",
  description: "Documentation for creating a use-case diagram in plantuml",
  openGraph: {
    title: "Plantuml use-case documentation",
    description: "Documentation for creating a use-case diagram in plantuml",
    type: "website",
    url: "/plantuml_use-case",
    images: [
      {
        url: "/images/plantuml-use-case.png",
        width: 820,
        height: 836,
        alt: "Plantuml use-case diagram example",
      },
    ],
  },
};

export default function Page() {
  return <div>Exist plantuml</div>;
}
