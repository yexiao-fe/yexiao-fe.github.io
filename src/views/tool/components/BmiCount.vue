<script setup lang="ts">
import { ref } from "vue";
import func from "../../../../vue-temp/vue-editor-bridge";
const height = ref(0);
const weight = ref(0);
const result = ref(null);
const resultType = ref("success");
function equalTo() {
  result.value = null;
  resultType.value = "success";
  if (!height.value || !weight.value) return;
  result.value = (weight.value / height.value ** 2).toFixed(2);
  const rv = result.value;
  if (rv <= 18.5 || (rv > 24 && rv <= 28)) {
    resultType.value = "warning";
  } else if (rv > 28) {
    resultType.value = "error";
  } else {
    resultType.value = "success";
  }
}
</script>
<template>
  <div>
    计算公式为：BMI=体重÷身高<sup>2</sup>。（体重单位：千克；身高单位：米）
  </div>
  <div class="flex" style="margin: 20px 0">
    <n-input-number
      v-model:value="weight"
      type="text"
      placeholder="体重"
      :min="0"
      style="width: 100px"
    />
    <n-button quaternary type="primary"> kg ➗ </n-button>
    <n-input-number
      v-model:value="height"
      type="text"
      placeholder="身高"
      :min="0"
      style="width: 100px"
    />
    <n-button quaternary type="primary">
      m<sup style="position: relative; top: -10px">2</sup>
    </n-button>
    <n-button type="primary" @click="equalTo"> 等于 </n-button>
    <n-button :type="resultType" dashed style="margin-left: 10px">
      {{ result }}
    </n-button>
  </div>
  <div class="range">
    <div>参考范围：</div>
    <n-button type="warning" ghost> (0, 18.5] 偏瘦 </n-button>
    <n-button type="success" ghost> (18.5, 24] 正常 </n-button>
    <n-button type="warning" ghost> (24, 28] 超重 </n-button>
    <n-button type="error" ghost> (28, 32] 肥胖 </n-button>
    <n-button type="error" ghost> (32, +∞) 重度肥胖 </n-button>
  </div>
</template>

<style lang="less" scoped>
.range button {
  margin: 5px;
}
</style>