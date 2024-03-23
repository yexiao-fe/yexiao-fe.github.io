<script setup lang="ts">
/*************引入***************/

import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

/*************数据***************/

const targetPath = "/home";
const count = ref(10);
let timer = null;
const router = useRouter();

/*************生命周期***************/
onMounted(() => {
  timer = setInterval(() => {
    count.value -= 1;
    if (count.value === 0) {
      clearTimer();
      router.push(targetPath);
    }
  }, 1000);
});
onBeforeUnmount(() => {
  clearTimer();
});

/*************函数***************/

function clearTimer() {
  if (timer) clearInterval(timer);
}
</script>

<template>
  <div class="page404 vc">
    <h1>404</h1>
    <router-link :to="targetPath">{{ count }}s 后跳转到首页🐒</router-link>
  </div>
</template>

<style lang="less" scoped>
.page404 {
  font-size: 32px;
  h1 {
    font-size: 120px;
    color: green;
  }
}
</style>