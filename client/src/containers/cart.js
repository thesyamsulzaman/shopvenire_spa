import React from "react";
import Cart from "../components/cart";

export function CartContainer({ children, ...props }) {
  return (
    <Cart>
      <Cart.Container>
        <Cart.Items>
          <Cart.Item>
            <Cart.Image />
            <Cart.Info>
              <p>CartTitle</p>
              <span>CartBrand</span>
              <div>
                <button>-</button>
                <p>3</p>
                <button>+</button>
              </div>
            </Cart.Info>
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
            <Cart.Info>
              
            </Cart.Info>
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
