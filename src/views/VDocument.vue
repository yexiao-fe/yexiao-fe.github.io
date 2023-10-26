
<script setup lang="ts">
import {ref} from 'vue'
import { documentList } from '@/mock'
const docList = ref(documentList)
function openWindow(url) {
    window.open(url)
}
</script>
<template>
   <ul>
        <li v-for="(doc, i) in docList" :key="i">
            <div class="title">{{doc.title}}</div>
            <div v-for="(item, index) in doc.detail" :key="`${i}-${index}`" @click="openWindow(item.url)" class="item">
                <div class="name">{{item.name}}</div>
                <div class="tip">
                    <span>{{ item.name.slice(0,1) }}</span>
                    <span> | </span>
                    <span>{{ item.isEn ? '英' : '中' }}文文档</span>
                </div>
            </div>
        </li>
   </ul>
</template>

<style lang="less" scoped>
ul {
    padding: 20px;
    li {
        margin-bottom: 20px;
        overflow: hidden;
    }
    .title {
        border-left: 5px solid @cyan-color-1;
        background: linear-gradient(45deg, @cyan-color-2, transparent);
        font: 16px bold;
        text-indent: 5px;
        padding: 5px 0;
        color: #000;
    }
    .item {
        float: left;
        padding: 5px 0;
        text-align: center;
        background-color:rgba(0, 0, 0, 0.8);
        border-radius: 4px;
        margin: 10px;
        cursor: pointer;
        transition: transform 0.1s linear;
        min-width: 150px;
        .name,
        .tip {
            padding: 0 10px;
            line-height: 36px;
        }
        .name {
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            font-weight: bold;
        }

        .tip {
            font-size: 12px;
            color: @purple-color-1;
            span:nth-child(3) {
                color: @white-color-1;
                padding: 4px 6px;
                background-color: @purple-color-1;
            }
        }

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 3px 5px @black-color-1;
            color: @orange-color-1;
        }
    }
}
</style>
