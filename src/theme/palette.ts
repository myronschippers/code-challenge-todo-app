interface IPaletteLight {
  veryLightGray: string;
  veryLightGrayishBlue: string;
  lightGrayishBlue: string;
  darkGrayishBlue: string;
  veryDarkGrayishBlue: string;
}

interface IPaletteDark {
  veryDarkBlue: string;
  veryDarkDesaturatedBlue: string;
  lightGrayishBlue: string;
  lightGrayishBlueHover: string;
  darkGrayishBlue: string;
  darkerGrayishBlue: string;
  veryDarkGrayishBlue: string;
}

interface IPaletteCurrent {
  background: string;
  paper: string;
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
  veryLightGray: 'hsl(0, 0%, 98%)',
  veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
  lightGrayishBlue: 'hsl(233, 11%, 84%)',
  darkGrayishBlue: 'hsl(236, 9%, 61%)',
  veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
} as const;

const dark: IPaletteDark = {
  veryDarkBlue: 'hsl(235, 21%, 11%)',
  veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
  lightGrayishBlue: 'hsl(234, 39%, 85%)',
  lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
  darkGrayishBlue: 'hsl(234, 11%, 52%)',
  darkerGrayishBlue: 'hsl(233, 14%, 35%)',
  veryDarkGrayishBlue: 'hsl(237, 14%, 26%)',
} as const;

const palette: IPalette = {
  primary: '	#3a7bfd',
  primaryHover: '	#2651A6',
  checkGradient: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
  light,
  dark,
  current: {
    background: dark.veryDarkBlue,
    paper: dark.veryDarkGrayishBlue,
  },
} as const;

export default palette;
