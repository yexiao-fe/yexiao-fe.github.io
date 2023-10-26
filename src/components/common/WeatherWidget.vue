<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";
/*************获取天气数据************/
const weatherStr = ref("");
axios.get("https://api.oioweb.cn/api/weather/GetWeather").then((res) => {
  console.log(res);
  const { alert, city, condition } = res?.data?.result || {};
  const str =
    city.name +
    " " +
    condition.condition +
    " " +
    condition.temp +
    "℃ " +
    condition.windDir +
    " " +
    condition.windLevel +
    "级";
  weatherStr.value = str;
});

/*************获取日期数据************/
// 补0
const supply = (num: number) => {
  return num < 10 ? "0" + num : num;
};
const getDateTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = supply(date.getMonth() + 1);
  const day = supply(date.getDate());
  const hour = supply(date.getHours());
  const minute = supply(date.getMinutes());
  const second = supply(date.getSeconds());
  const week = date.getDay();
  dateStr.value = `${year} 年 ${month} 月 ${day} 日 ${weekdays[week]}`;
  timeStr.value = `${hour}:${minute}:${second}`;
};
const weekdays = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];
const dateStr = ref("");
const timeStr = ref("");
getDateTime();
let timer = null;
onMounted(() => {
  timer = setInterval(() => {
    getDateTime();
  }, 1000);
});
onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
<template>
  <div class="widget">
    <div class="date">{{ dateStr }}</div>
    <div class="time">{{ timeStr }}</div>
    <div class="weather">{{ weatherStr }}</div>
  </div>
</template>

<style lang="less" scoped>
.widget {
  position: absolute;
  width: 300px;
  height: 150px;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  padding: 10px;
  box-sizing: border-box;
  .date,
  .weather {
    line-height: 30px;
  }
  .time {
    font-family: number;
    font-size: 42px;
    letter-spacing: 5px;
    line-height: 70px;
  }
}
</style>