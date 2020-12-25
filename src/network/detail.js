import { request } from "./request";

export function getGoodsDetail(params) {
  return request({
    url: "/detail",
    params
  });
}
