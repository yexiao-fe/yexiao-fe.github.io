<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BasicHeader from "./BasicHeader.vue";

const route = useRoute();
const className = computed(() => route.path.split("/")[1]);
console.log(route.path)
</script>

<template>
  <basic-header></basic-header>
  <main :class="className">
    <router-view></router-view>
  </main>
</template>

<style lang="less" scoped>
main {
  padding-top: @size-header-height;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden auto;
  &.article {
    background-color: #000;
  }
}
</style>