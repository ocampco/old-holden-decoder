import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  height: 4rem;
  margin-right: 1rem;
`;

export const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Links = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const Link = styled.a`
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
`