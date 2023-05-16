'use client';

import React from 'react';
import { Wrapper } from '@/components/templates/Wrapper';
import StyledComponentsRegistry from '@/libs/registry';
import { StyledMainLayoutContainer } from './styles';
import { IMainLayoutProps } from './types';

export const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <StyledMainLayoutContainer>
        <Wrapper>{children}</Wrapper>
      </StyledMainLayoutContainer>
    </StyledComponentsRegistry>
  );
};
