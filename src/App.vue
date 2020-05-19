<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    $route() {
      this.$notification.destroy();
    }
  }
};
</script>

<style lang="less">
// less外部文件的使用
@import url("./assets/less/index");
</style>
