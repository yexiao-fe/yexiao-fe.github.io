<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // 第二栏
    const spaceText = ref("");
    const isGoover = ref(false);
    function spaceTimestampConfirm(ts: any) {
      if (!ts) ts = Date.now();
      const residueTs = ts - Date.now();
      isGoover.value = residueTs < 0 ? true : false;
      const times = Math.abs(residueTs);
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
      spaceText.value = str;
    }
    // 第三栏
    const spaceStartDate = ref(Date.now());
    const spaceEndDate = ref(null);
    const spaceNumber = ref(null);
    const spaceType = ref("h");
    function conversionEnd() {
      if (!spaceStartDate.value || !spaceNumber.value) return;
      const tsMap: any = {
        y: 365 * 24 * 3600 * 1000,
        month: 30 * 24 * 3600 * 1000,
        d: 24 * 3600 * 1000,
        h: 3600 * 1000,
        m: 60 * 1000,
        s: 1000,
      };
      spaceEndDate.value =
        spaceStartDate.value + spaceNumber.value * tsMap[spaceType.value];
    }
    return {
      // 第一栏
      timestamp: ref(null),
      isDatetime: ref(true),
      // 第二栏
      spaceTimestamp: ref(null),
      spaceText,
      isGoover,
      spaceTimestampConfirm,
      // 第三栏
      spaceStartDate,
      spaceEndDate,
      spaceNumber,
      spaceType,
      options: [
        { label: "年", value: "y" },
        { label: "月", value: "month" },
        { label: "日", value: "d" },
        { label: "时", value: "h" },
        { label: "分", value: "m" },
        { label: "秒", value: "s" },
      ],
      conversionEnd,
    };
  },
});
</script>

<template>
  <!-- 第一栏 -->
  <div :class="`flex mb ${isDatetime ? 'reverse' : 'row-reverse'}`">
    <n-date-picker
      v-model:value="timestamp"
      type="datetime"
      placeholder="请选择日期时间"
      :disabled="!isDatetime"
      clearable
    />
    <n-button type="primary" @click="isDatetime = !isDatetime" class="space"
      >切换</n-button
    >
    <n-input-number
      v-model:value="timestamp"
      type="text"
      placeholder="请输入时间戳"
      :disabled="isDatetime"
      style="width: 100%"
    />
  </div>
  <!-- 第二栏 -->
  <div class="flex mb">
    <n-button quaternary type="primary"> 距离 </n-button>
    <n-date-picker
      v-model:value="spaceTimestamp"
      type="datetime"
      placeholder="某个日期时间"
      clearable
      :on-confirm="spaceTimestampConfirm"
      :on-clear="spaceTimestampConfirm"
    />
    <n-button quaternary type="primary">
      {{ isGoover ? "已过去" : "还有" }}
    </n-button>
    <n-button type="primary" dashed>
      {{ spaceText }}
    </n-button>
  </div>
  <!-- 第三栏 -->
  <div class="flex">
    <n-date-picker
      v-model:value="spaceStartDate"
      type="datetime"
      placeholder="开始日期时间"
      clearable
    />
    <n-input-number
      v-model:value="spaceNumber"
      type="text"
      placeholder="间隔"
      :min="0"
      class="space"
      style="width: 90px; flex-shrink: 0"
    />
    <n-select v-model:value="spaceType" :options="options" />
    <n-button type="primary" class="space" @click="conversionEnd">
      查询
    </n-button>
    <n-date-picker
      v-model:value="spaceEndDate"
      type="datetime"
      placeholder="结束日期时间"
      clearable
      disabled
    />
  </div>
</template>

<style lang="less" scoped>
.flex {
  box-shadow: 0 0 5px;
}
.reverse {
  flex-direction: reverse;
}
.row-reverse {
  flex-direction: row-reverse;
}
.space {
  margin: 0 5px;
}
.mb {
  margin-bottom: 30px;
}
</style>