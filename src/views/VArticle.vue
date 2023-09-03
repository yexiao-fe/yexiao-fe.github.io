<script setup lang="ts">
import { ref } from "vue";
import { articleList } from "@/mock";
const list = ref(articleList);
</script>

<template>
  <div v-for="(exp, index) in list" :key="index" class="exp-item">
    <div class="content">
      <div class="question">{{ exp.question }}</div>
      <div v-html="exp.answer" class="answer"></div>
    </div>
    <div class="label">{{ exp.label }}</div>
  </div>
</template>

<style lang="less" scoped>
.exp-item {
  margin: 20px 20px 0;
  color: @black-color-1;
  background-color: @purple-color-2;
  display: flex;
  align-items: center;
  .content {
      flex: 1;
      padding: 20px;
      .question {
          font-weight: bold;
      }
      /deep/ ol li {
          list-style: decimal;
      }
      /deep/ ul li {
          list-style: initial;
      }
      .answer {
          padding-left: 20px;
      }
  }
  .label {
      width: 100px;
      font-size: 16px;
      text-align: center;
  }
}
</style>