<template>
  <div class="plugin-normal">
    <h1>{{ msg }}</h1>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'plugin-normal',
  created() {
    const ctx = this.$ctx ? this.$ctx : {};
    const { global, app } = ctx;
    console.log(global, app);  
  },
  data() {
    return {
      msg: '轮播',
    };
  },
};
</script>
<style lang="scss" scoped>
.plugin-normal {
  height: 100%;
  .el-carousel {
    width: 400px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>