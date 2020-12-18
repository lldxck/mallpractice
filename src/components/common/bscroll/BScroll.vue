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
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
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
        probeType:this.probeType,
      });
      console.log(this.scroll);
      this.scroll.on('pullingUp',(position) => {
        this.$emit('pullUpLoad',this.scroll)
      })
      // 监听滚动事件
      this.scroll.on('scroll',(position) => {
        // console.log(position)
        this.$emit('pageScroll',position)
      })
    });
  },
  updated() {
    //重新计算高度----(未使用监听图片加载事件来监听图片加载完而进行scroll刷新时来解决不能滚动问题)
    // this.scroll.refresh();
  },
  methods: {}
};
</script>

<style></style>
