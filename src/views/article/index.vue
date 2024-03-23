<script setup lang="ts">
import { ref } from "vue";
import { articleList } from "@/mock";
import QueryFunc from "@/components/common/QueryFunc.vue";
const options = articleList.map((v) => ({
  label: v.label,
  value: v.label,
}));
const list = ref(articleList);
list.value.sort((a, b) => new Date(b.time) - new Date(a.time));
function queryList({ selectVal, inputVal }) {
  list.value = articleList.filter((v) => {
    const condition1 = selectVal ? selectVal === v.label : true;
    const condition2 = inputVal
      ? v.question.includes(inputVal) || v.answer.includes(inputVal)
      : true;
    return condition1 && condition2;
  });
  list.value.sort((a, b) => new Date(b.time) - new Date(a.time));
}
// 路由跳转
import { useRouter } from "vue-router";
const router = useRouter();
function jumpRouter(item) {
  const timestamp = new Date(item.time).getTime();
  const routerUrl = router.resolve(`/article/${timestamp}`);
  window.open(routerUrl.href);
}
</script>

<template>
  <div class="article">
    <query-func :options="options" @query="queryList"></query-func>
    <div class="box" v-if="list.length">
      <div
        v-for="(art, index) in list"
        :key="index"
        class="art-item"
        @click="jumpRouter(art)"
      >
        <div class="content">
          <div class="title">{{ art.title }}</div>
          <div class="desc">{{ art.desc }}</div>
          <div class="time">{{ art.time }}</div>
        </div>
        <div class="label">{{ art.label }}</div>
      </div>
    </div>
    <div style="line-height: 100px; font-size: 32px" v-else>
      <n-gradient-text
        gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
      >
        没有检索出想要的文章！！！
      </n-gradient-text>
    </div>
  </div>
</template>

<style lang="less" scoped>
.article {
  --top: @size-header-height;
  height: calc(100vh - var(--top));
  padding: 20px;
  margin: 0 auto;
  max-width: 820px;
  box-sizing: border-box;
  position: relative;
  .box {
    height: calc(100% - 54px);
    overflow: auto;
    margin-top: 20px;
  }
}
.art-item {
  margin-top: 20px;
  border-radius: 5px;
  color: #000;
  background-color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:first-child {
    margin-top: 0;
  }
  .content {
    flex: 1;
    padding: 20px;
    width: ~"calc(100% - 140px)";
    div {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .title {
      font-weight: bold;
      white-space: nowrap;
    }
    .desc {
      color: #8a919f;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 10px 0;
    }
    .time {
    }
  }
  .label {
    width: 100px;
    font-size: 16px;
    text-align: center;
  }
}
</style>