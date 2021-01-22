import React from "react";
import styled from "styled-components";

const FormHeader = styled.h1`
 margin-bottom: .31em;
`;

export default ({ children }) => {
  return <FormHeader>{children}</FormHeader>;
};
