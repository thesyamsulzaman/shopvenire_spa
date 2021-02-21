import React from "react";
import { Form, Input, Container, Group, SubmitButton, Frame } from "./styles/form.js";


export default function FormContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export function FormGroup({ children, ...props }) {
  return <Group>{children}</Group>;
}

export function FormWrapper({ children, ...props }) {
  return <Form>{children}</Form>;
}

export function Register({ children, ...props }) {
  return <Frame {...props}>{children}</Frame>;
}

export function Login({ children, ...props }) {
  return <Frame {...props}>{children}</Frame>;
}

export { SubmitButton, Input };
