<script setup lang="ts">
/*************引入***************/
// 函数
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
// 组件
import BasicHeaderNav from "./BasicHeaderNav.vue";
// 其他
import github from "@/assets/images/github.svg";
import gitee from "@/assets/images/gitee.svg";

/*************route***************/
const route = useRoute();

/*************数据***************/
// 导航
const navList = [
  { name: "homepage", label: "首页", path: "/homepage" },
  { name: "article", label: "文章", path: "/article" },
  { name: "demo", label: "Demo示例", path: "/demo" },
  { name: "tool", label: "工具", path: "/tool" },
  { name: "document", label: "技术文档", path: "/document" },
  { name: "experience", label: "经验教训库", path: "/experience" }
];
const sliceIndex = ref(navList.length);
let allNavWidth: Array<number> = [];
const navRef:any = ref(null);
const horNavList = computed(() => navList.slice(0, sliceIndex.value));
const verNavList = computed(() => navList.slice(sliceIndex.value));
// 链接栏
const links = [
  { name: "github", icon: github, url: "https://www.baidu.com" },
  { name: "gitee", icon: gitee, url: "https://www.baidu.com" }
];
// 更多
const isMore = ref(false);
const isVerticalIncludes = computed(() =>
  navList.slice(sliceIndex.value).some(v => v.path === route.path)
);

/*************自定义函数***************/

const onResize = (width: number) => {
  if (!allNavWidth.length) {
    const lis = navRef?.value?.$el?.querySelectorAll("li.horizontal");
    allNavWidth = [...lis].map(el => el.offsetWidth);
  }
  // more or less 宽度
  let total = 65;
  allNavWidth.forEach((num, index) => {
    total += num + 10;
    if (total > width) return;
    sliceIndex.value = index + 1;
  });
};
</script>

<template>
  <header>
    <div class="logo aside">也笑的博客</div>
    <basic-header-nav :navList="horNavList" v-resize="onResize" ref="navRef" @change="isMore=false">
      <div class="btn">
        <div
          :class="[isMore ? 'more' : 'less', {'events-none': !verNavList.length, active:isVerticalIncludes}]"
          @click="isMore = !isMore"
        ></div>
        <basic-header-nav
          :navList="verNavList"
          isVertical
          v-show="isMore && verNavList.length"
          @change="isMore=false"
        ></basic-header-nav>
      </div>
    </basic-header-nav>
    <div class="link aside">
      <a :href="link.url" v-for="link in links" :key="link.name" target="_blank">
        <img :src="link.icon" :alt="link.name" />
      </a>
    </div>
  </header>
</template>

<style lang="less" scoped>
header {
  min-width: 320px;
  width: 100%;
  height: @size-header-height;
  padding: 0 20px;
  position: fixed;
  background-color: @blue-color-1;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  .aside {
    width: 200px;
    height: @size-header-icon;
    box-sizing: border-box;
    overflow: hidden;
  }

  .logo {
    text-indent: 10px;
    font-weight: bold;
    font-size: @fsize-3;
    padding-left: @size-header-icon;
    line-height: @size-header-icon;
    background: url(@/assets/images/logo.svg) 0 / @size-header-icon no-repeat;
  }
  .link {
    a {
      float: right;
      margin-left: 10px;
    }
    img {
      width: @size-header-icon;
    }
  }
  .btn {
    position: relative;
    float: left;
    margin-left: 20px;
    .more,
    .less {
      height: 30px;
      background-repeat: no-repeat;
      cursor: pointer;
      &.events-none {
        pointer-events: none;
        filter: brightness(0.5);
      }
      &.active {
        filter: drop-shadow(2px 4px 6px @orange-color-1);
      }
    }
    .more {
      width: 40px;
      background-image: url(@/assets/images/more.svg);
    }
    .less {
      width: 30px;
      background-image: url(@/assets/images/less.svg);
    }
  }
}
</style>