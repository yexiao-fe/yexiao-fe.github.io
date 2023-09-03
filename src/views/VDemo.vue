<script setup lang="ts">
import { ref } from "vue";
import { demoList } from "@/mock";
import TextFlower from "@/components/demo/TextFlower.vue";
import QuickCalculation from "@/components/tool/QuickCalculation.vue";

const comps = {
  TextFlower,
  QuickCalculation,
};

const list = ref(demoList);
function clickName(item) {
  if (item.url) {
    window.open(item.url);
  }
}
</script>

<template>
  <ul>
    <li v-for="(demo, index) in list" :key="index" :class="demo.className">
      <div class="title">{{ demo.title }}</div>
      <div
        v-for="(item, i) in demo.detail"
        :key="`${index}-${i}`"
        class="content"
        @click="clickName(item)"
      >
        <span class="name">{{ item.name }}</span>
        <span v-if="item.url" style="margin-left: 5px">↗</span>
        <div class="box" v-if="!item.url">
          <component :is="comps[item.component]" v-if="comps[item.component]"></component>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="less" scoped>
ul {
  padding: 20px;
  color: @black-color-1;
  li {
    margin-bottom: 20px;
    overflow: hidden;
  }
  .title {
    border-left: 5px solid @cyan-color-1;
    background: linear-gradient(45deg, @cyan-color-2, transparent);
    font: 16px bold;
    text-indent: 5px;
    padding: 5px 0;
  }
  .content {
      float: left;
    margin: 10px;
  }
  .project .content {
    cursor: pointer;
    background-color: @blue-color-1;
    padding: 5px 10px;
    border-radius: 4px;
    color: @white-color-1;
    
    &:hover {
      color: @orange-color-1;
    }
  }
  .game .content {
      width: ~'calc(50% - 20px)';
  }
  .jsdemo .content {
      width: ~'calc(33.3% - 20px)';
  }
  .cssdemo .content {
      width: 300px;
      .box {
          min-height: initial;
          height: 260px;
      }
  }


  .box {
    clear: both;
    border: 1px dashed;
    min-height: 400px;
    margin: 20px 0;
    padding: 10px;
  }
}
</style>