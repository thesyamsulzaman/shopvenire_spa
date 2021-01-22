import React, { useState } from "react";
import styled from "styled-components";

import { Container } from "../base/container";
import Form from "../modules/form";
import { Input } from "../modules/input";
import FormGroup from "../modules/form-group";
import FormHeader from "../modules/form-header";
import { SubmitButton } from "../modules/form-submit";


const LoginContainer = styled(Container)`
  padding: .81em 0;
  display:flex;
  justify-content:center;
  height:auto;
`;

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginContainer>
      <Form>
        <FormHeader>Login</FormHeader>
        <FormGroup>
          <label>Username</label>
          <Input type="text" name="username" required/>
        </FormGroup>
        <FormGroup>
          <label>Password</label>
          <Input type="password" name="password" required/>
        </FormGroup>
        <FormGroup>
          <SubmitButton type="submit" value="Login" required />
        </FormGroup>
      </Form>
    </LoginContainer>
  );
};
