import React from 'react';
import { StyledPaperContainer } from './styles';
import { IPaperProps } from './types';

export const Paper: React.FC<IPaperProps> = ({ children }) => {
  return <StyledPaperContainer>{children}</StyledPaperContainer>;
};
