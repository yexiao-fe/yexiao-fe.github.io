<script setup lang="ts">
import BasicHeader from './BasicHeader.vue'
</script>

<template>
  <basic-header></basic-header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="less" scoped>
main {
  padding-top: @size-header-height;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden auto;
}
</style>