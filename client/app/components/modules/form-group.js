import React from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  padding: 0.2em 0;

  & > * {
    display: block;
    margin-top: 0.3em;
    width: 100%;
  }
`;

export default ({ children }) => {
  return <FormGroup>{children}</FormGroup>;
};
