import { request } from "./request";
import * as api from "./api";

export function getGoodsDetail(params) {
  return request({
    url: "/detail",
    params
  });
}

export function getRecommendData(){
  return request({
    url:'recommend',
  })
}

// 整合商品详情页基础数据
export class Goods {
  constructor(itemInfo, columns, services) {
    this.desc = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}
// 整合商品店铺信息数据
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}
// 整合商品详情信息数据
export class Detail {
  constructor(detailInfo) {
    this.desc = detailInfo.desc;
    this.detailImage = detailInfo.detailImage;
  }
}
// 整合商品参数信息数据
export class Params {
  constructor(itemParams) {
    this.info = itemParams.info;
    this.rule = itemParams.rule;
  }
}
