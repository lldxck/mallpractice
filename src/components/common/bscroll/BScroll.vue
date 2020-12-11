<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "bscroll",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs.wrapper);
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad:true,
        probeType:3,
      });
      console.log(this.scroll);
      this.scroll.on('pullingUp',(position) => {
        this.$emit('pullUpLoad',this.scroll)
      })
      this.scroll.on('scroll',(position) => {
        console.log(position)
      })
    });
  },
  updated() {
    //重新计算高度
    this.scroll.refresh();
  },
  methods: {}
};
</script>

<style></style>
