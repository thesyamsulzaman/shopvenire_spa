import styled from "styled-components";

export const Container = styled.div`
  padding: 0.81em 0;
  display: flex;
  justify-content: center;
  height: auto;
`;

export const Group = styled.div`
  padding: 0.2em 0;

  & > * {
    display: block;
    margin-top: 0.3em;
    width: 100%;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5em 0.5em;
`;

export const SubmitButton = styled(Input)`
  color: #fff;
  background-color: #111;
  border: none;
  padding: 0.8em 0;
`;


export const Form = styled.form`
  padding: 0.8em 0.7em;
  border: 1px solid darkgray;
  border-radius: 5px;
  width:100%;
  max-width: 400px;
  margin-top: 1.2em;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
`;
