import React, { useState } from "react";
import FormContainer, {
  FormWrapper as Form,
  FormGroup,
  Input,
  SubmitButton,
  Login
} from "../components/form";

export function LoginContainer({ children, ...props }) {
  return (
    <Login>
      <FormContainer>
        <Form>
          <FormGroup>
            <label>Username</label>
            <Input type="text" name="username" required />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <Input type="password" name="password" required />
          </FormGroup>
          <FormGroup>
            <SubmitButton type="submit" value="Login" required />
          </FormGroup>
        </Form>
      </FormContainer>
    </Login>
  );
}
