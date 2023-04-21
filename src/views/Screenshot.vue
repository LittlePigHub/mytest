<template>
  <div class="screen-shot">
    <el-button type="primary" @click="handleClick">截图</el-button>
    <div @click="openDoc">文档链接</div>
    首页截图测试
    <el-dialog title="提示" :visible.sync="dialogVisible" width="80%">
      <div class="canvase-box" ref="screenShotDialog"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleSaveImage">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  name: 'Screenshot',
  components: {
  },
  data () {
    return {
      dialogVisible: false,
      canvas: null,
    }
  },
  methods: {
    openDoc () {
      window.open('https://html2canvas.hertzen.com/');
    },
    // canvas 保存为图片
    handleSaveImage () {
      var link = document.createElement("a");
      var imgData = this.canvas.toDataURL({ format: 'png', quality: 1, width: 20000, height: 4000 });
      // var strDataURI = imgData.substr(22, imgData.length);
      var blob = this.dataURLtoBlob(imgData);
      var objurl = URL.createObjectURL(blob);
      link.download = "页面截图.png";
      link.href = objurl;
      link.click();
    },
    // 数据格式转换?
    dataURLtoBlob (dataurl) {
      let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
    handleClick () {
      this.dialogVisible = true;
      html2canvas(document.body).then((canvas) => {
        if (this.$refs.screenShotDialog.firstChild) {
          this.$refs.screenShotDialog.firstChild.remove();
        }
        this.canvas = canvas;
        this.$refs.screenShotDialog.appendChild(canvas);
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.screen-shot {
  width: 100%;
  height: 100%;
  font-size: 50px;
  background: #558b2f;
  color: #fff;
  // background: url('../assets/image/home/home_bg.jpeg');
  .canvase-box {
    width: 100%;
    height: 100%;
    max-height: 500px;
    overflow: scroll;
  }
}
</style>

