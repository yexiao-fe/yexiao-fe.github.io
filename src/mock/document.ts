interface item {
    name: string;
    url: string;
}

interface children {
    title: string;
    children: Array<item>;
}

const document: Array<children> = [
    // {
    //     title: '个人技术文档',
    //     children: []
    // },
    {
        title: '综合技术文档',
        children: [
            {
                name: 'MDN Web开发文档',
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
        children: [
            {
                name: 'Vue 文档',
                url: 'https://cn.vuejs.org/',
            },
            {
                name: 'VueRouter 路由',
                url: 'https://router.vuejs.org/zh/',
            },
            {
                name: 'Vuex 状态存储',
                url: 'https://vuex.vuejs.org/zh/',
            },
            {
                name: 'Pinia 状态存储',
                url: 'https://pinia.web3doc.top/',
            },
            {
                name: 'Vite 构建工具',
                url: 'https://vitejs.cn/',
            },
            {
                name: 'Webpack 构建工具',
                url: 'https://www.webpackjs.com/',
            },
            {
                name: 'React 文档',
                url: 'https://zh-hans.react.dev/',
            },
        ]
    },
    {
        title: 'UI组件文档',
        children: [
            {
                name: 'Element 文档',
                url: 'https://element.eleme.cn/#/zh-CN/component/installation',
            },
            {
                name: 'ElementPlus 文档',
                url: 'https://element-plus.org/zh-CN/component/button.html',
            },
            {
                name: 'ArcoDesign 文档',
                url: 'https://arco.design/vue/docs/start',
            },
            {
                name: 'NaiveUI 文档',
                url: 'https://www.naiveui.com/zh-CN/os-theme/components/button',
            },
            {
                name: 'ViewDesign 文档',
                url: 'https://www.iviewui.com/view-ui-plus/guide/introduce',
            },
            {
                name: 'AntDesign 文档',
                url: 'https://ant.design/components/overview-cn/',
            },
            {
                name: 'uniapp 文档',
                url: 'https://uniapp.dcloud.net.cn/component/',
            },
        ]
    },
    {
        title: '图形可视化文档',
        children: [
            {
                name: 'Echarts 文档',
                url: 'https://echarts.apache.org/zh/index.html'
            },
            {
                name: 'Echarts 案例集合',
                url: 'https://www.makeapie.cn/echarts'
            },
            {
                name: 'D3 文档',
                url: 'https://d3js.org/',
            },
            {
                name: 'Three 文档',
                url: 'https://threejs.org/',
            },
            {
                name: 'Three 辅助文档',
                url: 'http://www.webgl3d.cn/pages/aac9ab/',
            },
            {
                name: 'Antv 文档',
                url: 'https://antv.antgroup.com/',
            },
            {
                name: '高德地图API 文档',
                url: 'https://lbs.amap.com/api/loca-v2/intro',
            },
            {
                name: '百度地图API 文档',
                url: 'https://lbsyun.baidu.com/index.php?title=jspopularGL',
            },
            {
                name: 'Arcgis 文档',
                url: 'https://desktop.arcgis.com/zh-cn/documentation/',
            },
            {
                name: 'Cesium 文档',
                url: 'https://www.cesium.com/',
            },
        ]
    },
    {
        title: '其它技术文档',
        children: [
            {
                name: 'Vuepress 博客搭建',
                url: 'https://vuepress.vuejs.org/zh/',
            },
            {
                name: 'Vitepress 博客搭建',
                url: 'https://vitejs.cn/vitepress/',
            },
            {
                name: 'Hexo 博客搭建',
                url: 'https://hexo.io/zh-cn/',
            },
        ]
    },
]
export default document