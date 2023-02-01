import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UilStore, UilShoppingCartAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { Cart } from "../context/Context";
import { useContext } from "react";

function NavMenu() {
  const CartState = useContext(Cart);
  const state = CartState.state;
  return (
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand>
          <Link
            to="/"
            style={{ display: "flex", color: "black", textDecoration: "none" }}
          >
            <UilStore size={30} />
            <h3>Rubystore</h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="mx-auto  my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
          >
            <Link
              to="/"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "#033644",
                fontSize: "18px",
              }}
            >
              Home
            </Link>
            <Link
              to="/products"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "#033644",
                fontSize: "18px",
              }}
            >
              Products
            </Link>
            <Link
              to="/about"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "#033644",
                fontSize: "18px",
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "#033644",
                fontSize: "18px",
              }}
            >
              Contact
            </Link>
          </Nav>
          {/* CART */}
          <div className="nav-cart">
            <Link
              to="/cartpage"
              style={{
                textDecoration: "none",
                color: "#033644",
              }}
            >
              <div
                className="center"
                style={{
                  display: "flex",
                  verticalAlign: "middle",
                }}
              >
                <UilShoppingCartAlt size={26} />
                <p>({state.length}) </p>
              </div>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
