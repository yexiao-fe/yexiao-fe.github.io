<script setup lang="ts">
defineProps({
  title: String,
});
</script>
<template>
  <div class="widget-title">{{ title }}</div>
</template>

<style lang="less" scoped>
.widget-title {
  background: linear-gradient(135deg, #369ee9, #eaf5d1);
  color: #fff;
  font-size: 24px;
  line-height: 50px;
  text-indent: 20px;
}
</style>