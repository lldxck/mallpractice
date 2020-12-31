<template>
  <div class="detailGoodsInfo">
    <div class="detailGoodsDesc">
      <div class="top">
        <div class="point"></div>
        <div class="line"></div>
      </div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="bottom">
        <div class="line"></div>
        <div class="point"></div>
      </div>
    </div>
    <div
      class="detailImageContainer"
      v-for="(item, index) in detailInfo.detailImage"
      :key="index"
    >
      <div>{{ item.key }}</div>
      <div v-for="(item, index) in item.list" :key="index">
        <img :src="item" alt="" @load="detailImageLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      imgCount: 0
    };
  },
  created() {},
  methods: {
    detailImageLoad() {
      console.log("图片加载完成");
      this.$emit("detailImageLoad");
    }
  }
};
</script>

<style>
.detailGoodsInfo {
  padding: 0 8px 15px;
  border-bottom: 5px solid #f9f9f9;
}
.detailGoodsDesc {
  font-size: 14px;
  padding: 10px 5px;
}
.desc {
  color: #333;
  padding: 10px 0;
}
.top {
  display: flex;
  align-items: flex-end;
}
.bottom {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.point {
  width: 6px;
  height: 6px;
  background-color: #999;
  border-radius: 3px;
}
.line {
  width: 40%;
  height: 2px;
  background-color: #eee;
}
.detailImageContainer {
}
.detailImageContainer img {
  max-width: 100%;
}
</style>
