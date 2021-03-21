import apiv2 from "./apiv2";
import endpoints from "./endpoints";

class ChatAPI {
  getListChat({ userId }) {
    return apiv2.getChats({
      param: {
        userId
      }
    });
  }

  getMessages({ chatId }) {
    return api.get(`${endpoints.getMessages}/${chatId}`);
  }
}

export default ChatAPI;
