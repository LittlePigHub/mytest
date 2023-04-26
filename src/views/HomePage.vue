<template>
  <div class="home-page">
    <div class="home-header">
      <!-- <van-uploader
        :after-read="uploadFun"
        accept="*"
        preview-image="false"
        preview-size="24"
        upload-icon="plus"
      /> -->
    </div>
    <div class="home-main">
      <!-- <el-carousel height="350px">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <img class="banner_img" :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel> -->

      <el-tabs
        type="border-card"
        class="border-card"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          v-for="item in menu"
          :key="item.id"
          :label="item.label"
          :name="item.id"
        >
          <component :is="item.component"></component>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import MonsterAtlasSmall from '@/components/MonsterAtlasSmall'
import MonsterAtlasLarge from '@/components/MonsterAtlasLarge'
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    HelloWorld,
  },
  data () {
    return {
      bannerList: [
        {
          url: require('../assets/image/home/home_bg.jpeg'),
        },
        {
          url: require('../assets/image/home/1.jpg'),
        }
      ],
      activeName: 'largeMonster',
      menu: [
        {
          id: 'largeMonster',
          label: '大魔物图鉴',
          icon: '',
          component: MonsterAtlasLarge,
        },
        {
          id: 'smallMonster',
          label: '小型魔物图鉴',
          icon: '',
          component: MonsterAtlasSmall,
        },
        {
          id: 'arms',
          label: '武器图鉴',
          icon: '',
          component: HelloWorld,
        }
      ],
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    uploadFun () { },
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
  .home-header {
    background: #11171e;
    height: 50px;
  }
  .home-main {
    margin: auto;
    margin-top: 20px;
    min-width: 800px;
    width: 80%;

    .el-carousel__item {
      .banner_img {
        width: 100%;
        height: 100%;
      }
    }
    .border-card {
      margin-top: 20px;
      min-height: 800px;
    }
  }
}
</style>

