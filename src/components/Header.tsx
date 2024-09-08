import logo from '../assets/logo.svg';
import { Container, Heading, Logo } from './Header.styles';

const Header = () => (
  <Container>
    <Logo src={logo} alt="Holden logo" />
    <Heading>OLD HOLDEN</Heading>
  </Container>
);

export default Header;
