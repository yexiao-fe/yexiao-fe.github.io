
<script setup lang="ts">
import {ref} from 'vue'
const docList = ref([])
const classNames = ['red', 'orange', 'yellow', 'green', 'cyan','blue', 'purple']
function openWindow(url) {
    window.open(url)
}
</script>
<template>
   <ul>
        <li v-for="(doc, i) in docList" :key="i" :class="doc.className">
            <div>{{doc.title}}</div>
            <span v-for="(item, index) in doc.detail" :key="`${i}-${index}`" @click="openWindow(item.url)">{{item.name}}</span>
        </li>
   </ul>
</template>

<style scoped>
ul {
    padding: 20px;
}
ul li {
    margin-bottom: 20px;
    overflow: hidden;
}
ul li div {
    border-left: 5px solid var(--c1);
    background: linear-gradient(45deg, var(--c2), transparent);
    font:16px bold;
    text-indent: 5px;
}

ul li span {
    float: left;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid var(--c1);
    margin: 10px;
    cursor: pointer;
    transition: transform 0.1s linear;
}
ul li span:hover {
    background-color: var(--c2);
    transform: translateY(-5px);
}
</style>