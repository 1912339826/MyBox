// 404页面
<template>
  <div id="notFound">
    <div class="is404">404</div>
    <div class="tet">页面未找到!</div>
    <div class="button" @click="goBack">返回</div>
  </div>
</template>

<script>
export default {
  name: "notFound",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
      goBack(){
          this.$router.go(-1)
      }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
#notFound {
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  .is404 {
    color: rgb(73, 75, 107);
    font-weight: 800;
    font-size: 200px;
  }
  .tet {
    color: #000;
    font-weight: 500;
    font-size: 40px;
  }
  .button{
      font-size: 20px;
      font-weight: 400;
      color: #fff;
      background-color: #f9560b;
      width: 7vw;
      height: 3vw;
      line-height: 3vw;
      border-radius: 5px;
      &:hover{
          cursor: pointer;
      }
  }
}
</style>
