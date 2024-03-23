interface item {
    name: string;
    url?: string;
    component?: string;
}

interface children {
    title: string;
    component: string;
    width?: string;
    height?: string;
    children?: Array<item>;
}

const tool: Array<children> = [
    {
        title: '日期时间转换',
        component: 'DatetimeConversion',
        width: '680px',
        height: '300px',
    },
    {
        title: '身体质量指数（BMI）计算',
        component: 'BmiCount',
        height: '300px',
    },
    {
        title: '第三方工具',
        component: 'ThirdParty',
        width: 'calc(100% - 20px)',
        height: 'inherit',
        children: [
            {
                name: '菜鸟工具',
                url: 'https://c.runoob.com/'
            },
            {
                name: 'tinypng 图片压缩',
                url: 'https://tinypng.com/'
            },
            {
                name: '10M以下 图片压缩',
                url: 'https://www.gaitubao.com/jpg-gif-png'
            },
            {
                name: '草料二维码',
                url: 'https://cli.im/url'
            },
            {
                name: 'Three 编辑器',
                url: 'https://threejs.org/editor/'
            },
            {
                name: '高德坐标拾取器',
                url: 'https://lbs.amap.com/tools/picker'
            },
            {
                name: 'Palette 色彩工具',
                url: 'https://arco.design/palette/list'
            },
        ]
    },
]
export default tool