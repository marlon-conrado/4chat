import io from "socket.io-client";
import { fromEvent } from "rxjs";
import enviroment from "../enviroment";

class Event {
  constructor() {
    this.socket = io(`${enviroment.apiUrl}/profile`);
  }

  listen(eventName) {
    return fromEvent(this.socket, eventName);
  }

  emit(eventName, data) {
    return this.socket.emit(eventName, data);
  }
}

export default new Event();
