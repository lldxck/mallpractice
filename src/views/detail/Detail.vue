<template>
  <div class="detailPage">
    <!-- 顶部导航 -->
    <detail-nav-bar />
    <scroll class="scrollContainer">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goodsDetailBaseInfo="goodsItemBaseInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";

import Scroll from "components/common/bscroll/BScroll";

import { getGoodsDetail, Goods, Shop } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goodsItemBaseInfo: {},
      shopInfo: {}
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
        this.shopInfo = new Shop(data.shopInfo);
      });
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  }
};
</script>

<style>
.detailPage {
  padding-top: 44px;
  position: relative;
  z-index: 99;
  background-color: #fff;
}
.scrollContainer {
  height: calc(100vh - 44px);
  overflow: hidden;
}
</style>
