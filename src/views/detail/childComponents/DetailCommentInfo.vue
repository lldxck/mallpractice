<template>
  <div class="detailComment" v-if="Object.keys(commentInfo).length!==0">
    <div class="detailTitle">
      <div class="title">用户评价</div>
      <div class="more">更多</div>
    </div>
    <div v-if="commentInfo.cRate != 0">
      <div
        class="commentContainer"
        v-for="(item, index) in commentInfo.list"
        :key="index"
      >
        <div class="commentTitle">
          <img :src="item.user.avatar" alt="" />
          <p>{{item.user.uname}}</p>
        </div>
        <div class="commentContent">{{item.content}}</div>
        <div class="createAndStyle">
          <span>{{item.created | handleDate}}</span>
          <span>{{item.style}}</span>
        </div>
        <div class="commentImages">
          <img :src="item" alt="" v-for="(item,index) in item.images" :key="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'utils'
export default {
  name: "detailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters:{
    handleDate(value){
      const date = new Date(value*1000)
      return formatDate(date,'yyyy-MM-dd')
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.detailComment {
  padding: 0 8px 20px;
  border-bottom: 5px solid #f9f9f9;
}
.detailTitle {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
.detailTitle div {
  font-size: 16px;
  color: #333;
}
.commentTitle{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
}
.commentTitle img{
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-right: 10px;
}
.commentTitle p{
  font-size: 16px;
  color:#333;
}
.commentContent{
  font-size: 13px;
  color:#333;
}
.createAndStyle{
  display: flex;
  justify-content: flex-start;
  padding:10px 0;
}
.createAndStyle span{
  font-size: 12px;
  color:#999;
  margin-right: 10px;
}
.commentImages{
  display: flex;
}
.commentImages img{
  height:100px;
  width: 100px;
  margin:0 5px;
}
</style>
