<script setup lang="ts">
import { ref } from "vue";
import { toolList } from "@/mock";
const thirdList = toolList.filter((v) => v.children)[0]?.children || [];
function openWindow(url) {
  if (!url) return;
  window.open(url);
}
</script>

<template>
  <n-button
    type="primary"
    v-for="(third, index) in thirdList"
    :key="index"
    style="margin: 10px"
    @click="openWindow(third.url)"
  >
    {{ third.name }} ↗
  </n-button>
</template>