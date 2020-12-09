<template>
  <div class="goodsList">
    <goods-list-item  v-for="(item,index) in goods" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "goodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    GoodsListItem
  }
};
</script>

<style>
.goodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goodsList:after {
  content: "";
  width: 47%;
}
</style>
