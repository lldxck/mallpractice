<template>
  <div class="recommendView">
    <div class="recommendItem" v-for="(item,index) in recommendData" :key="index">
      <img :src="item.image" alt="" />
      <div>{{item.title}}</div>
    </div>   
  </div>
</template>

<script>
export default {
  name: "recommendView",
  props: {
    recommendData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.recommendView {
  display: flex;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 8px solid #f9f9f9;
}
.recommendItem {
  flex: 1;
}
.recommendItem img {
  width: 80%;
  vertical-align: middle;
  margin-bottom: 5px;
}
.recommendItem div{
  font-size: 16px;
  color:#333;
}
</style>
