<template>
  <nav-bar>
    <div slot="navLeft" class="backBtn" @click="back">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="navCenter" class="titles">
      <div
        v-for="(item, index) in navTitles"
        :key="index"
        class="titlesItem"
        :class="{ activeTitle: currentTitleIndex == index }"
        @click="titleItemClick(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
export default {
  name: "detailNavBar",
  data() {
    return {
      navTitles: ["商品", "参数", "评论", "推荐"],
      currentTitleIndex: 0
    };
  },
  methods: {
    titleItemClick(index) {
      this.currentTitleIndex = index;
    },
    back() {
      this.$router.go(-1);
    }
  },
  components: {
    NavBar
  }
};
</script>

<style>
.titles {
  display: flex;
}
.titlesItem {
  flex: 1;
}
.activeTitle {
  color: var(--color-high-text);
}
.backBtn img {
  margin-top: 11px;
}
</style>
