<template>
  <div class="navBar">
    <div class="navLeft"><slot name="navLeft"></slot></div>
    <div class="navCenter"><slot name="navCenter"></slot></div>
    <div class="navRight"><slot name="navRight"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {};
  },
};
</script>

<style>
.navBar{
  height:44px;
  line-height: 44px;
  position: fixed;
  z-index: 99;
  top:0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 2px #eee;

}
.navLeft,.navRight{
  width: 60px;
}
.navCenter{
  flex:1
}

</style>
