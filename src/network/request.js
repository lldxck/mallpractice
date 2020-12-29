import axios from "axios";
import * as api from './api'

export function request(config) {
  const instance = axios.create({
    baseURL: api.BASEURL,
    timeout: 10000,
  });

  // 请求拦截
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      return err;
    }
  );

  // 响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      return err;
    }
  );

  return instance(config);
}
