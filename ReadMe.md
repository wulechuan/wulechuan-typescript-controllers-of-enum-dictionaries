# 吴乐川的〔字典机〕与〔字典群之总机〕

<link rel="stylesheet" href="./node_modules/@wulechuan/css-stylus-markdown-themes/源代码/发布的源代码/文章排版与配色方案集/层叠样式表/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">



> 中国人——特别是汉族人，理应坚持广泛、规范地使用汉语。凡非必要之情形不说外国话、不用外国字。此乃天经地义！然则每当必要，亦不排斥采用外国之语言。不妨 **博世界之学问，养中国之精神** 。
>
> 本人亦支持少数民族坚持采用自己民族的传统语言。仍须强调，凡中国人，皆应会用汉语、积极使用汉语，此乃中华各民族之大一统之必由。





## NPM 页

<dl>
<dt>NPM 包名</dt>
<dd>

[@wulechuan/controllers-of-enum-dictionaries](https://www.npmjs.com/package/@wulechuan/controllers-of-enum-dictionaries)

</dd>
<dt>作者</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>




## 源代码仓库

| <span style="display:inline-block;width:180px;">提供仓库服务之组织</span> | <span style="display:inline-block;width:150px;">仓库组织之国别</span> | 仓库地址 |
| ------------- | :----------: | ------- |
| 码云           | 中华人民共和国 | [https://gitee.com/nanchang-wulechuan/wulechuan-typescript-controllers-of-enum-dictionaries.git](https://gitee.com/nanchang-wulechuan/wulechuan-typescript-controllers-of-enum-dictionaries.git) |
| 阿里云之代码仓库 | 中华人民共和国 | [https://code.aliyun.com/wulechuan/wulechuan-typescript-controllers-of-enum-dictionaries.git](https://code.aliyun.com/wulechuan/wulechuan-typescript-controllers-of-enum-dictionaries.git) |
| GitHub         | 美           | [https://github.com/wulechuan/wulechuan-typescript-controllers-of-enum-dictionaries.git](https://github.com/wulechuan/wulechuan-typescript-controllers-of-enum-dictionaries.git) |



## 简介

### 言简意赅版


### 冗长版


----


## 术语


### 术语概述

本文有少数概念较为关键。为减少乃至消除歧义，先为各概念约定术语。部分术语为本人之拙见，未必见于其他文章或材料。


### 术语表


1. #### 术语【范】

1. #### 术语【期待】

1. #### 术语【所持】

1. #### 术语【诸事之应对】与【应对】

1. #### 术语【形参准用式】与【完备式】

1. #### 术语【字典】与【字典条目】

1. #### 术语【原式】与【视式】

1. #### 术语【字典机】

1. #### 术语【字典群】与【字典群之总机】



## 用法（针对最终用户而非开发者）

本工具并不直接面对任何应用的最终用户。


## 用法（针对开发者）

### 安装

```sh
npm  i  @wulechuan/controllers-of-enum-dictionaries
```


### 编程用法概述


#### 各【部件】之关系

- 【字典群之总机】创建、包含并管理一个或若干个【字典机】。




#### 关键数据之【范】

##### 【字典条目】之范


##### 单个【字典机】之范


##### 【字典群之总机】之范




#### 针对 Vuejs 的专门处理




### 应用编程接口（外国话所谓 API）

不妨先阅读本文的《[关键数据之【范】](#关键数据之【范】)》章节。


### 【字典群之总机】之工厂函数

该函数名为 `作一字典群之总机` 。其【接口全貌】（外国话所谓 Signature）如下：

```typescript
declare module '@wulechuan/controllers-of-enum-dictionaries' {

    export declare function 作一字典群之总机 <
        范_该总机_内所谓标准字典_条目原式 = any,
        范_该总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    >(
        该总机_其This: any,

        该字典群之总机之形制要求总集:
            范_字典群之总机_形制要求总集_形参准用式<
                范_该总机_其This,
                范_该总机_内所谓标准字典_条目原式,
                范_该总机_内所有字典_条目视式_各色形态之交集
            >
    ): 范_字典群之总机<
        范_该总机_其This,
        范_该总机_内所谓标准字典_条目原式,
        范_该总机_内所有字典_条目视式_各色形态之交集
    >;

    export declare function 作一字典群之总机 <
        范_该总机_内所谓标准字典_条目原式 = any,
        范_该总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    >(
        该字典群之总机之形制要求总集?:
            范_字典群之总机_形制要求总集_形参准用式<
                范_该总机_其This,
                范_该总机_内所谓标准字典_条目原式,
                范_该总机_内所有字典_条目视式_各色形态之交集
            >
    ): 范_字典群之总机<
        范_该总机_其This,
        范_该总机_内所谓标准字典_条目原式,
        范_该总机_内所有字典_条目视式_各色形态之交集
    >;

} // declare module 语句块结束于此。
```

为便于阅读、理解和记忆，上述【接口全貌】可简写作下方形式：

```typescript
declare module '@wulechuan/controllers-of-enum-dictionaries' {
    export declare function 作一字典群之总机 <...>(
        该总机_其This: any,
        该字典群之总机之形制要求总集: 某较复杂之范
    ): 范_字典群之总机<...>

    export declare function 作一字典群之总机 <...>(
        该字典群之总机之形制要求总集?: 某较复杂之范
    ): 范_字典群之总机<...>
}
```



### 【字典机】之工厂函数

不妨暂称【字典群之总机】为【甲】，称用以构建单个【字典机】之工厂函数为【乙】。须知，【甲】会自行按需调用【乙】，以构建出【字典机】。 **故不推荐开发者手工（或者说人为）调用【乙】。**

细节从略。



### 诸常量集

```typescript
export const 成批重建字典数据时之所有可能的方案: Array<范_字典群之总机_成批重建字典数据之方案> = [
    '仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与',
    '所有允许参与数据自动构建任务的字典均参与，不论其是否已构建好数据',
    '强制一切字典参与，不论其是否已构建好数据',
]

export const 单个字典构建诸字典条目内容映射表时之各色候选方案: Array<范_单个字典构建诸字典条目内容映射表之方案> = [
    '不必构建',
    '从该字典条目之原式之集提取而得',
    '脱离该字典条目之原式之集而构建，仅一次即可',
    '脱离该字典条目之原式之集而构建，且须反复获取或构建',
]

export const 单个字典构建诸字典条目内容映射表时之默认方案: 范_单个字典构建诸字典条目内容映射表之方案 = '从该字典条目之原式之集提取而得'

export const 字典特别条目_其代表全选者_默认的呈示称谓 = '〔全选〕'
export const 字典特别条目_其代表全都不选者_默认的呈示称谓 = '〔全都不选〕'
```




-----

## 未来计划

尚无。


-----

## 许可证类型

WTFPL

> ### 注意：
>
> 我未研究过许可证的约束。因此姑且声明为 WTFPL 类型。但实际上该许可证类型可能与我采用的开源模块有冲突。


