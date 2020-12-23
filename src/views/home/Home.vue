<template>
  <div class="homePage">
    <!-- 顶部导航 -->
    <main-nav-bar title="首页" />
    <tab-control
      :tabs="tabs"
      @tabItemClick="tabClick"
      ref="tabsFixed"
      class="tabControlFixed"
      v-show="isTabFixed"
    />
    <!-- 首页轮播 -->
    <scroll
      class="scrollWrapper"
      @pullUpLoad="goodsPullUpLoad"
      :probeType="3"
      ref="scroll"
      @pageScroll="pageScroll"
    >
      <home-swiper :bannerData="banner" @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommendData="recommend" />
      <feature-view />
      <tab-control :tabs="tabs" @tabItemClick="tabClick" ref="tabs" />
      <goods-list :goods="goods[currentTab].list" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/bscroll/BScroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";
import { getHomeMultidata, getGoodsData } from "network/home";
import { debounce } from "utils";
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      tabs: ["流行", "新款", "精选"],
      goods: {
        pop: { list: [], page: 0 },
        new: { list: [], page: 0 },
        sell: { list: [], page: 0 }
      },
      currentTab: "pop",
      isSticky: false,
      isShowBackTop: false,
      tabsOffsetTop: 0,
      isTabFixed: false
    };
  },

  created() {
    this.getHomeMultidata();
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("goodsItemImageLoad", () => {
      // this.$refs.scroll.scroll && this.$refs.scroll.scroll.refresh();
      refresh();
    });
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        let data = res.data;
        if (data.success) {
          this.banner = data.data.banner.list;
          this.recommend = data.data.recommend.list;
        }
      });
    },
    getGoodsData(type) {
      let page = (this.goods[type].page += 1);
      let params = {};
      params.type = type;
      params.page = page;
      getGoodsData(params).then(res => {
        console.log(res.data);
        let data = res.data;
        if (data.success) {
          this.goods[type].list.push(...data.data.list);
          this.goods[type].page += 1;
        }
      });
    },
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentTab = "pop";
          break;
        case 1:
          this.currentTab = "new";
          break;
        case 2:
          this.currentTab = "sell";
          break;
        default:
          this.currentTab = "pop";
      }
      this.$refs.tabs.currentTab = index;
      this.$refs.tabsFixed.currentTab = index;
    },
    goodsPullUpLoad(scroll) {
      console.log("上拉加载数据");
      this.getGoodsData(this.currentTab);
      scroll.finishPullUp();
    },
    backTopClick() {
      this.$refs.this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    pageScroll(position) {
      this.isShowBackTop = -position.y > 1000 ? true : false;
      this.isTabFixed = -position.y + 44 > this.tabsOffsetTop;
    },
    swiperImgLoad() {
      // 获取tabcontrol的offsetTop值----$el获取组件的子组件
      console.log(this.$refs.tabs.$el.offsetTop);
      this.tabsOffsetTop = this.$refs.tabs.$el.offsetTop;
    }
  },
  components: {
    MainNavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  }
};
</script>

<style>
.homePage {
  padding-top: 44px;
  padding-bottom: 49px;
  box-sizing: border-box;
}
.scrollWrapper {
  height: calc(100vh - 93px);
  overflow: hidden;
}
.tabControlFixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>
