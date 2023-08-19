<script setup lang="ts">
const name=[1,2,3]
console.log(name)
</script>
<template>
    <div class="wrapper">
        <div class="left" v-for="item in name">{{item}}</div>
    </div>
</template>