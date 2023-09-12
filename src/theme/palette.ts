export const PRIMARY = {
  lighter: "#B0CAEE",
  light: "#6195DD",
  main: "#1260CC",
  dark: "#0C4088",
  darker: "#062044",
};

const SECONDARY = {
  lighter: "#B7F8F8",
  light: "#70F1F0",
  main: "#28EAE9",
  dark: "#1B9C9B",
  darker: "#0D4E4E",
};
const INFO = {
  lighter: "#CCEDFD",
  light: "#CCEDFD",
  main: "#65C9FA",
  dark: "#4386A7",
  darker: "#224353",
};
const SUCCESS = {
  lighter: "#C6FCC2",
  light: "#8CF886",
  main: "#53F549",
  dark: "#37A331",
  darker: "#1C5218",
};

const WARNING = {
  lighter: "#F5E1BA",
  light: "#EBC375",
  main: "#E1A530",
  dark: "#966E20",
  darker: "#4B3710",
};

const ERROR = {
  lighter: "#F3BCC1",
  light: "#E87883",
  main: "#DC3545",
  dark: "#93232E",
  darker: "#491217",
};

const DISABLED = {
  lighter: "#DFE2E3",
  light: "#C0C4C8",
  main: "#A0A7AC",
  dark: "#6B6F73",
  darker: "#353839",
};
const NEUTRAL = {
  lighter: "#FFFFFF",
  light: "#F0F0F0",
  main: "#8C8C8C",
  dark: "#353839",
  darker: "#000000",
};

const COMMON = {
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  disabled: { ...DISABLED },
  neutral: { ...NEUTRAL },
};

const palette = {
  ...COMMON,
};

export default palette;
