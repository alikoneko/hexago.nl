import styled from 'styled-components';

export const Container = styled.header`
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  padding: 2rem;
  background-color: #fef7d2;
  display: flex;

  a {
    color: #23212C;
    transition: color 0.2s ease;
    text-decoration: none;
    justify-self: start;

    &:hover {
      color: #992409;
    }
  }
`;
