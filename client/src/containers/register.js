import React, { useState } from "react";
import FormContainer, {
  FormWrapper as Form,
  FormGroup,
  Input,
  SubmitButton,
  Register
} from "../components/form";

export function RegisterContainer({ children, ...props }) {
  return (
    <Register>
    <FormContainer>
      <Form>
        <FormGroup>
          <label>First Name</label>
          <Input type="email" name="first_name" required />
        </FormGroup>
        <FormGroup>
          <label>Last Name</label>
          <Input type="email" name="last_name" required />
        </FormGroup>
        <FormGroup>
          <label>Username</label>
          <Input type="text" name="username" required />
        </FormGroup>
        <FormGroup>
          <label>Email</label>
          <Input type="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <label>Password</label>
          <Input type="password" name="password" required />
        </FormGroup>
        <FormGroup>
          <SubmitButton type="submit" value="Register" />
        </FormGroup>
      </Form>
    </FormContainer>
    </Register>
  );
}
