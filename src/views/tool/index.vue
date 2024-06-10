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
  <div class="flex">
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
  </div>
</template>

<style lang="less" scoped>
.unit-box {
  margin-bottom: 20px;
  min-width: 680px;
  width: calc(50% - 10px);
  &:last-child {
    margin-bottom: 0;
  }
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  & > div {
    flex-shrink: 0;
  }
}
@media screen and (max-width: 1380px) {
  .unit-box {
    width: 100%;
  }
}
</style>