import logo from '../assets/logo.svg';
import { Container, Heading, Logo, Links, Link } from './Header.styles';

function Header() {
  return (
    <Container>
      <Logo src={logo} alt="Holden logo" />
      <Heading>OLD HOLDEN</Heading>
      <Links>
        <Link href="/old-holden-decoder/decode/vin">Decode VIN</Link>
        <Link href="/old-holden-decoder/decode/engine-number">
          Decode Engine Number
        </Link>
      </Links>
    </Container>
  );
}

export default Header;
