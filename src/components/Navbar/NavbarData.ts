import {
  INavbarListData,
  INavbarServices,
  INavbarServicesDrawer,
} from "./../../interfaces/components/Navbar/navbar.d";
export const navbarServicesData: INavbarListData[] = [
  {
    name: "Crypto & NFT Will",
    url: "/crypto",
  },
  {
    name: "LegacyPass™",
    url: "/legacy-pass",
  },
  {
    name: "Legal Suite",
    url: "/legal-suite",
  },
  {
    name: "Legacy Suite™",
    url: "/legacy-suite",
  },
  {
    name: "Financial Suite",
    url: "/financial-suite",
  },
  {
    name: "Digital Suite",
    url: "/digital-suite",
  },
];
export const navbarExploreData: INavbarListData[] = [
  {
    name: "Feeling Lost?",
    url: "/feeling-lost",
  },
];

export const navbarResources: INavbarListData[] = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
  {
    name: "Blog",
    url: "/blogs",
  },
  {
    name: "Claim Property",
    url: "/end-of-life-guru",
  },
  {
    name: "FAQs",
    url: "/faqs",
  },
  {
    name: "Nft Museum",
    url: "/nft-museum",
  },
];

export const navbarServices: INavbarServices = {
  name: "Services",
  dropdown: [
    {
      name: "Wallet Protection",
      id: 1,
      url: "/wallet-protection",
    },
    {
      name: "Inheritance Planning",
      id: 2,
      sideMenu: [
        {
          name: "Crypto & NFT Will",
          url: "/crypto",
        },
        {
          name: "Legal Suite",
          url: "/legal-suite",
        },
        {
          name: "Digital Suite",
          url: "/digital-suite",
        },
        {
          name: "Legacy Suite™",
          url: "/legacy-suite",
        },
        {
          name: "Financial Suite",
          url: "/financial-suite",
        },
      ],
    },
    {
      name: "Password Management",
      id: 3,
      url: "/legacy-pass",
    },
  ],
};

export const navbarServicesDrawer: INavbarServicesDrawer[] = [
  {
    heading: "Wallet",
    data: [
      {
        name: "Wallet Protecion ",
        link: "/wallet-protection",
      },
    ],
  },
  {
    heading: "Inheritance Planning",
    data: [
      {
        name: "Crypto & NFT Will",
        link: "/crypto",
      },
      {
        name: "Legal Suite",
        link: "/legal-suite",
      },
      {
        name: "Digital Suite",
        link: "/digital-suite",
      },
      {
        name: "Legacy Suite™",
        link: "/legacy-suite",
      },
      {
        name: "Financial Suite",
        link: "/financial-suite",
      },
    ],
  },
  {
    heading: "Password Management",
    data: [
      {
        name: "LegacyPass™",
        link: "/legacy-pass",
      },
    ],
  },
];
