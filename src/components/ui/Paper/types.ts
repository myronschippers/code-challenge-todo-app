import { ReactNode } from 'react';

export interface IStyledPaperProps {
  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}

export interface IPaperProps extends IStyledPaperProps {
  children?: ReactNode;
  ['data-testid']?: string;
}
