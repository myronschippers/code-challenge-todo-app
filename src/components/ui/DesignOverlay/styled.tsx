import styled, { css } from 'styled-components';

const StyledToggleBtnMixin = css`
  padding: 0.4rem 0.8rem;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  cursor: pointer;
`;

export const StyledOverlayContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;

  & > img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.3;
  }
`;

export const StyledOverlayToggleClose = styled.button`
  ${StyledToggleBtnMixin}
  background-color: ${({ theme }) => theme.palette.primary};
  position: absolute;
  right: 2rem;
  top: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primaryHover};
  }
`;
