<script setup lang="ts">
import { ref } from "vue";
import QueryFunc from "@/components/common/QueryFunc.vue";
import { experienceList } from "@/mock";
const options = experienceList.map((v) => ({
  label: v.label,
  value: v.label,
}));
const list = ref(experienceList);
function queryList({ selectVal, inputVal }) {
  list.value = experienceList.filter((v) => {
    const condition1 = selectVal ? selectVal === v.label : true;
    const condition2 = inputVal
      ? v.question.includes(inputVal) || v.answer.includes(inputVal)
      : true;
    return condition1 && condition2;
  });
}
</script>

<template>
  <div class="exp-library">
    <query-func :options="options" @query="queryList"></query-func>
    <div class="box" v-if="list.length">
      <div v-for="(exp, index) in list" :key="index" class="exp-item">
        <div class="content">
          <div class="question">{{ exp.question }}</div>
          <div v-html="exp.answer" class="answer"></div>
        </div>
        <div class="label">{{ exp.label }}</div>
      </div>
    </div>
    <div style="line-height: 100px; font-size: 32px" v-else>
      <n-gradient-text
        gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
      >
        没有检索出想要的数据！！！
      </n-gradient-text>
    </div>
  </div>
</template>

<style lang="less" scoped>
.exp-library {
  --top: @size-header-height;
  height: calc(100vh - var(--top));
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  .box {
    height: calc(100% - 54px);
    overflow: auto;
    margin-top: 20px;
  }
}
.exp-item {
  margin-top: 20px;
  color: @black-color-1;
  background-color: @purple-color-2;
  display: flex;
  align-items: center;
  &:first-child {
    margin-top: 0;
  }
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