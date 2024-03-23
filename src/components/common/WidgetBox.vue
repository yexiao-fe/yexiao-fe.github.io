<script setup lang="ts">
defineProps({
  title: String,
  width: {
    type: String,
    default: "520px",
  },
  height: {
    type: String,
    default: "360px",
  },
});
</script>
<template>
  <div class="widget-box" :style="{ width, height }">
    <div class="box-title">{{ title }}</div>
    <div class="slot-box">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.widget-box {
  padding: 10px;
  box-sizing: border-box;
  border-radius: 12px;
  background: linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background-color: #000;
    border-radius: 12px;
  }
  .box-title {
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    color: #ff9800;
    text-indent: 15px;
    position: relative;
    border-bottom: 1px solid;
  }
  .slot-box {
    height: calc(100% - 42px);
    position: relative;
  }
}
</style>