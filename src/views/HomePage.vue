<script setup lang="ts">
import { useRouter } from "vue-router";
/**************组件**************/
import DigitalPanel from "@/components/common/DigitalPanel.vue";
import WeatherWidget from '@/components/common/WeatherWidget.vue'
import {
  documentList,
  toolList,
  experienceList,
  demoList,
  articleList,
} from "@/mock";

/**************数据**************/
const router = useRouter();
function sum(arr) {
  let num = 0;
  arr.forEach((v) => {
    num += v.detail.length;
  });
  return num;
}
const articleNumber = articleList.length;
const demoNumber = sum(demoList);
const toolNumber = sum(toolList);
const documentNumber = sum(documentList);
const experienceNumber = experienceList.length;

const digitalData = [
  { icon: "article", name: "文章篇数", value: articleNumber },
  { icon: "demo", name: "Demo示例个数", value: demoNumber },
  { icon: "tool", name: "工具个数", value: toolNumber },
  { icon: "document", name: "技术文档个数", value: documentNumber },
  { icon: "experience", name: "经验教训条数", value: experienceNumber },
];
const year = new Date().getFullYear();
</script>
<template>
  <div class="homepage">
    <div class="digital">
      <digital-panel
        v-for="item in digitalData"
        :key="item.icon"
        :value="item"
        @click="router.push(`/${item.icon}`)"
      ></digital-panel>
    </div>
    <weather-widget></weather-widget>
    <div class="copyright">Copyright © 2017 - {{ year }} 也笑</div>
  </div>
</template>

<style lang="less" scoped>
.homepage {
  height: 100vh;
  background: url(/src/assets/images/homepage.jpeg) 0 center / 100vw 50vw
      no-repeat,
    linear-gradient(to bottom, #6bc8f9, #0eb3f0);
  position: relative;
  overflow: hidden;

  .digital {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 300px;
    height: ~"calc(100vh - 100px)";
    overflow: hidden;
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