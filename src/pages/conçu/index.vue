// 构想
// 这里是一些构想,比较混乱
// 有关marked.js简易手册(使用.md文件): https://www.cnblogs.com/djtao/p/6224399.html
<template>
  <div id="conçu">
    <div class="collapse" style="width: 27%;">
      <a-collapse v-model="activeKey">
        <a-collapse-panel header="This is panel header 1" v-for="item in dd" :key="item">
          <p>11</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <div class="content">
      <div class="rightTop"></div>
      <section v-html="html" class="box"></section>
    </div>
  </div>
</template>

<script>
export default {
  name: "conçu",
  components: {},
  props: {},
  data() {
    return {
      activeKey: [1],
      html: "",
      dd: ["1"]
    };
  },
  created() {},
  mounted() {
    this.MD(require(`../../../data/md/一/1.md`), "content");
  },
  activated() {},
  update() {},
  methods: {
    MD(md, element) {
      var marked = this.$marked;
      var rendererMD = new marked.Renderer();
      marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      }); //基本设置
      this.html = marked(md);
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
#conçu {
  display: flex;
  position: relative;
  height: 100vh;
  .collapse {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    left: 0;
    z-index: 1;
    transition: left 250ms ease;
  }
  .content {
    height: 100vh;
    overflow-y: auto;
    transition: left 250ms ease;
    position: absolute;
    left: 27%;
    top: 0;
    padding: 2vw;
    width: 73%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-duration: 2s;
    .rightTop {
      width: 100%;
    }
    .box {
      text-align: justify;
      width: 50vw;
      /deep/p {
        font-size: 0.08rem;
        text-indent: 0.16rem;
      }
    }
  }
}
</style>
