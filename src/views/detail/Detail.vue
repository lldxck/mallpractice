<template>
  <div class="detailPage">
    <!-- 顶部导航 -->
    <detail-nav-bar />
    <scroll class="scrollContainer" ref="scroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goodsDetailBaseInfo="goodsItemBaseInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info
        :detailInfo="detailInfo"
        @detailImageLoad="detailImageLoad"
      />
      <detail-params-info :goodsParams="goodsParams" />
      <detail-comment-info :commentInfo="commentInfo" />
      <goods-list :goods="recommendData" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailParamsInfo from "./childComponents/DetailParamsInfo";
import DetailCommentInfo from "./childComponents/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";

import Scroll from "components/common/bscroll/BScroll";
// import { debounce } from "utils";
import {listImgLoadMixin} from 'mixins/mixins';

import {
  getGoodsDetail,
  Goods,
  Shop,
  Detail,
  Params,
  getRecommendData
} from "network/detail";
export default {
  name: "Detail",
  mixins:[listImgLoadMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goodsItemBaseInfo: {},
      shopInfo: {},
      detailInfo: {},
      refresh: null,
      goodsParams: {},
      commentInfo: {},
      recommendData: [],
      // itemImageLoad: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getGoodsDetailData(this.iid);
    this.getRecommendData();
  },
  mounted() {
  //  const refresh = debounce(this.$refs.scroll.refresh, 500);
  //   // this.$on("detailImageLoad", () => {
  //   //   console.log("监听图片加载完成");
  //   //   refresh();
  //   // });
  //   this.itemImageLoad=() => {
  //     refresh()
  //   }
  //   this.$bus.$on('goodsItemImageLoad',this.itemImageLoad)
  },
  destroyed(){
    // this.$bus.$off("goodsItemImageLoad", this.itemImageLoad);
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
        this.detailInfo = new Detail(data.detailInfo);
        this.goodsParams = new Params(data.itemParams);
        this.commentInfo = data.rate;
      });
    },
    detailImageLoad() {
      // console.log("监听图片加载完成");
      // this.refresh();
      this.$refs.scroll.refresh();
    },
    getRecommendData() {
      getRecommendData().then(res => {
        const data = res.data;
        console.log("推荐数据", data);
        if (data.success) {
          this.recommendData = data.data.list;
        }
      });
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList
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
