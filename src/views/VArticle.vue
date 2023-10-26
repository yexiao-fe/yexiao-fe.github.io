<script setup lang="ts">
import { ref } from "vue";
import { articleList } from "@/mock";
const list = ref(articleList);
</script>

<template>
  <div v-for="(item, index) in list" :key="index" class="art-item">
    <div class="content">
      <div class="title">{{ item.title }}</div>
      <div class="desc">{{ item.desc }}</div>
      <div class="time">{{ item.time }}</div>
    </div>
    <div class="label">{{ item.label }}</div>
  </div>
</template>

<style lang="less" scoped>
.art-item {
  margin: 20px auto 0;
  max-width: 820px;
  border-radius: 5px;
  color: @black-color-1;
  background-color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  .content {
      flex: 1;
      padding: 20px;
      width: ~'calc(100% - 140px)';
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