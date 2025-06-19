import localFont from "next/font/local";

export const sportingGrotesqueBold = localFont({
  src: "../../public/assets/fonts/SportingGrotesque-Bold.otf",
  weight: "700", // adjust based on your font
  style: "normal",
  variable: "--font-sporting-bold",
  display: "swap",
});

export const sportingGrotesque = localFont({
  src: "../../public/assets/fonts/SportingGrotesque-Regular.otf",
  weight: "400", // adjust based on your font
  style: "normal",
  variable: "--font-sporting-regular",
  display: "swap",
});

// BwGradualDEMO-Regular.otf
export const bwGradual = localFont({
  src: "../../public/assets/fonts/BwGradualDEMO-Regular.otf",
  weight: "400", // adjust based on your font
  style: "normal",
  variable: "--font-bw-gradual-regular",
  display: "swap",
});

// BwGradualDEMO-Bold.otf
export const bwGradualBold = localFont({
  src: "../../public/assets/fonts/BwGradualDEMO-Bold.otf",
  weight: "700", // adjust based on your font
  style: "normal",
  variable: "--font-bw-gradual-bold",
  display: "swap",
});

// BwGradualDEMO-ExtraBold.otf
export const bwGradualExtraBold = localFont({
  src: "../../public/assets/fonts/BwGradualDEMO-ExtraBold.otf",
  weight: "800", // adjust based on your font
  style: "normal",
  variable: "--font-bw-gradual-extra-bold",
  display: "swap",
});
