import styled, { css } from 'styled-components';
import { IStyledPaperProps } from './types';

export const StyledPaperContainer = styled.div<IStyledPaperProps>`
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.current.paper};
  overflow: hidden;

  ${({ padding, paddingTop, paddingRight, paddingBottom, paddingLeft }) => {
    if (padding) {
      return css`
        padding: ${padding}rem;
      `;
    }

    if (paddingTop) {
      return css`
        padding-top: ${paddingTop}rem;
      `;
    }

    if (paddingRight) {
      return css`
        padding-right: ${paddingRight}rem;
      `;
    }

    if (paddingBottom) {
      return css`
        padding-bottom: ${paddingBottom}rem;
      `;
    }

    if (paddingLeft) {
      return css`
        padding-left: ${paddingLeft}rem;
      `;
    }
  }}
`;
