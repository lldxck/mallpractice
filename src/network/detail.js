import { request } from "./request";

export function getGoodsDetail(params) {
  return request({
    url: "/detail",
    params
  });
}

// 整合商品详情页数据
export class Goods {
  constructor(itemInfo, columns, services) {
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}
