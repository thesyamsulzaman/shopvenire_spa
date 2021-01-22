import React from "react";
import styled from "styled-components";

const Form = styled.form`
  padding: 0.8em 0.7em;
  border: 1px solid darkgray;
  border-radius: 5px;
  width:100%;
  max-width: 400px;
  margin-top: 1.2em;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
`;

export default ({ children }) => {
  return <Form>{children}</Form>;
};
