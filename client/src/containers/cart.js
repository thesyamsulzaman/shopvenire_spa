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
              <Cart.TitleInfo to="/products">Men's wool hoodie</Cart.TitleInfo>
              <Cart.BrandInfo to="/products">Natural Black</Cart.BrandInfo>
              <Cart.Action>
                <button>-</button>
                <Cart.Amount>3</Cart.Amount>
                <button>+</button>
              </Cart.Action>
              <Cart.Price>$14</Cart.Price>
              <Cart.Remove>&times;</Cart.Remove>
            </Cart.Info>
          </Cart.Item>
          <hr />


          <Cart.Item>
            <Cart.Image />
            <Cart.Info>
              <Cart.TitleInfo to="/products">Men's wool hoodie</Cart.TitleInfo>
              <Cart.BrandInfo to="/products">Natural Black</Cart.BrandInfo>
              <Cart.Action>
                <button>-</button>
                <Cart.Amount>3</Cart.Amount>
                <button>+</button>
              </Cart.Action>
              <Cart.Price>$14</Cart.Price>
              <Cart.Remove>&times;</Cart.Remove>
            </Cart.Info>
          </Cart.Item>
          <hr />


          <Cart.Item>
            <Cart.Image />
            <Cart.Info>
              <Cart.TitleInfo to="/products">Men's wool hoodie</Cart.TitleInfo>
              <Cart.BrandInfo to="/products">Natural Black</Cart.BrandInfo>
              <Cart.Action>
                <button>-</button>
                <Cart.Amount>3</Cart.Amount>
                <button>+</button>
              </Cart.Action>
              <Cart.Price>$14</Cart.Price>
              <Cart.Remove>&times;</Cart.Remove>
            </Cart.Info>
          </Cart.Item>
          <hr />


          <Cart.Item>
            <Cart.Image />
            <Cart.Info>
              <Cart.TitleInfo to="/products">Men's wool hoodie</Cart.TitleInfo>
              <Cart.BrandInfo to="/products">Natural Black</Cart.BrandInfo>
              <Cart.Action>
                <button>-</button>
                <Cart.Amount>3</Cart.Amount>
                <button>+</button>
              </Cart.Action>
              <Cart.Price>$14</Cart.Price>
              <Cart.Remove>&times;</Cart.Remove>
            </Cart.Info>
          </Cart.Item>
          <hr />

        </Cart.Items>
        <Cart.Checkout>
          <Cart.Total>
            <p>Subtotal</p>
            <span>$28</span>
          </Cart.Total>
          <Cart.Total>
            <p>Shipping</p>
            <span>$2</span>
          </Cart.Total>
          <hr />
          <Cart.Total>
            <p>Grand Total</p>
            <span>$30</span>
          </Cart.Total>
          <Cart.Proceed to="/checkout">CHECKOUT</Cart.Proceed>
        </Cart.Checkout>
      </Cart.Container>
    </Cart>
  );
}
