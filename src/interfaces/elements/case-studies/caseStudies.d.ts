export interface DataProps {
  __component: string;
  id: string;
  content?: string;
  images?: Array<{ id: string; url: string }>;
  data?: Array<IHeading>;
  attributes?: object;
  // add types for other components here as needed
}
export interface IHeading {
  id: number;
  attributes: { title: string; identifier: string; thumbnail: object };
}
export interface HeadingStateProps {
  id: string;
  name: string;
}

export interface HeadingProps {
  __component: string;
  id: string;
  content: string;
  [key: string]: any;
}

export interface ImagesProps {
  __component: string;
  id: string;
  images: Array<{ id: string; url: string }>;
  [key: string]: any;
}

export interface ParagraphProps {
  __component: string;
  id: string;
  content: string;
  [key: string]: any;
}

export interface ProfileProps {
  image: string;
  name: string;
}
export interface HeadingBlockProps {
  textColor?: string;
  textAlignment?: any;
  backgroundColor?: string;
  content: string;
  textAlign: any;
}

export interface ParagraphProps {
  textColor?: string;
  textAlignment?: any;
  backgroundColor?: string;
  content: string;
  textAlign: any;
}

export interface BlockImagesProps {
  id: number;
  attributes: any;
}

export interface BlockImageProps {
  image?: object | any;
  data?: Array<{ id: string | number; url: string }>;
  attributes?: any;
}
