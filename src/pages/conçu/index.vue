// 构想
// 这里是一些构想,比较混乱
// 有关marked.js简易手册(使用.md文件): https://www.cnblogs.com/djtao/p/6224399.html
<template>
  <div id="conçu">
    <div id="content">
        
    </div>
  </div>
</template>

<script>
export default {
  name: "conçu",
  components: {},
  props: {},
  data() {
    return {};
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
      document.getElementById(element).innerHTML = marked(md);
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
#conçu {
    #content{

    }
}
</style>
