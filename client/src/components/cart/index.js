import React from "react";
import {
  Frame,
  Container,
  Items,
  Checkout,
  Item,
  Image,
  Info
} from "./styles/cart";

export default function Cart({ children, ...props }) {
  return <Frame {...props}>{children}</Frame>;
}

Cart.Container = function CartContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Cart.Items = function CartItems({ children, ...props }) {
  return <Items {...props}>{children}</Items>;
};

Cart.Item = function CartItem({ children, ...props }) {
  return <Item {...props}>{children}</Item>;
};

Cart.Image = function CartImage({ children, ...props }) {
  return <Image {...props} />;
};

Cart.Info = function CartInfo({ children, ...props }) {
  return <Info {...props}>{children}</Info>;
};

Cart.Checkout = function CartCheckout({ children, ...props }) {
  return <Checkout {...props}>{children}</Checkout>;
};
