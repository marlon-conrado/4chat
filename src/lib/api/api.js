import enviroment from "../../enviroment";
import axios from "axios";

class API {
  constructor() {
    this.client = axios.create({ baseURL: enviroment.apiUrl });
  }

  get(uri) {
    return this.client.get(uri);
  }

  post(uri, data) {
    return this.client.post(uri, data);
  }
}

export default new API();
