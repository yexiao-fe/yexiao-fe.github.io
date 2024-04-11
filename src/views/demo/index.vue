<script setup lang="ts">
import { ref } from "vue";
import { demoList } from "@/mock";
import WidgetTitle from '@/components/common/WidgetTitle.vue'
import IframeBox from './components/IframeBox.vue'
import DemoBox from './components/DemoBox.vue'
// js demo
import JsMagnifier from './components/JsMagnifier.vue'
import JsClock from './components/JsClock.vue'
// css demo
import CssMirror from './components/CssMirror.vue'
import CssRipple from './components/CssRipple.vue'
import CssGear from './components/CssGear.vue'
import CssLight from './components/CssLight.vue'
import CssLoop from './components/CssLoop.vue'
import CssTunnel from './components/CssTunnel.vue'
import CssBean from './components/CssBean.vue'
import CssBeanCyan from './components/CssBeanCyan.vue'
import CssCarousel from './components/CssCarousel.vue'
import CssFight from './components/CssFight.vue'
import CssGoldParticle from './components/CssGoldParticle.vue'
import CssLamp from './components/CssLamp.vue'
import CssLoadingHeart from './components/CssLoadingHeart.vue'
import CssLoadingOxHorn from './components/CssLoadingOxHorn.vue'
import CssText from './components/CssText.vue'
import CssVertigo from './components/CssVertigo.vue'
import CssWater from './components/CssWater.vue'
import CssEgg from './components/CssEgg.vue'

const comps = {
  JsMagnifier,
  JsClock,
  CssMirror,
  CssRipple,
  CssGear,
  CssLight,
  CssLoop,
  CssTunnel,
  CssBean,
  CssBeanCyan,
  CssCarousel,
  CssFight,
  CssGoldParticle,
  CssLamp,
  CssLoadingHeart,
  CssLoadingOxHorn,
  CssText,
  CssVertigo,
  CssWater,
  CssEgg
};

const list = ref(demoList);

</script>

<template>
  <ul>
    <li v-for="(item, index) in list" :key="index" :class="item.className">
      <widget-title :title="item.title"></widget-title>
      <div class="flex">
        <template v-for="(child, i) in item.children" :key="`${index}-${i}`">
          <iframe-box :data="child" v-if="item.type === 'project'" class="space"></iframe-box>
          <demo-box :title="child.name" v-else class="space" :className="item.type">
            <component :is="comps[child.component]"></component>
          </demo-box>
        </template>
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
  .space {
    margin: 10px;
    float: left;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &>div {
      flex-shrink: 0;
    }
  }
}
</style>