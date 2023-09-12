export interface Data {
  title: string;
  banner: string;
  previewBanner: string;
  description: string;
  date: string;
  keywords: string[];
  blogLink?: string;
}
export interface IBlogsData {
  data: Object<Data>;
  filePath: string;
}
export interface IBlogsProps {
  data: Array<IBlogsData>;
}
