import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 1.8rem 1.6rem;
  padding-left: 6.6rem;
  border: 2px solid ${({ theme }) => theme.palette.current.paper};
  background: transparent;
  font-size: 1.8rem;
  line-height: 1;
  border-radius: 0.5rem;

  &:focus {
    border-color: ${({ theme }) => theme.palette.current.focus};
    outline-offset: 0px;
    outline: none;
  }
`;
