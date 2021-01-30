import { debounce } from "utils";

export const listImgLoadMixin={
  data(){
    return{
      itemImageLoad: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.itemImageLoad = () => {
      // this.$refs.scroll.scroll && this.$refs.scroll.scroll.refresh();
      refresh();
    };
    this.$bus.$on("goodsItemImageLoad", this.itemImageLoad);
  },
  deactivated() {
    console.log('mixins deactivated')
    this.$bus.$off("goodsItemImageLoad", this.itemImageLoad);
  },
  destroyed(){
    console.log('mixins destroyed')
    this.$bus.$off("goodsItemImageLoad", this.itemImageLoad);
  },
}