'use client';

import React from 'react';
import { DesignOverlay } from '../../ui/DesignOverlay';
import { IconSun } from '../../../icons';
import { StyledPlaceholderBlock, StyledTopper, StyledHeadline } from './styles';

interface IProps {}

export const HomePage: React.FC<IProps> = (props) => {
  return (
    <div>
      <DesignOverlay />
      <StyledTopper>
        <StyledHeadline>TODO</StyledHeadline>
        <IconSun />
      </StyledTopper>
    </div>
  );
};
