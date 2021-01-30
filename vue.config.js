module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        common: "@/common",
        store: "@/store",
        assets: "@/assets",
        views: "@/views",
        network: "@/network",
        utils: "@/utils",
        mixins:'@/mixins',
      }
    }
  }
};
