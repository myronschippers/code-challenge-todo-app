import { IMediaQueriesBreakpoints } from './breakpoints';
import { IPalette } from './palette';
import { ITypography } from './typography';

export interface ITheme {
  palette: IPalette;
  typography: ITypography;
  media: IMediaQueriesBreakpoints;
}
