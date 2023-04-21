<template>
  <div>lodash test</div>
</template>

<script>
export default {
  name: 'LodashTest',
  components: {
  },
  data () {
    return {
      array: ['a', 'b', 'c', 'd', 'e']
    }
  },
  mounted() {
    const aa = this._.chunk(this.array, 2);
    console.log(aa);

  },
  methods: {

  },

}
</script>

<style lang="scss" scoped>

</style>