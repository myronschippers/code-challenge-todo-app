import styled, { css } from 'styled-components';
import { IStyledCompletionListItemContainerProps } from './types';

const MixinMark = css`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.palette.current.paper};
  font-size: 0;
  overflow: hidden;
`;

export const StyledCompleteMark = styled.div`
  ${MixinMark}
  background: ${({ theme }) => theme.palette.checkGradient};

  & svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledIncompleteMark = styled.div`
  ${MixinMark}
  border: 2px solid ${({ theme }) => theme.palette.current.divider};
`;

export const StyledRemoveButton = styled.button`
  margin-left: auto;
  background: transparent;
  border-width: 0;
  cursor: pointer;
  fill: ${({ theme }) => theme.palette.current.remove};

  & svg {
    display: inline-block;
  }

  &:hover svg {
    fill: ${({ theme }) => theme.palette.current.removeHover};
  }
`;

export const StyledCompletionListItemContainer = styled.li<IStyledCompletionListItemContainerProps>`
  display: flex;
  align-items: center;
  column-gap: 2.6rem;
  width: 100%;
  padding: 2.5rem 2.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.current.divider};
  letter-spacing: 0.04em;
  font-size: 1.6rem;
  cursor: pointer;

  ${({ theme, isCompleted }) => {
    const { palette } = theme;

    if (isCompleted) {
      return css`
        color: ${palette.current.textDeemphasized};
        text-decoration: line-through;
      `;
    }

    return css`
      color: ${palette.current.text};
    `;
  }}

  & ${StyledRemoveButton} {
    display: none;
  }

  &:hover ${StyledRemoveButton} {
    display: block;
  }

  &:hover ${StyledIncompleteMark} {
    background: ${({ theme }) => theme.palette.checkGradient};
  }

  &:hover ${StyledIncompleteMark}:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 2px;
    border-radius: inherit;
    background: ${({ theme }) => theme.palette.current.paper};
  }
`;
