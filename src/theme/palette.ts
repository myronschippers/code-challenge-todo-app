interface IPaletteLight {
  veryLightGray: string;
  veryLightGrayishBlue: string;
  lightGrayishBlue: string;
  darkGrayishBlue: string;
  veryDarkGrayishBlue: string;
  remove: string;
  removeHover: string;
}

interface IPaletteDark {
  veryDarkBlue: string;
  veryDarkDesaturatedBlue: string;
  lightGrayishBlue: string;
  lightGrayishBlueHover: string;
  darkGrayishBlue: string;
  darkerGrayishBlue: string;
  veryDarkGrayishBlue: string;
  remove: string;
  removeHover: string;
}

interface IPaletteCurrent {
  background: string;
  paper: string;
  divider: string;
  remove: string;
  removeHover: string;
  text: string;
  textDeemphasized: string;
}

export interface IPalette {
  primary: string;
  primaryHover: string;
  checkGradient: string;
  light: IPaletteLight;
  dark: IPaletteDark;
  current: IPaletteCurrent;
}

const light: IPaletteLight = {
  veryLightGray: '#fafafa',
  veryLightGrayishBlue: '#e4e5f1',
  lightGrayishBlue: '#d2d3db',
  darkGrayishBlue: '#9394a5',
  veryDarkGrayishBlue: '#484b6a',
  remove: '#494C6B',
  removeHover: '#373A52',
} as const;

const dark: IPaletteDark = {
  veryDarkBlue: '#161722',
  veryDarkDesaturatedBlue: '#25273c',
  lightGrayishBlue: '#cacde8',
  lightGrayishBlueHover: '#e4e5f1',
  darkGrayishBlue: '#777a92',
  darkerGrayishBlue: '#4d5066',
  veryDarkGrayishBlue: '#393a4c',
  remove: '#494C6B',
  removeHover: '#5E618A',
} as const;

const palette: IPalette = {
  primary: '	#3a7bfd',
  primaryHover: '	#2651A6',
  checkGradient: 'linear-gradient(135deg, #57ddff 0%, #c058f3 100%)',
  light,
  dark,
  current: {
    background: dark.veryDarkBlue,
    paper: dark.veryDarkDesaturatedBlue,
    divider: dark.veryDarkGrayishBlue,
    remove: dark.remove,
    removeHover: dark.removeHover,
    text: dark.lightGrayishBlue,
    textDeemphasized: dark.darkGrayishBlue,
  },
} as const;

export default palette;
