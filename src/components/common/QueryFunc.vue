<script setup lang="ts">
import { ref } from "vue";
defineProps({
  options: Array,
});
const emit = defineEmits(["query"]);
const selectVal = ref(null);
const inputVal = ref(null);
</script>
<template>
  <div class="flex">
    <n-select
      v-model:value="selectVal"
      :options="options"
      placeholder="请选择类型"
      style="max-width: 200px; margin-right: 10px"
      clearable
    />
    <n-input
      v-model:value="inputVal"
      type="text"
      placeholder="请输入检索的文本"
      style="max-width: 200px; margin-right: 20px"
      clearable
    />
    <n-button type="primary" @click="emit('query', { selectVal, inputVal })">
      搜索
    </n-button>
  </div>
</template>
