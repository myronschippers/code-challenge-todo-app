'use client';

import styled, { css } from 'styled-components';

const StyledBlockMixin = css`
  box-sizing: border-box;
  padding: 0.8rem 1.6rem;
  border-radius: 3px;
`;

export const StyledPalettePrimary = styled.div`
  ${StyledBlockMixin}

  background-color: ${({ theme }) => theme.palette.primary};
`;
