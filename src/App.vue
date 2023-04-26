<template>
  <div id="app">
    <el-menu
      class="menu"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(item, index) in menu"
        :key="index"
        :index="item.path"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </el-menu>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import routerList from '@/router/routerList'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      menu: routerList
    }
  },
  methods: {
    handleSelect (e) {
      this.$router.push(e)
    }
  },
}
</script>

<style lang="scss" scoped>
#app {
  margin: 0;
  padding: 0;
  min-width: 1100px;
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  .main {
    width: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>
