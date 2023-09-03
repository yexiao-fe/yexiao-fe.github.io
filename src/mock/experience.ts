interface item {
    question: string;
    label: string,
    answer: string,
}

const experience: Array<item> = [
    {
        question: '为什么CSS中的calc函数可能会不生效？',
        label: 'CSS',
        answer: `<ol>
            <li>运算符之间没加空格，错误示例如：<red>width: calc(100%-50px);</red></li>
            <li>运算值没带单位，错误示例如：<red>width: calc(0 + 100px);</red></li>
            <li>低版本less处理calc冲突，代码编译前：<green>width: calc(100% - 50px);</green>编译后：<red>width: calc(50%);</red>，解决方法如下：<green>~'anything'</green></li>
        </ol>`
    }
]

export default experience