import { StaticImageData } from "next/image";
import financial from "/public/productTour/database.svg";
import digital from "/public/productTour/files.svg";
import legacy from "/public/productTour/legacy.svg";
import legal from "/public/productTour/legal.svg";
import legacypass from "/public/productTour/shield.svg";

export interface IProductTourData {
  name: string;
  text: string;
  videoLink: string;
  image: StaticImageData;
}

const productTourData: IProductTourData[] = [
  {
    name: "Legal Suite",
    text: "Learn how to create, store and share important wills and directives.",
    videoLink: "https://streamable.com/e/f4w1jc",
    image: legal,
  },
  {
    name: "Digital Suite",
    text: "Learn how to upload and share critical documents with legacy contacts and loved ones.",
    videoLink: "https://streamable.com/e/2x6w49",
    image: digital,
  },
  {
    name: "Legacy Suite",
    text: "Learn how to preserve life memories and send future messages to family and loved ones.",
    videoLink: "https://streamable.com/e/zsq3yo",
    image: legacy,
  },
  {
    name: "Financial Suite",
    text: "Learn how to create, organize and monitor your financial life on your dashboard.",
    videoLink: "https://streamable.com/e/wb0pvj",
    image: financial,
  },
  {
    name: "LegacyPass",
    text: "Learn how to organize and share critical passwords with legacy contacts andloved ones.",
    videoLink: "https://streamable.com/e/6ibe9u",
    image: legacypass,
  },
];

export default productTourData;
