import { IFounderCarouselData } from "../../interfaces/components/FounderCarousel/founderCarousel";
import image1 from "/public/nftMuseum/B-1.webp";

const founderCarouselData: IFounderCarouselData[] = [
  {
    heading: "Founder Series",

    carouselLeftData: [
      {
        beforeText: "Free Legacy Suite Ultimate Subscription For Life",
      },
      {
        beforeText: "50G Cloud Storage",
      },
      {
        beforeText: "Token Gated Access",
      },
      {
        beforeText: "Early Access To New Tools And Features",
      },
      {
        beforeText: "Access to Legacy Suite Private Discord Channel",
      },
    ],
    carouselMiddleData: {
      image: image1,
    },
  },
  {
    heading: "Immortal Series",

    carouselLeftData: [
      {
        beforeText: "Free Legacy Suite Ultimate Subscription For 1 Year ",
      },
      {
        beforeText: "25G Cloud Storage",
      },
      {
        beforeText: "Token Gated Access",
      },
      // {
      //   beforeText: "Raffle of IPAD PRO 512GB",
      // },
    ],
    carouselMiddleData: {
      image: image1,
    },
  },
  {
    heading: "Legend Series",

    carouselRightData: [],
    carouselLeftData: [
      {
        beforeText: "Token Gated Access",
      },
      // {
      //   beforeText: "Raffle of $10,000 USD in ETH",
      // },
      {
        beforeText: "Free Legacy Suite Ultimate Subscription For 3 Months ",
      },
      {
        beforeText: "10G Cloud Storage",
      },
    ],
    carouselMiddleData: {
      image: image1,
    },
  },
  {
    heading: "Legacy Series",

    carouselRightData: [],
    carouselLeftData: [
      {
        beforeText: "Token Gated Access",
      },
      {
        beforeText: "Air Drops",
      },
      {
        beforeText: "Legacy Suite Ultimate Discounted Price",
      },
      {
        beforeText: "No Cloud Storage",
      },
    ],
    carouselMiddleData: {
      image: image1,
    },
  },
];

export default founderCarouselData;
