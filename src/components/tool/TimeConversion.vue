<script setup lang="ts">
import { ref } from "vue";
import { timestampToTime, timeToTimestamp } from "@/utils";
const time = ref(null);
const timestamp = ref(null);

const time2 = ref(null);
const timestamp2 = ref(null);

const mainDay = ref(null);
const residueDay = ref(null);
function residueCount(day) {
  const times = timeToTimestamp(day) - Date.now();
  const time = [24 * 3600 * 1000, 3600 * 1000, 60 * 1000, 1000];
  const d = Math.floor(times / time[0]);
  const h = Math.floor((times % time[0]) / time[1]);
  const m = Math.floor(((times % time[0]) % time[1]) / time[2]);
  const s = Math.floor((((times % time[0]) % time[1]) % time[2]) / time[3]);
  let str = "";
  if (d) str += `${d}天`;
  if (h) str += `${h}小时`;
  if (m) str += `${m}分钟`;
  if (s) str += `${s}秒`;
  residueDay.value = str;
}

const startTime = ref(timestampToTime(Date.now()))
const spaceTime = ref(null)
const endTime = ref(null)
function changeTime() {
    if (!startTime.value && endTime.value) {
       startTime.value =  timestampToTime(timeToTimestamp(endTime.value) - spaceTime.value * 3600 * 1000)
    } else {
       endTime.value =  timestampToTime(timeToTimestamp(startTime.value) + spaceTime.value * 3600 * 1000) 
    }
}
</script>

<template>
  <div class="item time">
    <div>日期时间转换为时间戳</div>
    <input type="text" v-model="time" placeholder="YYYY-MM-DD hh:mm:ss" />
    <button @click="timestamp = timeToTimestamp(time)">转换</button>
    <span class="val">{{ timestamp }}</span>
  </div>

  <div class="item">
    <div>时间戳转化为日期时间，单位：ms</div>
    <input type="text" v-model="timestamp2" />
    <button @click="time2 = timestampToTime(timestamp2)">转换</button>
    <span class="val">{{ time2 }}</span>
  </div>

  <div class="item time">
    <div>距离某个日期还剩多少时间</div>
    <span>距离：</span>
    <input type="text" v-model="mainDay" placeholder="YYYY-MM-DD hh:mm:ss" />
    <button @click="residueCount(mainDay)">还剩</button>
    <span class="val">{{ residueDay }}</span>
  </div>

  <div class="item time">
    <div>起止时间间隔时长，间隔时间单位：h</div>
    <span>开始时间：</span>
    <input type="text" v-model="startTime" placeholder="YYYY-MM-DD hh:mm:ss" @change="changeTime" />
    <span>间隔时间：</span>
    <input type="text" v-model="spaceTime" style="width: 60px"  @change="changeTime">
    <span>结束时间：</span>
    <input type="text" v-model="endTime" placeholder="YYYY-MM-DD hh:mm:ss"  @change="changeTime"/>
  </div>
</template>

<style lang="less" scoped>
.item {
  margin-bottom: 10px;
  .val {
    color: @green-color-1;
  }
}
input,
button {
  margin-right: 10px;
}
.time input {
  width: 200px;
}
</style>