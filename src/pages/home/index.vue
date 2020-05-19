<template>
  <div id="home">
    <section>
      <div class="list">
        <a-button type="primary" :block="true">Primary</a-button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "home",
  methods: {
    // 例子
    async example() {
      let res = await this.$req(window.api.example, {});
    },
    // 提示
    hint() {
      this.$notification.destroy();
      this.$notification["info"]({
        message: "请求例子页面",
        description: "请按F12",
        onClick: () => {
          console.log("点击了通知!");
        }
      });
      //   10秒钟之后关闭
      setTimeout(() => {
        this.$notification.destroy();
      }, 10000);
    }
  },
  created() {
    this.hint();
    console.log("%c 这里有有关请求的例子--home", "color: #099f81;");
    this.example();
  },
  //   有了keep-alive,有必要加此项
  activated() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .list {
      width: 50%;
    }
  }
}
</style>