<template>
  <nav-bar class="mainNavBar">
    <!-- <div slot="navLeft">左侧</div> -->
    <div slot="navCenter">{{title}}</div>
    <!-- <div slot="navRight">右侧</div> -->
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
export default {
  name: "mainNavBar",
  props:{
    title:{
      type:String,
      default:'首页'
    }
  },
  data() {
    return {};
  },
  components: {
    NavBar,
  },
};
</script>

<style>
.mainNavBar {
  background-color: var(--color-tint);
  color:#fff;
  font-size: 20px;
}
</style>
