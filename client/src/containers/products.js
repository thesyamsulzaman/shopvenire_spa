import React from "react";
import Products from "../components/products";
import { Card } from "../components/card";

export function ProductsContainer({ children, ...props }) {
  return (
    <Products>
      <h2> All Products</h2>
      <Products.Container>

        <Card>
          <Card.Image />
          <Card.Body>
            <Card.Info>
              <Card.Title to="/products"> Redist Long Sleeve Hoodie </Card.Title>
              <Card.Brand to="/products"> Attractive Fashion</Card.Brand>
            </Card.Info>
            <Card.Price>$19</Card.Price>
          </Card.Body>
        </Card>

        <Card>
          <Card.Image />
          <Card.Body>
            <Card.Info>
              <Card.Title to="/products"> Redist Long Sleeve Hoodie </Card.Title>
              <Card.Brand to="/products"> Attractive Fashion</Card.Brand>
            </Card.Info>
            <Card.Price>$19</Card.Price>
          </Card.Body>
        </Card>

        <Card>
          <Card.Image />
          <Card.Body>
            <Card.Info>
              <Card.Title to="/products"> Redist Long Sleeve Hoodie </Card.Title>
              <Card.Brand to="/products"> Attractive Fashion</Card.Brand>
            </Card.Info>
            <Card.Price>$19</Card.Price>
          </Card.Body>
        </Card>

      </Products.Container>
    </Products>
  );
}
