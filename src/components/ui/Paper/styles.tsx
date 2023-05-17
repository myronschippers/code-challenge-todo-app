import styled from 'styled-components';

export const StyledPaperContainer = styled.div`
  width: 100%;
  /* padding: 2.5rem 2.2rem; */
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.current.paper};
  overflow: hidden;
`;
