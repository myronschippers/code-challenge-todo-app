import React from 'react';
import { IconSun } from '@/icons';
import { Wrapper } from '@/components/templates/Wrapper';
import { DesignOverlay } from '@/components/ui/DesignOverlay';
import { StyledMainHeaderContainer, StyledHeadline } from './styles';
import { IMainHeaderProps } from './types';

export const MainHeader: React.FC<IMainHeaderProps> = ({ children }) => {
  return (
    <>
      <DesignOverlay />
      <Wrapper>
        <StyledMainHeaderContainer>
          <StyledHeadline>TODO</StyledHeadline>
          <IconSun />
        </StyledMainHeaderContainer>
      </Wrapper>
    </>
  );
};
