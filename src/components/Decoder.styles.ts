import styled from 'styled-components';

export const Search = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 0.5rem;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  flex: 3;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;

export const Submit = styled.button`
  flex: 1;
  padding: 0.5rem 1rem;
`;