'use client';

import React from 'react';
import { StyledWrapperContainer } from './styles';
import { IWrapperProps } from './types';

export const Wrapper: React.FC<IWrapperProps> = ({ children }) => {
  return <StyledWrapperContainer>{children}</StyledWrapperContainer>;
};
