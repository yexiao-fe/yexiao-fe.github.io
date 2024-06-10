<script setup lang="ts">
/*************引入***************/ 
import { computed } from "vue";
import { useRoute } from "vue-router";

/*************props、emit、route***************/ 
defineProps({
  navList: Array,
  isVertical: Boolean
});
const emit = defineEmits(["change"]);
const route = useRoute();

/*************数据***************/ 
const navActivePath = computed(() => '/' + route.path.split('/')[1]);

/*************自定义函数***************/ 
function changeClick() {
  emit("change");
}
</script>

<template>
  <ul :class="{vertical: isVertical}">
    <router-link v-for="nav in navList" :key="nav.name" :to="nav.path" custom v-slot="{navigate}">
      <li
        :key="nav.name"
        :class="{active: navActivePath === nav.path, horizontal: !isVertical}"
        @click="()=>{
            navigate(); changeClick()
        }"
      >{{nav.label}}</li>
    </router-link>
    <slot></slot>
  </ul>
</template>

<style lang="less" scoped>
ul {
  flex: 1;
  font-weight: bold;
  margin: 0 20px;
  li {
    float: left;
    margin: 0 5px;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
    width: max-content;
    &:hover,
    &.active {
      background-color: @black-color-30;
      color: @orange-color-1;
    }
    &.active {
      box-shadow: 0 5px 5px @black-color-1;
    }
  }

  &.vertical {
    margin: 0;
    position: absolute;
    left: 50%;
    top: 45px;
    transform: translateX(-50%);
    background: @blue-color-1;
    width: max-content;
    padding: 5px 0;
    box-shadow: 0 0 15px 2px @black-color-1;
    li {
      float: initial;
      margin: 0;
      border-radius: initial;
      width: calc(100% - 30px);
      &.active {
        box-shadow: initial;
      }
    }

    &::before {
      content: "";
      --size: 20px;
      width: var(--size);
      height: var(--size);
      position: absolute;
      left: 50%;
      top: calc(var(--size) / -2);
      transform: translateX(-50%) rotate(45deg);
      background: linear-gradient(
        to right bottom,
        @blue-color-1,
        @blue-color-1 50%,
        transparent 50%
      );
    }
  }
}
</style>