import styled from 'styled-components';

export const StyledMainLayoutContainer = styled.div`
  &::before {
    content: '';
    width: 100%;
    height: 300px;
    background: url('/images/bg-desktop-dark.jpg');
    background-size: cover;
    position: absolute;
    z-index: -1;
  }
`;

export const StyledMainLayoutMainContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
