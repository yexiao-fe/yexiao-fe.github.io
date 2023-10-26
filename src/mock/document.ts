interface item {
    name: string;
    url: string;
    isEn?: boolean;
}

interface children {
    title: string;
    detail: Array<item>;
}

const document: Array<children> = [
    {
        title: '个人技术文档',
        detail: []
    },
    {
        title: '综合技术文档',
        detail: [
            {
                name: 'MDN',
                url: 'https://developer.mozilla.org/zh-CN/docs/Web/Guide'
            },
            {
                name: '菜鸟教程',
                url: 'https://www.runoob.com/'
            },
            {
                name: 'W3school',
                url: 'https://www.w3school.com.cn/'
            },
            {
                name: 'ECMAScript 6 入门',
                url: 'https://es6.ruanyifeng.com/'
            },
        ]
    },
    {
        title: '前端框架文档',
        detail: [
            {
                name: 'Vue3',
                url: 'https://cn.vuejs.org/',
            },
            {
                name: 'Vue2',
                url: 'https://v2.vuejs.org/',
            },
            {
                name: 'Vue Router',
                url: 'https://router.vuejs.org/zh/',
            },
            {
                name: 'Vuex',
                url: 'https://vuex.vuejs.org/zh/',
            },
            {
                name: 'Pinia',
                url: 'https://pinia.web3doc.top/',
            },
            {
                name: 'Vite',
                url: 'https://vitejs.cn/',
            },
            {
                name: 'Webpack',
                url: 'https://www.webpackjs.com/',
            },
            {
                name: 'Webpack',
                url: 'https://webpack.js.org/',
                isEn: true,
            },
            {
                name: 'React',
                url: 'https://zh-hans.react.dev/',
            },
            {
                name: 'React',
                url: 'https://react.dev/',
                isEn: true,
            },
        ]
    },
    {
        title: 'UI组件文档',
        detail: [
            {
                name: 'Element（vue）',
                url: 'https://element.eleme.cn/#/zh-CN/component/installation',
            },
            {
                name: 'Element-plus（vue）',
                url: 'https://element-plus.org/zh-CN/component/button.html',
            },
            {
                name: 'Arco Design（vue）',
                url: 'https://arco.design/vue/docs/start',
            },
            {
                name: 'Arco Design（react）',
                url: 'https://arco.design/react/docs/start',
            },
            {
                name: 'View Design（vue）',
                url: 'https://www.iviewui.com/view-ui-plus/guide/introduce',
            },
            {
                name: 'Ant Design（react）',
                url: 'https://ant.design/components/overview-cn/',
            },
        ]
    },
    {
        title: '图形可视化文档',
        detail: [
            {
                name: 'Echarts',
                url: 'https://echarts.apache.org/zh/index.html'
            },
            {
                name: 'D3',
                url: 'https://d3js.org/',
                isEn: true,
            },
            {
                name: 'Three',
                url: 'https://threejs.org/',
                isEn: true,
            },
            {
                name: 'Three',
                url: 'http://www.webgl3d.cn/pages/aac9ab/',
            },
            {
                name: 'Antv',
                url: 'https://antv.antgroup.com/',
            },
            {
                name: '高德地图API',
                url: 'https://lbs.amap.com/api/loca-v2/intro',
            },
            {
                name: '百度地图API',
                url: 'https://lbsyun.baidu.com/index.php?title=jspopularGL',
            },
            {
                name: 'Arcgis',
                url: 'https://www.esri.com/en-us/home',
                isEn: true,
            },
            {
                name: 'Arcgis',
                url: 'https://desktop.arcgis.com/zh-cn/documentation/',
            },
            {
                name: 'Cesium',
                url: 'https://www.cesium.com/',
                isEn: true,
            },
        ]
    },
    {
        title: '其他技术文档',
        detail: [
            {
                name: 'Vuepress',
                url: 'https://vuepress.vuejs.org/zh/',
            },
            {
                name: 'Vitepress',
                url: 'https://vitejs.cn/vitepress/',
            },
            {
                name: 'Hexo',
                url: 'https://hexo.io/zh-cn/',
            },
        ]
    },
]
export default document