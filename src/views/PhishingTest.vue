<template>
  <div class="phishing">
    <iframe
      class="phishing-iframe"
      src="https://www.google.com.hk/webhp?hl=zh-CN&sourceid=cnhp&igu=1"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.phishing {
  width: 100%;
  height: 100%;
  overflow: hidden;
  &-iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
}
</style>

