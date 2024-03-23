<script setup lang="ts">
// 路由
import { useRouter } from "vue-router";
const router = useRouter();

//获取数据
import {
  documentList,
  toolList,
  experienceList,
  demoList,
  articleList,
} from "@/mock";

function sum(arr: Array<any>, isChildren = false) {
  if (!isChildren) return arr.length;
  let num = 0;
  arr.forEach((v) => {
    if (v.children) num += v.children.length;
  });
  return num;
}
const digitalData = [
  { icon: "article", name: "文章", unit: "篇", value: sum(articleList) },
  { icon: "demo", name: "Demo示例", unit: "个", value: sum(demoList, true) },
  { icon: "tool", name: "工具", unit: "个", value: sum(toolList) },
  {
    icon: "document",
    name: "技术文档",
    unit: "篇",
    value: sum(documentList, true),
  },
  {
    icon: "experience",
    name: "经验教训",
    unit: "条",
    value: sum(experienceList),
  },
];
</script>

<template>
  <div class="digital vc wh">
    <div
      class="box"
      :style="{ '--i': index }"
      v-for="(dig, index) in digitalData"
      :key="index"
      @click="router.push(`/${dig.icon}`)"
    >
      <div :class="`icon ${dig.icon}`"></div>
      <div class="name">{{ dig.name }}</div>
      <div>{{ dig.value }}{{ dig.unit }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.digital {
  transform: translate(-49.5%, -50%) rotate(18deg);
  .box {
    width: 208px;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    position: absolute;
    top: -15px;
    right: 50%;
    transform-origin: right center;
    transform: rotateZ(calc(var(--i) * 36deg)) translate(-30%);
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 5px 5px #03a9f4, 0 0 20px #fff;
      z-index: 10;
    }

    .name {
      margin: 0 10px;
    }
  }
}
.box .icon {
  &.article {
    --icon: url(@/assets/images/article.svg);
  }
  &.demo {
    --icon: url(@/assets/images/demo.svg);
  }
  &.tool {
    --icon: url(@/assets/images/tool.svg);
  }
  &.document {
    --icon: url(@/assets/images/document.svg);
  }
  &.experience {
    --icon: url(@/assets/images/experience.svg);
  }
  width: 50px;
  height: 50px;
  background: var(--icon);
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>