import { StaticImageData } from "next/image";
interface ISuiteData {
  headingOne: string;
  textOne: string;
  imageOne: StaticImageData;
  headingTwo: string;
  textTwo: string;
  imageTwo: StaticImageData;
}

export interface IChooseSuiteProps {
  heading: string;
  text: string;
  suiteData: Array<ISuiteData>;
  headingType?: any;
}
