import React from "react";
import Cart from "../components/cart";

export function CartContainer({ children, ...props }) {
  return (
    <Cart>
      <Cart.Container>
        <Cart.Items>
          <Cart.Item>
            <Cart.Image />
            <Cart.Info>Desc</Cart.Info>
          </Cart.Item>
          <hr />
          <Cart.Item>
            <Cart.Image />
            <Cart.Info>Desc</Cart.Info>
          </Cart.Item>
          <hr />
          <Cart.Item>
            <Cart.Image />
            <Cart.Info>Desc</Cart.Info>
          </Cart.Item>
          <hr />
          <Cart.Item>
            <Cart.Image />
            <Cart.Info>Desc</Cart.Info>
          </Cart.Item>
          <hr />
        </Cart.Items>
        <Cart.Checkout>
          Gaming
        </Cart.Checkout>
      </Cart.Container>
    </Cart>
  );
}
