<template>
  <div class="monsterAtlasLarge">
    <div class="left">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item
          v-for="item in monsterType"
          :key="item.id"
          :title="item.name"
          :name="item.id"
        >
          <div
            class="monster-box"
            v-for="monster in item.children"
            :key="monster.id"
          >
            <img class="monster-icon" :src="monster.icon" alt="" />
            <div class="monster-name">{{ monster.name }}</div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'monsterAtlasLarge',
  data () {
    return {
      activeNames: ['gulong'],
      monsterType: [
        {
          name: '古龙种',
          id: 'gulong',
          children: [
            {
              id: 'yanfeilong',
              name: '炎妃龙',
              icon: require('../assets/image/monster/yanfeilong.png')
            },
            {
              id: 'lanhuilong',
              name: '烂辉龙',
              icon: require('../assets/image/monster/lanhuilong.png')
            },
            {
              id: 'qilin',
              name: '麒麟',
              icon: require('../assets/image/monster/qilin.png')
            },
            {
              id: 'miejinlong',
              name: '灭尽龙',
              icon: require('../assets/image/monster/miejinlong.png')
            },
            {
              id: 'congshanlong',
              name: '熔山龙',
              icon: require('../assets/image/monster/rongshanlong.png')
            },
            {
              id: 'ganglong',
              name: '钢龙',
              icon: require('../assets/image/monster/ganglong.png')
            },
            {
              id: 'yanwanglong',
              name: '炎王龙',
              icon: require('../assets/image/monster/yanwanglong.png')
            },
            {
              id: 'shitaolong',
              name: '尸套龙',
              icon: require('../assets/image/monster/shitaolong.png')
            },
            {
              id: 'mingdenglong',
              name: '冥灯龙',
              icon: require('../assets/image/monster/mingdenglong.png')
            }
          ],
        },
        {
          name: '飞龙种',
          id: 'feilong',
          children: [
            {
              id: 'fukong',
              name: '浮空龙',
              icon: require('../assets/image/monster/fukong.png')
            },
            {
              id: 'fengpiao',
              name: '风漂龙',
              icon: require('../assets/image/monster/fengpiao.png')
            },
            {
              id: 'canghuo',
              name: '苍火龙',
              icon: require('../assets/image/monster/canghuo.png')
            },
            {
              id: 'heijiao',
              name: '黑角龙',
              icon: require('../assets/image/monster/heijiao.png')
            },
            {
              id: 'baolin',
              name: '爆鳞龙',
              icon: require('../assets/image/monster/baolin.png')
            }
          ],
        },
        {
          name: '牙龙种',
          id: 'yalong',
          children: [
            {
              id: 'canzhua',
              name: '惨爪龙',
              icon: require('../assets/image/monster/canzhua.png')
            },
            {
              id: 'feilei',
              name: '飞雷龙',
              icon: require('../assets/image/monster/feilei.png')
            },
            {
              id: 'yanzei',
              name: '岩贼龙',
              icon: require('../assets/image/monster/yanzei.png')
            },
            {
              id: 'daxionge',
              name: '大凶颚龙',
              icon: require('../assets/image/monster/daxionge.png')
            },
            {
              id: 'daxiongchai',
              name: '大凶豺龙',
              icon: require('../assets/image/monster/daxiongchai.png')
            },
          ],
        },
        {
          name: '兽龙种',
          id: 'shoulong',
          children: [
            {
              id: 'kongbao',
              name: '恐暴龙',
              icon: require('../assets/image/monster/baokong.png')
            },
            {
              id: 'mane',
              name: '蛮颚龙',
              icon: require('../assets/image/monster/mane.png')
            },
            {
              id: 'guchui',
              name: '骨锤龙',
              icon: require('../assets/image/monster/guchui.png')
            },
            {
              id: 'baochui',
              name: '爆锤龙',
              icon: require('../assets/image/monster/baochui.png')
            },
            {
              id: 'tusha',
              name: '土砂龙',
              icon: require('../assets/image/monster/tusha.png')
            },
            ],
        },
        {
          name: '鸟龙种',
          id: 'niaolong',
          children: [
            {
              id: 'duyao',
              name: '毒妖鸟',
              icon: require('../assets/image/monster/duyao.png')
            },
            {
              id: 'xuanniao',
              name: '眩鸟',
              icon: require('../assets/image/monster/xuan.png')
            },
            {
              id: 'saoniao',
              name: '搔鸟',
              icon: require('../assets/image/monster/sao.png')
            },
            ],
        },
        {
          name: '鱼龙种',
          id: 'yulong',
          children: [
            {
              id: 'rongyan',
              name: '熔岩龙',
              icon: require('../assets/image/monster/rongyan.png')
            },
            {
              id: 'niyu',
              name: '泥鱼龙',
              icon: require('../assets/image/monster/niyu.png')
            },
          ],
        },
        
            // {
            //   id: 'qilin',
            //   name: '麒麟',
            //   icon: require('../assets/image/monster/qilin.png')
            // },
      ],
    }
  },
  methods: {
    handleChange () { },
  }
}
</script>

<style lang="scss" scoped>
.monsterAtlasLarge {
  .left {
    width: 300px;
    .monster-box {
      float: left;
      width: 80px;
      height: 80px;
      box-sizing: border-box;
      margin: 5px 5px;
      background: #e4e7ed;
      position: relative;
      cursor: pointer;
    }
    .monster-icon {
      width: 100%;
      height: 100%;
    }
    .monster-name {
      position: absolute;
      width: 100%;
      z-index: 1;
      bottom: 0;
      color: #fff;
      text-align: center;
      background: url("../assets/image/monster/shadow.png") no-repeat;
    }
  }
}
</style>
