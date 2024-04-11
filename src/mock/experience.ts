interface item {
    question: string;
    label: string,
    answer: string,
}

const experience: Array<item> = [
    {
        question: 'github master分支下的dist文件夹推送到gh-pages分支',
        label: 'Github',
        answer: `<ol>
            <li>第一步前提条件：dist需先提交到master分支</li>
            <li>第二步快捷命令：<green>git subtree push --prefix dist origin gh-pages</green></li>
        </ol>`
    },
    {
        question: '正则表达式将时间日期格式化',
        label: 'JS',
        answer: `<ol>
            <li>返回date对象距1970年1月1日午夜之间的毫秒数(时间戳)</li>
            <li>运算值没带单位，错误示例如：<red>width: calc(0 + 100px);</red></li>
        </ol>`
    },
    {
        question: '为什么CSS中的calc函数可能会不生效？',
        label: 'CSS',
        answer: `<ol>
            <li>运算符之间没加空格，错误示例如：<red>width: calc(100%-50px);</red></li>
            <li>运算值没带单位，错误示例如：<red>width: calc(0 + 100px);</red></li>
            <li>低版本less处理calc冲突，代码编译前：<green>width: calc(100% - 50px);</green>编译后：<red>width: calc(50%);</red>，解决方法如下：<green>~'anything'</green></li>
        </ol>`
    },
    {
        question: 'MacOS上Node版本的管理工具 n',
        label: 'Node',
        answer: `<ol>
            <li>下载管理工具n：<green>npm i -g n</green> 或 <green>yarn global add n</green></li>
            <li>
                安装Node版本 <br/> 
                指定版本：<green>n version </green>，如：n 18.12.1 <br/>
                稳定版本：<green>n lts/stable</green> <br/>
                最新版本：<green>n latest/current</green> <br/>
            </li>
            <li>
                删除Node版本 <br/> 
                指定版本：<red>n rm/- version </red> <br/>
                当前版本：<red>n uninstall</red> <br/>
                当前以外的版本：<red>n prune</red> <br/>
            </li>
        </ol>`
    }
]

export default experience