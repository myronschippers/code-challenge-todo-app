import styled from 'styled-components';

export const StyledRemoveButton = styled.button`
  background: transparent;
  border-width: 0;
  cursor: pointer;

  &:hover {
    background: transparent;
  }
`;

export const StyledCompletionListItemContainer = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2.5rem 2.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.current.divider};
  cursor: pointer;
`;
