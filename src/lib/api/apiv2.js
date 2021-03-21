import { endpointsv2 } from "./endpoints";
import enviroment from "../../enviroment";
import axios from "axios";

const axiosClient = axios.create({ baseURL: enviroment.apiUrl });

const createFnRequest = endpoint => {
  return data => {
    if (data.param) {
      Object.keys(data.param).forEach(key => {
        endpoint.uri = endpoint.uri.replace(
          new RegExp(`{params.${key}}`, "g"),
          data.param[key]
        );
      });
    }

    if (endpoint.method === "get") {
      return axiosClient[endpoint.method](endpoint.uri);
    } else if (endpoint.method === "post") {
      return axiosClient[endpoint.method](endpoint.uri, data.body);
    }
  };
};

const endpoints = Object.entries(endpointsv2).map(([key, endpoint]) => {
  return [key, createFnRequest(endpoint)];
});

export default Object.fromEntries(endpoints);
