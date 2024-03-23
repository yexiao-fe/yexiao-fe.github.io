<script setup lang="ts">
/**************组件**************/
import DigitalPanel from "./components/DigitalPanel.vue";
import WeatherWidget from "@/components/common/WeatherWidget.vue";

const year = new Date().getFullYear();
</script>
<template>
  <div class="homepage wh">
    <div class="center vc">
      <digital-panel></digital-panel>
      <div class="title">也笑的博客</div>
    </div>
    <weather-widget></weather-widget>
    <div class="copyright">Copyright © 2017 - {{ year }} 也笑</div>
  </div>
</template>

<style lang="less" scoped>
.homepage {
  background: linear-gradient(to bottom, #6bc8f9, #0eb3f0);
  position: relative;
  overflow: hidden;

  .center {
    width: 100%;
    line-height: 40px;
    box-shadow: 0 100px 100px #fff;
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
  }

  .copyright {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>