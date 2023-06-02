import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nomnoml class documentation",
  description: "Documentation for creating a class diagram in nomnoml",
  openGraph: {
    title: "Nomnoml class documentation",
    description: "Documentation for creating a class diagram in nomnoml",
    type: "website",
    url: "/nomnoml_class",
    images: [
      {
        url: "/images/nomnoml_class.png",
        width: 820,
        height: 651,
        alt: "Nomnoml class diagram example",
      },
    ],
  },
};

export default function Page() {
  return <div>Exist nomnoml</div>;
}
