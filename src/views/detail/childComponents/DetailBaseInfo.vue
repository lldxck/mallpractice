<template>
  <div
    class="detailBaseInfo"
    v-if="Object.keys(goodsDetailBaseInfo).length !== 0"
  >
    <div class="detailTitle">
      {{ goodsDetailBaseInfo.desc }}
    </div>
    <div class="priceContainer">
      <span class="price">{{ goodsDetailBaseInfo.price }}</span>
      <del class="oldPrice">{{ goodsDetailBaseInfo.oldPrice }}</del>
      <span class="specialPriceTag">{{
        goodsDetailBaseInfo.discountDesc
      }}</span>
    </div>
    <div class="columnsContainer">
      <span>{{ goodsDetailBaseInfo.columns[0] }}</span>
      <span>{{ goodsDetailBaseInfo.columns[1] }}</span>
      <span>{{
        goodsDetailBaseInfo.services[goodsDetailBaseInfo.services.length - 1]
          .name
      }}</span>
    </div>
    <div class="serviceContainer">
      <div
        v-for="index in goodsDetailBaseInfo.services.length - 1"
        :key="index"
        class="serviceItem"
      >
        <img :src="goodsDetailBaseInfo.services[index - 1].icon" alt="" />
        <span>{{
          goodsDetailBaseInfo.services[index - 1].name
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props: {
    goodsDetailBaseInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.detailBaseInfo {
  padding: 15px 8px 0;
  border: 3px solid #f9f9f9;
}
.detailTitle {
  width: 100%;
  font-size: 18px;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.priceContainer {
  margin-top: 12px;
}
.price {
  font-size: 18px;
  color: var(--color-high-text);
  margin-right: 10px;
}
.oldPrice {
  font-size: 14px;
  color: #999;
  margin-right: 10px;
}
.specialPriceTag {
  display: inline-block;
  padding: 2px 5px;
  background-color: var(--color-tint);
  color: #fff;
  font-size: 8px;
  border-radius: 8px;
  margin-top: -5px;
  position: relative;
  top: -6px;
}
.columnsContainer {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
}
.columnsContainer span {
  color: #999;
  font-size: 14px;
}
.serviceContainer {
  margin: 15px 0 20px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.serviceItem img{
  width: 12px;
  vertical-align: middle;
  margin-bottom: 2px;

}
</style>
