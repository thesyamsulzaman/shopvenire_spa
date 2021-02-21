import React from "react";
import {
  Frame,
  Container,
  Items,
  Checkout,
  Item,
  Image,
  Info,
  BrandInfo,
  TitleInfo,
  Amount,
  Action,
  Price,
  Remove,
  Total,
  Proceed
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

Cart.TitleInfo = function CartTitleInfo({ children, ...props }) {
  return <TitleInfo {...props}>{children}</TitleInfo>;
};

Cart.BrandInfo = function CartBrandInfo({ children, ...props }) {
  return <BrandInfo {...props}>{children}</BrandInfo>;
};

Cart.Action = function CartAction({ children, ...props }) {
  return <Action {...props}>{children}</Action>;
};

Cart.Amount = function CartAmount({ children, ...props }) {
  return <Amount {...props}>{children}</Amount>;
};

Cart.Price = function CartPrice({ children, ...props }) {
  return <Price {...props}>{children}</Price>;
};

Cart.Remove = function CartRemove({ children, ...props }) {
  return <Remove {...props}>{children}</Remove>;
};

Cart.Total = function CartTotal({ children, ...props }) {
  return <Total {...props}>{children}</Total>;
};

Cart.Checkout = function CartCheckout({ children, ...props }) {
  return <Checkout {...props}>{children}</Checkout>;
};

Cart.Proceed = function CartProceed({ children, ...props }) {
  return <Proceed {...props}>{children}</Proceed>;
};
