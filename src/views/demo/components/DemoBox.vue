<script setup lang="ts">
import { ref } from "vue";
defineProps({
  title: String,
  className: String,
});
const key = ref(0);

function refresh() {
  key.value = Date.now();
}
</script>
<template>
  <div :class="`widget-box ${className}`" :key="key">
    <div class="box-title">
      {{ title }}
      <n-button
        type="primary"
        class="refresh"
        v-if="className == 'js'"
        @click="refresh"
      >
        刷新
      </n-button>
    </div>
    <div class="slot-box">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.widget-box {
  padding: 10px;
  border-radius: 4px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #369ee9, #eaf5d1);
  position: relative;
  height: var(--h);
  &.js {
    width: calc(50% - 20px);
    --h: 400px;
    min-width: 680px;
  }
  &.css {
    width: var(--h);
    --h: 360px;
    .slot-box {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000;
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background-color: #fff;
    border-radius: 4px;
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

  .refresh {
    float: right;
    margin-top: 2px;
    margin-right: 2px;
  }
}
</style>