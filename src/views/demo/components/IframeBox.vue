<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
function openWindow(url) {
  if (!url) return;
  window.open(url);
}
</script>
<template>
  <div class="iframe-box" @click="openWindow(data.url)">
    <iframe :src="data.url" frameborder="0"></iframe>
    <div class="box-title">{{ data.name }}</div>
  </div>
</template>

<style lang="less" scoped>
.iframe-box {
  width: 404px;
  height: 236px;
  padding: 10px;
  border-radius: 4px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #369ee9, #eaf5d1);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  iframe {
    width: 1920px;
    height: 1080px;
    transform-origin: 0 0;
    transform: scale(0.2);
  }
  .box-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 236px;
    color: #000;
  }
}
</style>