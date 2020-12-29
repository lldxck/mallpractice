<template>
  <div class="detailPage">
    <!-- 顶部导航 -->
    <detail-nav-bar />
    <detail-swiper :topImages="topImages" />
    <detail-base-info :goodsDetailBaseInfo="goodsItemBaseInfo"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";

import { getGoodsDetail, Goods } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goodsItemBaseInfo: {}
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
        let data = res.data.result;
        // 获取详情页轮播数据
        this.topImages = data.itemInfo.topImages;
        this.goodsItemBaseInfo = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
      });
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  }
};
</script>

<style>
.detailPage {
  padding-top: 44px;
}
</style>
