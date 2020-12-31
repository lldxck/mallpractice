<template>
  <div class="detailParamsInfo" v-if="Object.keys(goodsParams).length !== 0">
    <!-- 商品尺码信息 -->
    <table>
      <tr
        class="ruleTr"
        v-for="(item, index) in goodsParams.rule.tables[0]"
        :key="index"
      >
        <td v-for="(item, index) in item" :key="index">{{ item }}</td>
      </tr>
    </table>
    <!-- 商品参数信息 -->
    <table>
      <tr class="infoTr" v-for="(item,index) in goodsParams.info.set" :key="index">
        <td>{{item.key}}</td>
        <td class="infoValue">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "detailParamsInfo",
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {
    console.log(this.goodsParams.info);
    console.log(this.goodsParams.rule);
  },
  data() {
    return {};
  }
};
</script>

<style>
.detailParamsInfo{
  padding:15px 8px;
}
table {
  width: 100%;
}
.ruleTr td,.infoTr td{
  border-bottom: 1pt solid #eee;
  padding:8px 10px;
  text-align: center;
  font-size: 14px;
  color:#333;
}
.ruleTr td:first-child,.infoTr td{
  text-align: left;
}
td.infoValue{
  color:var(--color-high-text);
}
</style>
