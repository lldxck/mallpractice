<template>
  <div class="homePage">
    <!-- 顶部导航 -->
    <main-nav-bar title="首页" />
    <!-- 首页轮播 -->
    <scroll class="scrollWrapper" @pullUpLoad="goodsPullUpLoad" >
      <home-swiper :bannerData="banner" />
      <recommend-view :recommendData="recommend" />
      <feature-view />
      <tab-control :tabs="tabs" @tabItemClick="tabClick" ref="tabs"/>
      <goods-list :goods="goods[currentTab].list" />
    </scroll>
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/bscroll/BScroll";

import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";
import { getHomeMultidata, getGoodsData } from "network/home";
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
      isSticky:false
    };
  },

  created() {
    this.getHomeMultidata();
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");
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
    },
    goodsPullUpLoad(scroll){
      console.log('上拉加载数据')
      this.getGoodsData(this.currentTab)
      scroll.finishPullUp()
    },
    
  },
  components: {
    MainNavBar,
    TabControl,
    GoodsList,
    Scroll,
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

</style>
