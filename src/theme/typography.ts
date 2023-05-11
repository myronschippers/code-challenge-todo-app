export interface ITypography {
  sizeReset: string;
  sizeBase: string;
  weightNormal: number;
  weightBold: number;
  family: string;
}

const typography: ITypography = {
  sizeReset: '10px',
  sizeBase: '1.8rem',
  weightNormal: 400,
  weightBold: 700,
  family: `'Josefin Sans', Lato, 'Lucida Grande', Tahoma, Sans-Serif`,
} as const;

export default typography;
