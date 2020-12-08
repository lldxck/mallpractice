<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'tabBar',
  data(){
    return{}
  }

}
</script>

<style>
.tabBar{
  height:49px;
  background-color: #f9f9f9;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px #eee;
  display: flex;
}
</style>