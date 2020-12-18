<template>
  <!-- <div class="goodsListItem">
    <img src="" alt="" />
    <div class="title">哈哈哈哈</div>
    <div class="goodInfo">
      <span class="price">¥32</span>
      <span class="collect">11</span>
    </div> 
  </div> -->
  <div class="goodsListItem">
    <!-- load事件=>监听img加载完成执行的事件 -->
    <img :src="goodsItem.show.img" alt="" @load="imgLoad"/>
    <div class="title">{{goodsItem.title}}</div>
    <div class="goodInfo">
      <span class="price">¥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods:{
    imgLoad(){
      console.log('图片加载完成')
      this.$bus.$emit('goodsItemImageLoad')
    }
  },
};
</script>

<style>
.goodsListItem {
  /* flex:1; */
  width: 47%;
  margin-top: 10px;
}
.goodsListItem img {
  width: 100%;
  height: 260px;
}
.title {
  font-size: 16px;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 6px;
}
.goodInfo {
  text-align: center;
}
.price {
  font-size: 14px;
  color: var(--color-high-text);
  margin-right: 10px;
}
.collect {
  font-size: 14px;
  color: #333;
}
.collect:before {
  content: "";
  background: url("~assets/img/common/collect.svg") no-repeat;
  width: 14px;
  height: 14px;
  display: inline-block;
  background-size: 14px;
  margin-right: 3px;
}
</style>
