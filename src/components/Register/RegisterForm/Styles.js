import styled from "styled-components";

export const TagRegisterForm = styled.form`
  background-color: #efeeee;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-family: Helvetica, sans-serif;
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 30px 40px;
`;

export const StyledLabel = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 2px;
  outline: none;
  border: none;
  padding: 0px 10px;
  border: ${props => (props.error ? "1px solid red" : "none")};
  box-sizing: border-box;
`;

export const FormRow = styled.div`
  margin-bottom: 20px;
`;

export const FormButton = styled.button`
  width: 100%;
  height: 25px;
  border-radius: 2px;
  border: none;
  background-color: #299a29;
  color: white;
  height: 35px;
`;
