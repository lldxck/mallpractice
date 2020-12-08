<template>
  <div class="homePage">
    <!-- 顶部导航 -->
    <main-nav-bar title="首页" />
    <!-- 首页轮播 -->
    <home-swiper :bannerData="banner"/>
    <recommend-view :recommendData="recommend"/>
    <feature-view />
    <tab-control :tabs="tabs"/>
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar"
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'
import FeatureView from './childComponents/FeatureView'
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      tabs:['流行','新款','精选'],
    };
  },
  mounted() {
    this.getHomeMultidata();
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        let data = res.data;
        if (data.success) {
          this.banner = data.data.banner.list;
          this.recommend = data.data.recommend.list;
        }
      });
    },
  },
  components: {
    MainNavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
};
</script>

<style>
.homePage {
  padding-top: 44px;
  padding-bottom: 80px;
}
</style>
