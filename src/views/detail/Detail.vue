<template>
  <div class="detailPage">
    <!-- 顶部导航 -->
    <detail-nav-bar />
    <detail-swiper :topImages="topImages" />
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";

import { getGoodsDetail } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getGoodsDetailData(this.iid);
  },
  methods: {
    getGoodsDetailData(iid) {
      let params = {};
      params.iid = iid;
      getGoodsDetail(params).then(res => {
        console.log(res);
        // 获取详情页轮播数据
        this.topImages = res.data.result.itemInfo.topImages;
      });
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  }
};
</script>

<style>
.detailPage {
  padding-top: 44px;
}
</style>
