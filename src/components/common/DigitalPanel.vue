<script setup lang="ts">
defineProps({
  value: Object,
});
</script>

<template>
  <div class="box">
    <div :class="`icon ${value.icon}`"></div>
    <div class="text">
      <span>{{ value.name }}</span>
      <span>{{ value.value }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  width: 208px;
  height: 100px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  margin-bottom: 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s linear;
  &:hover {
    transform: translateX(20px);
  }
  .icon {
    &.article {
      --icon: url(@/assets/images/article.svg);
    }
    &.demo {
      --icon: url(@/assets/images/demo.svg);
    }
    &.tool {
      --icon: url(@/assets/images/tool.svg);
    }
    &.document {
      --icon: url(@/assets/images/document.svg);
    }
    &.experience {
      --icon: url(@/assets/images/experience.svg);
    }
    width: 50px;
    height: 50px;
    background: var(--icon);
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .text {
    flex: 1;
    padding-left: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
}
</style>