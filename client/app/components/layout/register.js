import React, { useState } from "react";
import { Container } from "../base/container";
import styled from "styled-components";
import Form from "../modules/form";
import { Input } from "../modules/input";
import FormGroup from "../modules/form-group";
import FormHeader from "../modules/form-header";
import { SubmitButton } from "../modules/form-submit";

const RegisterContainer = styled(Container)`
  padding: 0.81em 0;
  display: flex;
  justify-content: center;
  height: auto;
`;

const RegisterComponent = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <RegisterContainer>
      <Form>
        <FormHeader>Register</FormHeader>
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
    </RegisterContainer>
  );
};


export default RegisterComponent;
