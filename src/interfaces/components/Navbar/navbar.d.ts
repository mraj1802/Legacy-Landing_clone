export interface INavbarListData {
  name: string;
  url: string;
}
export interface INavbarProps {
  name: string;
  href: string;
  dark?: boolean;
  navList: INavbarListData[];
}

export interface IDropdown {
  name: string;
  id: number;
  url?: string;
  sideMenu?: INavbarListData[];
}
export interface INavbarServices {
  name: string;
  dropdown: IDropdown[];
}

interface IDrawerData {
  name: string;
  link: string;
}

export interface INavbarServicesDrawer {
  heading: string;
  data: Array<IDrawerData>;
}
