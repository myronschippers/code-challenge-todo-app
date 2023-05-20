import React from 'react';
import { StyledPaperContainer } from './styles';
import { IPaperProps } from './types';

export const Paper: React.FC<IPaperProps> = ({
  children,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  ...props
}) => {
  const styledProps = {
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  };

  return (
    <StyledPaperContainer
      {...styledProps}
      {...props}
    >
      {children}
    </StyledPaperContainer>
  );
};
