<template>
  <div class="mainTabBar">
    <tab-bar>
      <tab-bar-item path="/home" styleColor="red">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-img" />
        <img
          src="~assets/img/tabbar/home_active.svg"
          alt=""
          slot="item-img-active"
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" styleColor="red">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-img" />
        <img
          src="~assets/img/tabbar/category_active.svg"
          alt=""
          slot="item-img-active"
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopCart" styleColor="red">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-img" />
        <img
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
          slot="item-img-active"
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" styleColor="red">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-img" />
        <img
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
          slot="item-img-active"
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";
export default {
  name: "mainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style></style>
