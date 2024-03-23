<script setup lang="ts">
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

import MarkdownIt from "markdown-it";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItAnchor from "markdown-it-anchor";
import "./markdown.css";
import { ref, computed } from "vue";

const md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          `<pre class="hljs"><code class="language-${lang}">` +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          "</code></pre>"
        );
      } catch (__) {}
    }
    return (
      '<pre class="hljs"><code class="language-bash">' +
      md.utils.escapeHtml(str) +
      "</code></pre>"
    );
  }
});
md.use(MarkdownItHighlightjs);
md.use(MarkdownItAnchor);
const props = defineProps({
  source: String
});
// 获取markdown目录，h标签
const hReg = /(#{1,6} .*)\r?\n/g;
// 获取代码片段
const codeReg = /```[^```]+```/gm;
// 标题转id
const titleToId = e =>
  encodeURIComponent(
    String(e)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
  );
const list = computed(() => {
  const hList = props.source?.replaceAll(codeReg, "").match(hReg);
  if (!hList) return [];
  const idObj = {};
  return hList.map(v => {
    const item = v.split("\n")?.[0]?.split("# ");
    const id = titleToId(item[1]);
    if (idObj[id] || idObj[id] === 0) {
      idObj[id] += 1;
    } else {
      idObj[id] = 0;
    }
    const index = idObj[id];
    return {
      level: item[0].length + 1,
      title: item[1],
      id: index ? `${id}-${index}` : id
    };
  });
});

const activeHref = ref(0);
</script>

<template>
  <div class="markdown">
    <div v-html="md.render(source)" v-if="source" class="markdown-body" />
    <!-- <div class="markdown-list">
      <div>目录</div>
      <a
        v-for="(item, index) in list"
        :key="index"
        :href="`#${item.id}`"
        :style="{paddingLeft: `${10 * item.level}px`}"
        :class="{active: activeHref === index}"
        @click="activeHref = index"
      >{{item.title}}</a>
    </div> -->
  </div>
</template>