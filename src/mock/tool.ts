interface item {
    name: string;
    url?: string;
    component?: string;
}

interface children {
    title: string;
    detail: Array<item>;
}

const tool: Array<children> = [
    {
        title: '个人开发工具',
        detail: [
            {
                name: '时间转换',
                component: 'TimeConversion',
            },
            {
                name: '快捷计算',
                component: 'QuickCalculation',
            }
        ]
    },
    {
        title: '第三方工具',
        detail: [
            {
                name: '菜鸟工具',
                url: 'https://c.runoob.com/'
            },
            {
                name: 'tinypng 图片压缩',
                url: 'https://tinypng.com/'
            },
            {
                name: 'Palette 色彩工具',
                url: 'https://arco.design/palette/list'
            },
            {
                name: 'Three 编辑器',
                url: 'https://threejs.org/editor/'
            },
            {
                name: '坐标拾取器',
                url: 'https://lbs.amap.com/tools/picker'
            },
        ]
    },
]
export default tool