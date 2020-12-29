<template>
  <div class="detailShopInfo" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shopName">
      <div class="shopLogo">
        <img :src="shopInfo.shopLogo" alt="" />
      </div>
      <p class="nameText">{{ shopInfo.name }}</p>
    </div>
    <div class="sellAndScore">
      <div class="sellContainer">
        <div class="sell">
          <p class="count">{{ sellCount }}</p>
          <p class="countDes">总销量</p>
        </div>
        <div class="goodsCount">
          <p class="count">{{ shopInfo.cGoods }}</p>
          <p class="countDes">全部宝贝</p>
        </div>
      </div>
      <div class="scoreContainer">
        <div v-for="(item, index) in shopInfo.score" :key="index" class="scoreItem">
          <span class="scoreName">{{ item.name }}</span>
          <span class="scoreCount" :style="{color:item.isBetter?'red':'green'}">{{ item.score }}</span>
          <span :style="{backgroundColor:item.isBetter?'red':'green'}" class="scoreLevel">{{ item.isBetter ? "高" : "低" }}</span>
        </div>
      </div>
    </div>
    <div class="goShop">
      <div class="shopBtn">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    sellCount() {
      return this.shopInfo.cSells > 9999
        ? (this.shopInfo.cSells / 10000).toFixed(1) + "万"
        : this.shopInfo.cSells;
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.detailShopInfo {
  padding: 0 8px;
}
.shopName {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.shopLogo {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: pink;
  margin-right: 16px;
}
.nameText {
  font-size: 18px;
  color: #333;
}
.sellAndScore{
  display: flex;
  justify-content: space-between;
}
.sellContainer {
  display: flex;
  flex:1;
  margin: 15px 0;
  border-right:1px solid #eee;
}
.sell,.goodsCount{
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.count{
  font-size: 20px;
  color:#333;
}
.countDes{
  font-size: 12px;
  color:#333;
  margin-top: 8px;
}
.scoreContainer{
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
.scoreItem{
  height: 28px;
  line-height: 28px;
}
.scoreName{
  font-size: 14px;
  color:#333;
  margin-right: 10px;

}
.scoreCount{
  display: inline-block;
  width: 35px;
  font-size: 14px;
  margin-right: 10px;
}
.scoreLevel{
  color:#fff;
  font-size: 14px;
}
.goShop{
  display: flex;
  justify-content: center;
  height: 40px;
  margin: 15px 0 20px;
}
.shopBtn{
  width: 180px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 90px;
  background-color: #f9f9f9;
  color:#333;
}
</style>
