import React from "react";
import { Form, Input, Container, Group, SubmitButton } from "./styles/form.js";

export default function FormContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export function FormGroup({ children, ...props }) {
  return <Group>{children}</Group>;
}

export function FormWrapper({ children, ...props }) {
  return <Form>{children}</Form>;
}



export { SubmitButton, Input };
