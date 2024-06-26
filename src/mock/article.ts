interface item {
    title: string;
    label: string;
    time: string;
    id: string;
    desc: string;
}

const experience: Array<item> = [
    {
        title: 'qiankun微前端架构使用hash路由从0到1的开发',
        label: '微前端',
        time: '2022-01-22 14:10',
        id: 'micro-1',
        desc: '微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。'
    },
    {
        title: 'call、apply、bind使用和区别',
        label: 'JS',
        time: '2021-10-20 23:59',
        id: 'js-1',
        desc: 'call、apply、bind我们会经常听到，但是他们究竟是做什么的呢，怎么去使用它们，它们之间又有何差别呢？'
    },
    {
        title: '前端与Nginx的不解之缘——Nginx配置和Code部署',
        label: 'Nginx',
        time: '2021-07-06 00:56',
        id: 'nginx-1',
        desc: 'Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。'
    },
    {
        title: 'nginx 的安装及配置',
        label: 'Nginx',
        time: '2020-11-02 23:25:43',
        id: 'nginx-2',
        desc: '返回date对象距1970年1月1日午夜之间的毫秒数(时间戳)'
    },
    {
        title: '日期格式化',
        label: 'Function',
        time: '2020-10-27 20:16:54',
        id: 'js-2',
        desc: '返回date对象距1970年1月1日午夜之间的毫秒数(时间戳)'
    },
    {
        title: '览器解析过程',
        label: '基础',
        time: '2020-08-19 14:02:38',
        id: 'base-1',
        desc: ''
    },
    {
        title: 'CSS hack',
        label: '基础',
        time: '2020-07-29 17:55:13',
        id: 'base-2',
        desc: ''
    },
    {
        title: '特殊符号',
        label: '基础',
        time: '2020-07-26 15:57:17',
        id: 'base-3',
        desc: ''
    },
]

export default experience