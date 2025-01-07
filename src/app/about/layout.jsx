import { openGraphImage } from "../../data/metadata";
import { metaa } from "../../data/metadata";
console.log(metaa.about.title);
export const metadata = {
  title: metaa.about.title,
  description: metaa.about.description,
  openGraph: {
    ...openGraphImage,
    title: metaa.about.title,
    description: metaa.about.description,
  },
};

export default function Page() {}
