// for passing of custom value
const customValue = (val: number) => `${val}px`;

const colors = {
  gradients: {
    primary: {
      100: '#EFEAF0',
      200: '#E6F5F3',
      300: '#E6EDF2',
    },
    secondary: {
      100: '#E9D7E4',
      200: '#EADCE1',
      300: '#D6DEEA',
      400: '#CFE4F5',
      500: '#E7E8F6',
      600: '#D0ECF7',
    },
  },
  lightPink: '#F8F1EA',
  black: '#000',
  white: '#fff',
};

const fontSizes = {
  sm: '12px',
  md: '16px',
  lg: '22px',
  custom: customValue,
};

const fontFamilies = {
  clash: {
    bold: 'ClashDisplayBold, sans-serif',
    extraLight: 'ClashDisplayXtraLight, sans-serif',
    light: 'ClashDisplayLight, sans-serif',
    medium: 'ClashDisplayMedium, sans-serif',
    regular: 'ClashDisplayRegular, sans-serif',
    semiBold: 'ClashDisplaySemiBold, sans-serif',
  },
  manhope: {
    bold: 'ManropeBold, sans-serif',
    extraBold: 'ManropeExtraBold,sans-serif',
    extraLight: 'ManropeExtraLight, sans-serif',
    light: 'ManropeLight, sans-serif',
    medium: 'ManropeMedium, sans-serif',
    regular: 'ManropeRegular, sans-serif',
    semiBold: 'ManropeSemiBold, sans-serif',
  },
};

const spacing = {
  xs: '10px',
  sm: '14px',
  md: '22px',
  custom: customValue,
};

export const theme = {
  colors,
  fontSizes,
  fontFamilies,
  // media,
};
