
<script setup lang="ts">
import { ref } from "vue";
import { documentList } from "@/mock";
const docList = ref(documentList);
import WidgetBox from "@/components/common/WidgetBox.vue";

function openWindow(url) {
  if (!url) return;
  window.open(url);
}
</script>
<template>
  <widget-box
    v-for="(doc, index) in docList"
    :key="index"
    :title="doc.title"
    class="unit-box"
    width=""
    height="inherit"
  >
    <n-button
      type="primary"
      v-for="(child, childIndex) in doc.children"
      :key="childIndex"
      style="margin: 10px"
      @click="openWindow(child.url)"
    >
      {{ child.name }} ↗
    </n-button>
  </widget-box>
</template>

<style lang="less" scoped>
.unit-box {
  width: calc(100% - 40px);
  margin: 20px 20px 0;
  float: left;
}
</style>
