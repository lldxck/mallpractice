<template>
  <div class="tabBarItem" @click="itemClick">
    <div v-if="!active"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :style="textColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
    styleColor: {
      type: String,
      default: "deepPink",
    },
  },
  data() {
    return {};
  },
  computed: {
    active() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    textColor() {
      return this.active ? { color: this.styleColor } : {};
    },
  },
  methods: {
    itemClick() {
      // console.log('点击',this.path)
      this.$router.push({ path: this.path });
    },
  },
};
</script>

<style>
.tabBarItem {
  flex: 1;
  /* border:1px solid red; */
  text-align: center;
  font-size: 16px;
}
.tabBarItem img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 2px;
}
</style>
