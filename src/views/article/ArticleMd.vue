<script setup lang="ts">
import MarkdownBody from "@/components/markdown/MarkdownBody.vue";
import { ref, onMounted } from "vue";
import { articleList } from "@/mock";
import { useRoute } from "vue-router";
const route = useRoute();
const id = articleList.find(
  (item) => new Date(item.time).getTime() == route.params.id
)?.id;
import axios from "axios";
axios.get(`./src/md/${id}.md`).then((res) => {
  source.value = res.data;
});
const source = ref("");
</script>
<template>
  <div class="article-box">
    <markdown-body :source="source"></markdown-body>
  </div>
</template>

<style lang="less" scoped>
.article-box {
  --top: @size-header-height;
  height: calc(100vh - var(--top) - 40px);
  max-width: 820px;
  margin: 20px auto 0;
  background: #fff;
  color: #000;
  overflow: auto;
}
</style>