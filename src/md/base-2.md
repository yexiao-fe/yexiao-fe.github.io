CSS hack是通过在CSS样式中加入一些特殊的符号，让不同的浏览器识别不同的符号（什么样的浏览器识别什么样的符号是有标准的，CSS hack就是让你记住这个标准），以达到应用不同的CSS样式的目的，比如.kwstu{width:300px;_width:200px;}，一般浏览器会先给元素使用width:300px;的样式，紧接着后面还有个_width:200px;由于下划线_width只有IE6可以识别，所以此样式在IE6中实际设置对象的宽度为200px，后面的把前面的给覆盖了，而其他浏览器不识别_width不会执行_width:200px;这句样式，所以在其他浏览器中设置对象的宽度就是300px;

<!-- more -->

注意：我们通常主要考虑的浏览器有IE6、IE7、IE8、谷歌浏览器（chrome）、火狐（Mozilla Firefox）即可，至于我们常用的傲游、QQ的TT浏览器是用你计算机中装的系统自带浏览器的内核，所以只需要兼容以上浏览器即可兼容TT\傲游浏览器。

## CSS hack解决问题

CSS hack用来解决有些css属性在不同浏览器中显示的效果不一样的问题，如margin属性在ie6中显示的距离会比其他浏览器中显示的距离宽2倍，也就是说margin-left:20px;在ie6中距左侧对象的实际显示距离是40px，而在非ie6中显示的距左侧对象的距离是设置的值20px;所以要想设置一个对象距离左侧对象的距离在所有浏览器中都显示是20px的宽度的样式应为：.kwstu{margin-left:20px;_margin-left:20px;}。

## 浏览器识别字符标准对应表

![对应表](http://a3.qpic.cn/psb?/V12txxLC164DyB/aHPOxgVlcYWyC3rhyGnHeid4OpnNZmpCLeku6Kk7Xtk!/b/dHABAAAAAAAA&bo=aAKKBAAAAAADB8Y!&rf=viewer_4)

从上图可以分析出以下几种情况：

```bash
大部分特殊字符IE浏览器支持，其他主流浏览器firefox，chrome，opera，safari不支持 (opera可识别除外)。
\9    ：所有IE浏览器都支持
_和-  ：仅IE6支持
*     ：IE6、E7支持
\0    ：IE8、IE9支持，opera部分支持
\9\0  ：IE8部分支持、IE9支持
\0\9  ：IE8、IE9支持
```

## 主流浏览器css hack总结

### IE

```css
element{
color：#666\9； //IE8 IE9
* color：#999；   //IE7
_color:#EBEBEB； //IE6
}
```

可以看出，利用字符识别无法区分IE8和IE9，我们可以从伪类的识别来区分:

```css
element{
color：#666\9；      //IE8
* color：#999；        //IE7
_color:#EBEBEB；      //IE6
}
:root element{color：#666\9;}//IE9
```

【说明】：“:root”伪类IE系列只有IE9支持，其他主流浏览器均支持，利用这一点来区分IE8和IE9。另外考虑到opera部分支持，完全支持:root,所以不使用。

### Firefox

mozilla私有属性:

```css
@-moz-document url-prefix(){ .element{color:#f1f1f1;}} //Firefox
```

### Webkit和Opera

```css
@media all and (min-width: 0px){ .element{color:#777;} }
//Webkit
@media screen and (-webkit-min-device-pixel-ratio:0)
{
.element{color:#444;}
}
//Opera
@media all and (-webkit-min-device-pixel-ratio:10000), not all and (-webkit-min-device-pixel-ratio:0) {
.element{color:#336699;}
}
```

### 兼容各大主流浏览器(最新版本)css hack汇总如下（最全的）

```css
.element{
color:#000;             /*w3c标准*/
[;color:#f00;];         /*Webkit(chrome和safari)*/
color:#666\9;           /*IE8*/
*color:#999;            /*IE7*/
_color:#333;            /*IE6*/
}
:root .element{color:#0f0\9;}  /*IE9*/
@media all and (-webkit-min-device-pixel-ratio:10000), not all and (
-webkit-min-device-pixel-ratio:0) { .element{color:#336699;}}  /*opera*/
@-moz-document url-prefix(){ .element{color:#f1f1f1;}} /*Firefox*/
```

## 浏览器内核

开发的一种排版引擎。使用Trident渲染引擎的浏览器包括：IE、傲游、世界之窗浏览器、Avant、腾讯TT、Netscape 8、NetCaptor、Sleipnir、GOSURF、GreenBrowser和KKman等。；

二、Gecko内核代表作品Mozilla FirefoxGecko是一套开放源代码的、以C++编写的网页排版引擎。Gecko是最流行的排版引擎之一，仅次于Trident。使用它的最著名浏览器有Firefox、Netscape6至9。

三、WebKit内核代表作品Safari、Chromewebkit 是一个开源项目，包含了来自KDE项目和苹果公司的一些组件，主要用于Mac OS系统，它的特点在于源码结构清晰、渲染速度极快。缺点是对网页代码的兼容性不高，导致一些编写不标准的网页无法正常显示。主要代表作品有Safari和Google的浏览器Chrome。

四、Presto内核代表作品OperaPresto是由Opera Software开发的浏览器排版引擎，供Opera 7.0及以上使用。它取代了旧版Opera 4至6版本使用的Elektra排版引擎，包括加入动态功能，例如网页或其部分可随着DOM及Script语法的事件而重新排版。

由于需求限制出现了好多双核浏览器，比如傲游、枫树浏览器（ChromePlus）、搜狗高速浏览器

## 常用css3兼容

-webkit- //代表safari、chrome私有属性

-moz- //代表firefox浏览器私有属性

-ms- //代表ie浏览器私有属性

-o- //欧朋