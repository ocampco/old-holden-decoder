import { Container, Heading, Links, Link } from './Header.styles';

function Header() {
  return (
    <Container>
      <Heading>🦁 Old Holden</Heading>
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
