import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.isMine ? "row-reverse" : "row")};
  margin-bottom: 15px;
`;

export const Message = styled.p`
  font-family: Helvetica, sans-serif;
  background-color: ${props => (props.isMine ? "lightblue" : "lightgray")};
  padding: 10px 20px;
  border-radius: 10px;
`;
