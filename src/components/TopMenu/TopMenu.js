import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import Cart from "../cart";
import "./TopMenu.scss";

export default function TopMenu(props) {
  const { productsCart, getProductsCart, products } = props;
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav></BrandNav>
        <Cart
          productsCart={productsCart}
          getProductsCart={getProductsCart}
          products={products}
        ></Cart>
      </Container>
    </Navbar>
  );
}

function BrandNav() {
  return (
    <Navbar.Brand>
      <Logo></Logo>
      <h2>La casa de los helados</h2>
    </Navbar.Brand>
  );
}
