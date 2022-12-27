export type Colours = Record<string, string> & typeof colours;

const palette = {
  alabaster: "#f8f8f8",
  black: "#000000",
  blueRibbon: "#0039ff",
  codGrey: "#1b1b1b",
  flushMahogany: "#c93535",
  mineshaft: "#222222",
  offWhiteBlue: "#2251ff05",
  silver: "#cccccc",
  steelGrey: "#201d2c",
  transparent: "transparent",
  white: "#ffffff",
};

export const colours = {
  altBackground: palette.offWhiteBlue,
  background: palette.black,
  body: {
    background: palette.codGrey,
    color: palette.alabaster,
  },
  error: palette.flushMahogany,
  onBackground: palette.silver,
  onError: palette.white,
  onPrimary: palette.white,
  primary: palette.blueRibbon,
  transparent: palette.transparent,
};
