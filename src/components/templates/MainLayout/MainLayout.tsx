'use client';

import React from 'react';
import { MainHeader } from '@/components/templates/MainHeader';
import { Wrapper } from '@/components/templates/Wrapper';
import { DesignOverlay } from '@/components/ui/DesignOverlay';
import { StyledMainLayoutContainer, StyledMainLayoutMainContent } from './styles';
import { IMainLayoutProps } from './types';

export const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <StyledMainLayoutContainer>
      <DesignOverlay />
      <MainHeader />
      <StyledMainLayoutMainContent>
        <Wrapper>{children}</Wrapper>
      </StyledMainLayoutMainContent>
    </StyledMainLayoutContainer>
  );
};
