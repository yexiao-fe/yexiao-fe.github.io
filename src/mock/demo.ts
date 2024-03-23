interface item {
  name: string;
  url?: string;
  component?: string;
}

interface children {
  title: string;
  type: string;
  children: Array<item>;
}

const tool: Array<children> = [
  {
    title: "项目实战案例",
    type: "project",
    children: [
      {
        name: "测试案例",
        url: "https://lbs.amap.com/",
      },
      {
        name: "测试案例2",
        url: "https://www.baidu.com/",
      },
    ],
  },
  {
    title: "JS 案例",
    type: "js",
    children: [
      {
        name: "放大镜效果",
        component: "JsMagnifier",
      },
      {
        name: "时钟效果",
        component: "JsClock",
      },
    ],
  },
  {
    title: "CSS 案例",
    type: "css",
    children: [
      {
        name: "漫步前行",
        component: "CssMirror",
      },
      {
        name: "波纹效果",
        component: "CssRipple",
      },
      {
        name: "齿轮运动",
        component: "CssGear",
      },
      {
        name: "光环与倒影",
        component: "CssLight",
      },
      {
        name: "8字循环",
        component: "CssLoop",
      },
      {
        name: "隧道入口",
        component: "CssTunnel",
      },
      {
        name: "文字万花筒",
        component: "CssText",
      },
      {
        name: "眩晕光波",
        component: "CssVertigo",
      },
      {
        name: "吃豆得豆",
        component: "CssBean",
      },
      {
        name: "进击的青豆",
        component: "CssBeanCyan",
      },
      {
        name: "争夺大战",
        component: "CssFight",
      },
      {
        name: "半瓶水晃荡",
        component: "CssWater",
      },
      {
        name: "金粒摇",
        component: "CssGoldParticle",
      },
      {
        name: "呼吸的心loading",
        component: "CssLoadingHeart",
      },
      {
        name: "窗前小夜灯",
        component: "CssLamp",
      },
      {
        name: "旋转木马",
        component: "CssCarousel",
      },
      {
        name: "牛角loading",
        component: "CssLoadingOxHorn",
      },
      {
        name: "鸡蛋",
        component: "CssEgg",
      },
    ],
  },
];
export default tool;
