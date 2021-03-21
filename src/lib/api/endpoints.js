const endpoints = {
  getChats: "/chats",
  getMessages: "/chat/messages",
  createUser: "/user"
};

export const endpointsv2 = {
  getChats: {
    method: "get",
    uri: "/chats/{params.userId}?hola_mundo={params.userId}"
  }
};

export default endpoints;
