import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Container, Nav} from 'react-bootstrap';
import ShopCart from './ShopCart';
import {LinkContainer} from 'react-router-bootstrap'

const MiNavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/Brand">
          <Navbar.Brand>Mi Ecommerce</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/home">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Películas" id="basic-nav-dropdown">
              <LinkContainer to="/Populares">
                <NavDropdown.Item>Populares</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Recientes">
                <NavDropdown.Item>Recientes</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Recientes">
                <NavDropdown.Item>Mejores puntuadas</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav>
          <LinkContainer to="/login">
            <Nav.Link>Iniciar Sesión</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/register">
            <Nav.Link>Registrarse</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/login">
            <ShopCart />
          </LinkContainer>


        </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  )
}

export default MiNavBar;

