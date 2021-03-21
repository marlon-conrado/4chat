import api from "./api";
import endpoints from "./endpoints";

class UserApi {
  createUser({ name, lastName, email, phone, password }) {
    return api.post(endpoints.user, { name, lastName, email, phone, password });
  }
}

export default UserApi;
