interface item {
  name: string;
  url?: string;
  component?: string;
}

interface children {
  title: string;
  className: string;
  detail: Array<item>;
}

const tool: Array<children> = [
  {
    title: "项目实战",
    className: "project",
    detail: [
      {
        name: "项目1",
        url: "https://www.baidu.com/",
      },
      {
        name: "项目2",
        url: "https://www.baidu.com/",
      },
    ],
  },
  {
    title: "小游戏",
    className: "game",
    detail: [],
  },
  {
    title: "JS Demo",
    className: "jsdemo",
    detail: [],
  },
  {
    title: "CSS Demo",
    className: "cssdemo",
    detail: [
      {
        name: "文字万花筒",
        component: "TextFlower",
      },
      {
        name: "快捷计算",
        component: "QuickCalculation",
      },
    ],
  },
];
export default tool;
