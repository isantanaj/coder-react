import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/logo.png';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" width={150} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Mochilas</Nav.Link>
          <Nav.Link href="#features">Accesorios</Nav.Link>
          <Nav.Link href="#pricing">Maletas</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
