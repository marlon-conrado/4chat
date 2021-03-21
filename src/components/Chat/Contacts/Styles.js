import styled from "styled-components";

export const Container = styled.div`
  background-color: #f1efef;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
`;

export const OptionsContainer = styled.div``;

export const OptionItem = styled.div`
  display: flex;
  background-color: ${props => (props.selected ? "#ebe8e8" : "none")};
  padding: 10px;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 100%;
  margin-right: 20px;
`;

export const OptionName = styled.p`
  line-height: 50px;
`;

export const InputSearchContainer = styled.div`
  padding: 10px;
  background-color: #d0cece;
`;

export const InputSearch = styled.input`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 20px;
`;
