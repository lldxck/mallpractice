<template>
  <swiper class="detailSwiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "detailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style>
.detailSwiper {
  height: 260px;
  overflow: hidden;
}
</style>
