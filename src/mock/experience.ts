interface item {
    question: string;
    label: string,
    answer: string,
}

const experience: Array<item> = [
    {
        question: 'nginx: [emerg] bind() to 0.0.0.0:port failed (98: Address already in use)',
        label: 'Nginx',
        answer: `<ol>
            <li>
                第一步检查端口占用情况：<green>netstat -apn  | grep  port</green>，以9090端口为例，输出结果如下：
                <div>[root@xxxs sbin]# netstat -apn  | grep  9090</div>
                <div>tcp        0      0 0.0.0.0:9090            0.0.0.0:*  </div>
                <div>LISTEN      9090/nginx: worker </div>
            </li>
            <li>第二步强制杀掉：<green>kill -9 port</green></li>
            <li>
                第三步重启nginx服务器：
                <green>
                    <div>cd /usr/local/nginx(nginx文件夹)/sbin</div>
                    <div>./nginx -s reload</div>
                </green>
            </li>
        </ol>`
    },
    {
        question: 'u盘或移动硬盘大于4GB的文件无法存储',
        label: '其它',
        answer: `<ol>
            <div>因为u盘或硬盘默认格式是<yellow>FAT32</yellow>，它的单个文件大小限制为4GB，所以需要格式化为其它格式，如下：</div>
            <li>格式化为<green>NTFS</green>，属于微软的专利，无法在Mac系统使用</li>
            <li>格式化为<green>exFAT</green>，兼容性好，单个文件上限可达16EB</li>
        </ol>`
    },
    {
        question: 'github master分支下的dist文件夹推送到gh-pages分支',
        label: 'Github',
        answer: `<ol>
            <li>第一步前提条件：dist需先提交到master分支</li>
            <li>第二步快捷命令：<green>git subtree push --prefix dist origin gh-pages</green></li>
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