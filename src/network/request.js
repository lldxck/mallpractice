import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/h8",
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
