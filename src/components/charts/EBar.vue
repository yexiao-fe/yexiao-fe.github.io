<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as echarts from "echarts";

const bar = ref(null);
let myChart = null;
onMounted(() => {
  myChart = echarts.init(bar.value);
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
  myChart.setOption(option);
  console.log(myChart);
});
</script>

<template>
  <div ref="bar"></div>
</template>

<style lang="less" scoped>
div {
  height: 400px;
}
</style>