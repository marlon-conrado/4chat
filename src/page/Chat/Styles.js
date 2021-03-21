import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export const ContactContainer = styled.div`
  min-width: ${props => props.width};
  height: 100vh;
`;

export const ChatMessagesContainer = styled.div`
  width: 100%;
`;
