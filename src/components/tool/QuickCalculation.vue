<script setup lang="ts">
import { ref, computed } from "vue";
const a = ref(null);
const n = ref(null);
const sum = computed(() => (a.value || 0) ** (n.value || 1));

const a1 = ref(null);
const n1 = ref(2);
const sum1 = computed(() => Math.pow(a1.value, 1 / n1.value));
</script>

<template>
  <div class="item">
    <input type="text" v-model="a" style="width: 60px" />的
    <input type="text" v-model="n" style="width: 40px" />次方 等于
    <span class="val">{{ sum }}</span>
  </div>

  <div class="item">
    <input type="text" v-model="n1" style="width: 40px" min="2" />次根号
    <input type="text" v-model="a1" style="width: 60px" /> 等于
    <span class="val">{{ sum1 }}</span>
  </div>
</template>

<style lang="less" scoped>
.item {
  margin-bottom: 10px;
  .val {
    color: @green-color-1;
  }
}
</style>