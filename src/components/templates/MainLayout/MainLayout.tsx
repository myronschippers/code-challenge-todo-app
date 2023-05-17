'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MainHeader } from '@/components/templates/MainHeader';
import { Wrapper } from '@/components/templates/Wrapper';
import { DesignOverlay } from '@/components/ui/DesignOverlay';
import { GlobalStyles } from '@/theme/GlobalStyles';
import * as theme from '@/theme';
import { StyledMainLayoutContainer, StyledMainLayoutMainContent } from './styles';
import { IMainLayoutProps } from './types';

export const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledMainLayoutContainer data-test-id="MainLayout">
        <DesignOverlay />
        <MainHeader />
        <StyledMainLayoutMainContent>
          <Wrapper>{children}</Wrapper>
        </StyledMainLayoutMainContent>
      </StyledMainLayoutContainer>
    </ThemeProvider>
  );
};
