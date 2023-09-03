<script setup lang="ts">
import { ref } from "vue";
import { toolList } from "@/mock";
import TimeConversion from "@/components/tool/TimeConversion.vue";
import QuickCalculation from "@/components/tool/QuickCalculation.vue";

const comps = {
    TimeConversion,
    QuickCalculation
}

const list = ref(toolList);
const activeIndex = ref(null);
const component = ref(null)
function clickName(key, item) {
    activeIndex.value = key
    if (item.url) {
        component.value = null
        window.open(item.url);
    } else {
        console.log(item.component)
        component.value = item.component
    }
}
</script>

<template>
  <ul>
    <li v-for="(tool, index) in list" :key="index">
      <div class="title">{{ tool.title }}</div>
      <div
        v-for="(item, i) in tool.detail"
        :key="`${index}-${i}`"
        :class="['name', { active: activeIndex === `${index}-${i}`}]"
        @click="clickName(`${index}-${i}`, item)"
      >
        {{ item.name }}
      </div>
      <div class="box" v-if="index === 0">
          <component :is="comps[component]" v-if="comps[component]"></component>
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
    .name {
        float: left;
        margin: 10px;
        cursor: pointer;
        background-color: @blue-color-1;
        padding: 5px 10px;
        border-radius: 4px;
        color: @white-color-1;
        &.active,
        &:hover {
            color: @orange-color-1;
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