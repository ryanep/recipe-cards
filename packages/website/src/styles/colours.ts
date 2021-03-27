export type Colours = typeof colours & {
  [key: string]: string;
};

const palette = {
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',
  silver: '#cccccc',
  alabaster: '#f8f8f8',
  blueRibbon: '#0039ff',
  offWhiteBlue: '#2251ff05',
  flushMahogany: '#c93535',
  steelGrey: '#201d2c',
  codGrey: '#1b1b1b',
  mineshaft: '#222222',
};

export const colours = {
  body: {
    background: palette.codGrey,
    color: palette.alabaster,
  },
  primary: palette.blueRibbon,
  onPrimary: palette.white,
  error: palette.flushMahogany,
  onError: palette.white,
  background: palette.black,
  onBackground: palette.silver,
  altBackground: palette.offWhiteBlue,
  transparent: palette.transparent,
};
