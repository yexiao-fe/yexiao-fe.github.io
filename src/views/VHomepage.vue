<script setup lang="ts">
/**************组件**************/
import DigitalPanel from '@/components/common/DigitalPanel.vue'
import EBar from '@/components/charts/EBar.vue'

/**************数据**************/
const digitalData = [
    { icon: 'article', name: '文章篇数', value: 10 },
    { icon: 'demo', name: 'Demo示例个数', value: 10 },
    { icon: 'tool', name: '工具个数', value: 10 },
    { icon: 'document', name: '技术文档个数', value: 10 },
    { icon: 'experience', name: '经验教训条数', value: 10 },
]
</script>

<template>
    <div class="wrapper">
        <div class="digital">
            <digital-panel v-for="item in digitalData" :key="item.icon" :value="item"></digital-panel>
        </div>
        <e-bar></e-bar>
    </div>
</template>

<style lang="less" scoped>
.digital {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>