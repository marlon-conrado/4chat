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

export const ScrollContainer = styled.div`
  height: 92vh;
  overflow: auto;
`;

export const ContainerInputChat = styled.div`
  position: fixed;
  bottom: 0;
  height: 8vh;
  width: calc(100% - ${props => props.sideBarWidth});
`;
