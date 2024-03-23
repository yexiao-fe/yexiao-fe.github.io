<script setup lang="ts">
import { ref } from "vue";
import { toolList } from "@/mock";
import WidgetBox from "@/components/common/WidgetBox.vue";
import DatetimeConversion from "./components/DatetimeConversion.vue";
import BmiCount from "./components/BmiCount.vue";
import ThirdParty from "./components/ThirdParty.vue";
const comps = {
  DatetimeConversion,
  BmiCount,
  ThirdParty,
};
const list = ref(toolList);
</script>

<template>
  <widget-box
    v-for="(tool, index) in list"
    :key="index"
    :title="tool.title"
    class="unit-box"
    :width="tool.width"
    :height="tool.height"
  >
    <component :is="comps[tool.component]"></component>
  </widget-box>
</template>

<style lang="less" scoped>
.unit-box {
  margin: 10px;
  float: left;
}
</style>