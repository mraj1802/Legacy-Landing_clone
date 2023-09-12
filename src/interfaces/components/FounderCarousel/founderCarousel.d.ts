import { StaticImageData } from "next/image";
export interface ICarouselData {
  beforeText: string;
}
export interface IFounderCarouselData {
  heading: string;
  carouselLeftData: Array<ICarouselData>;
  carouselMiddleData: { image: StaticImageData };
  carouselRightData?: [];
}
export interface IFounderCarouselLeftProps {
  data: Array<ICarouselData>;
  heading: string;
}
