<script setup lang="ts">
/**************组件**************/
import DigitalPanel from '@/components/common/DigitalPanel.vue'

/**************数据**************/
const digitalData = [
    { icon: 'article', name: '文章数', value: 10 },
    { icon: 'article', name: '文章数', value: 10 },
    { icon: 'article', name: '文章数', value: 10 },
    { icon: 'article', name: '文章数', value: 10 },
]
</script>

<template>
    <div class="wrapper">
        <div class="digital">
            <digital-panel v-for="item in digitalData" :key="item.icon" :value="item"></digital-panel>
        </div>
    </div>
</template>

<style lang="less" scoped>
.digital {
    display: flex;
    justify-content: space-around;
}
</style>