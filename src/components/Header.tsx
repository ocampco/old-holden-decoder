import logo from '../assets/logo.svg';
import { Container, Heading, Logo } from './Header.styles';

const Header = () => (
  <Container>
    <Logo src={logo} alt="Holden logo" />
    <Heading>VIN Decoder</Heading>
  </Container>
);

export default Header;
