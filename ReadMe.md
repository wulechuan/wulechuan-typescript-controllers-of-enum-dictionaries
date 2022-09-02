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

此乃吴乐川的《【字典群】之管理工具集》。本工具集对外提供唯一的主接口函数，名为 `作一字典群之总机` ，用以构建一个所谓【字典群之总机】以管理一个【字典群】。一个【字典群】可创建并管理多个【字典】。

并且，本工具集要求诸【字典】各自为其自身所有【条目】构造出统一的所谓【视式】，以便在界面代码（例如 Vuejs 的模板）中统一采用。又，构造【视式】之方法通常因【字典】而异，故须开发者提供。



### 冗长版

在开发各类应用时，开发者几乎总会遇到这样一类问题——管理各色所谓【字典表】。本工具集称【字典表】为【字典】。

一个【字典】，存放着可枚举的【字典条目】，简称【条目】。于客户端应用而言，每个【条目】至少有两个形态：鄙人所谓【原式】与【视式】。

所谓某条目的【原式】，即指该【条目】由【网络请求之响应】、【数据库】等数据来源提供的原始形式。惯常多见的、采用外国语的形式例如：

```js
{
    id: 1,
    label: '甲',
}
```

或

```js
{
    uuid: 'abcdef1234567890',
    displayName: '子',
}
```

由上述两例可见，于不同之【字典】其【条目】之所谓【原式】可能迥异。而当将这些【字典条目】逐一运用在用户界面代码（例如 Vuejs 的模板）中时，我们希望一切【字典】的一切【条目】均有统一的格式。一旦统一，即可提高界面代码的可重用性，又可减少因人为疏忽而造成的软件故障。由此，鄙人提出所谓【视式】的概念。

所谓某条目的【视式】，即是为一切【字典】的一切【条目】设计的统一标准形式。实践中，须为每一个【字典】的每一个【条目】逐一构造其标准形式，此即为该【条目】之【视式】。

> 注：在本工具集之酝酿期间，所谓【视式】，本人一度称其为【界面标准式】、【示式】。均不满意。最终定名【视式】。


又，实践中，开发者希望各【条目】之【视式】各自携带扩展的数据字段。例如，开发者可能为某些【条目】之【视式】增设`负载`字段。故，上文所谓统一标准【视式】实际上是一个【视式】应给出的**字段的最小集**。或者说，所谓统一标准【视式】是各真实【视式】的 **【最简式】**。

于本工具集，统一标准【视式】确定如下：

```typescript
export interface 范_字典条目之视式_最简式<范_字典条目之值 = any> {
    唯一标识: 范_字典条目_唯一标识;
    呈示称谓: string;
    值: 范_字典条目之值;
}
```


由所谓【原式】与【视式】之概念，自然引出了操纵某【字典】的任务之一：允许开发者给出从该【字典】任何【条目】之【原式】转换得到对应【视式】的办法（即一个回调函数）。例如：

```javascript
function 开发者为某字典给出的条目转换方案 (某条目之原式) {
    const { id, label } = 某条目之原式
    return {
        唯一标识: id,
        呈示称谓: label,
        值: id,
    }
}
```

总之，一个特定的【字典】至少有两项主要任务：

1. 存放所有【条目】。
1. 依据开发者的设定，自动将一切【条目】之【原式】转换成对应的【视式】，并将所有【视式】之总和单独存放，以便界面代码使用。

又，一个应用中涉及的【字典】往往不止一个。因此本工具集设计了所谓【字典群】，用以包含多个【字典】。操纵该【字典群】即可对这些【字典】**统而管之**。

**又，凡用以操纵单个【字典】之工具，我称之为【字典机】；凡用以操纵【字典群】之工具，我称之为【字典群之总机】，简称【总机】。**

本工具集提供一个主接口，用以创建【总机】。该【总机】自带某些行为，用以（成批）创建和管理其所辖诸【字典机】。



----


## 术语


### 术语概述

本文有少数概念较为关键。为减少乃至消除歧义，先为各概念约定术语。部分术语为本人之拙见，未必见于其他文章或材料。


### 术语表


1. #### 术语【范】

    所谓【范】，对应 TypeScript 或 JSDocs 概念中的 type 。一般译为【类型】，但本工具集及相关文档坚持称【范】。例如：

    - TypeScript

        ```typescript
        export type 范_字典_唯一标识 = string;
        export type 范_字典条目_唯一标识 = string | number;

        export interface 范_字典条目之视式_最简式<范_字典条目之值 = any> {
            唯一标识: 范_字典条目_唯一标识;
            呈示称谓: string;
            值: 范_字典条目之值;
        }
        ```

    - JSDocs

        ```javascript
        /**
         * @typedef {string} 范_字典_唯一标识
         */

        /**
         * @typedef {string | number} 范_字典条目_唯一标识
         */

        /**
         * @typedef {object} 范_字典条目之视式_最简式
         * @property {范_字典_唯一标识} 唯一标识
         * @property {string} 呈示称谓
         * @property {any} 值
         */
        ```


1. #### 术语【期待】

    本工具集及其配套文档将所谓 `Promise` 译为【`期待`】，而非【承诺】。

    又，【期待】可以【`落实`】（外国话是 `resolved`）。

    又，【期待】可以【`落空`】（外国话是 `rejected`）。

    又，【期待】【`落实`】或【`落空`】统称为【`落定`】（外国话是 `settled`）。

    例：

    ```typescript
    const 期待_某事落定: Promise<void> = new Promise(function (落实之, 落空之) {
        setTimeout(落实之, 1234)
    })
    ```


1. #### 术语【`所持`】

    在传统的编程劳动中，习惯采用外国语 `data` 一词表达“数据”之含义。偶见采用其单数形式 `datum` 。本工具集及其配套文档则采用【`所持`】一词代替它们。该词既用于本文描述，也用于各属性、变量之命名。

    例：

    ```javascript
    const 某字典 = {
        所持: {
            字典特别条目_其代表全选者: null,
            字典特别条目_其代表全都不选者: null,
            该字典诸条目之原式_其列表: [],
            该字典诸条目之视式: {
                其列表: [],
                其哈希表: {},
            },
            // ……其它【所持】的属性从略。
        },
        // …… 其它属性从略。
    }
    ```

1. #### 术语【诸事之应对】与【应对】

    在传统的编程劳动中，习惯采用外国语 `event handler` 这一短语来表达“事件处理程序”、“事件处理函数”之类的含义。本工具集及其配套文档则采用【`诸事之应对`】和【`应对`】两个汉语词（或汉语短语）来代替它们。

    此二者既用于本文描述，也用于各属性、变量之命名。**其中，【`诸事之应对`】用于外界向某函数传入的实参之中，【`应对`】用于某“实体”对象中。**

    > 注：采纳【`应对`】一词，一来是因为其短于【`事件处理程序`】一词，二来是因为“应对”是动词，其后带出具体的程序名称，更贴近汉语习惯。例如：`应对.该字典每次数据重建后`。


1. #### 术语【范】之【形参准用式】与【完备式】

    当采用某工厂函数（称【甲】）构造某对象（称【乙】）时，【甲】往往接受至少一个实参，称【丙】。

    多数情形下，【乙】、【丙】看似结构高度相似乃至完全相同，但往往【乙】要求其大部分字段始终存在，而【丙】允许若干字段（乃至所有字段）缺省。故在借助 TypeScript 语言定义【乙】、【丙】时，二者之【范】是有区别的。

    实践中，常见的案例类似如下情形：

    ```typescript
    type 范_乙 = {
        子: number;
        丑: string;
        寅: boolean;
        卯: () => void;
    };

    type 范_丙 = Partial<范_乙>;
    ```

    总之，用于函数参数的【范】与用于最终构建结果的【范】不完全等同。甚至可能迥异。但从功能、用途等层面主观理解，二者又颇有联系（或则说渊源），开发者为二者命名时也可能倾向于采用近同之字眼。由是，鄙人主张，二者之【范】之命名主体采用完全相同的字眼或短语，仅补以后缀作为区别。其中：

    -   凡用于某函数参数者，称为【形参准用式】，其【范】之名称后缀为 `_形参准用式`。
    -   凡用于产出的所谓“实用”数据者，称为【完备式】，其【范】之名称后缀为 `_完备式`。

    据此命名规则，上例可改写如下：

    ```typescript
    type 范_某物_完备式 = {
        子: number;
        丑: string;
        寅: boolean;
        卯: () => void;
    };

    type 范_某物_形参准用式 = Partial<范_某物_完备式>;
    ```


1. #### 术语【形制要求】、【形制要求集】与【形制要求总集】

    在传统的编程劳动中，习惯采用外国语 `option` 或其复数 `options` 、或者 `config` 、 `configuration` 、 `settings` 等词来表达“可配置项”、“选项”之类的含义。本工具集及其配套文档则采用【形制要求】一词表述它们。并且，在为相关常量、变量命名时，采用【`形制要求集`】或【`形制要求总集`】这两个汉语短语来代替它们。

    一般的，如果某【形制要求】之结构较为简单，鄙人倾向于采用“形制要求集”一词。如果某【形制要求】之结构较复杂，类似 eslint 、 vue.config 等，鄙人则会采用“形制要求总集”一词。


1. #### 术语【字典】与【字典条目】

    见前文《[本工具之简介·冗长版](#冗长版)》。

1. #### 术语【原式】与【视式】

    见前文《[本工具之简介·冗长版](#冗长版)》。

1. #### 术语【字典机】

    见前文《[本工具之简介·冗长版](#冗长版)》。

1. #### 术语【字典群】与【字典群之总机】

    见前文《[本工具之简介·冗长版](#冗长版)》。



## 用法（针对最终用户而非开发者）

本工具集仅为诸应用提供“幕后”之技术或功能，并不直接面对任何应用的最终用户。


## 用法（针对开发者）

### 安装

```sh
npm  i  @wulechuan/controllers-of-enum-dictionaries
```


### 编程用法概述


#### 各【部件】之关系

-   本工具对外提供的唯一接口乃一工厂函数。每调用一次，创建一个【字典群之总机】。

    > 实际上，本工具也对外提供了用以构建单个【字典机】的工厂函数。但不建议人为调用它。它应由某【总机】自动按需调用。

-   任何【字典群之总机】包含并管理零个、一个或若干个【字典机】。并可创建【字典机】。一般的，【字典机】不单独存在，而是隶属于某【总机】。

-   任何【字典机】包含和管理唯一的【字典】。




#### 关键数据之【范】

1. ##### 【字典条目】之范

    - 其【原式】

        凡【原式】者，十有八九由外界给出，且形式五花八门。故本工具集对【原式】无有特定假设或规定。

    - 其【视式】

        ```typescript
        export type 范_字典条目_唯一标识 = string | number;

        export interface 范_字典条目之视式_最简式<范_字典条目之值 = any> {
            唯一标识: 范_字典条目_唯一标识;
            呈示称谓: string;
            值: 范_字典条目之值;
        }
        ```


1. ##### 单个【字典机】之范

    ```typescript
    export type 范_字典机系统_其This之默认式 = any;

    export type 范_字典机<
        范_该字典机_其This = 范_字典机系统_其This之默认式,
        范_该字典_条目原式 = any,
        范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > = {
        该字典之唯一标识: string;

        所持: {
            字典特别条目_其代表全选者:
                null | {
                    应位于候选列表之该处: '首部' | '尾部';
                    字典条目之视式: 范_该字典_条目视式;
                    当正常候选项个数为零时仍采用本特别项: boolean;
                };

            字典特别条目_其代表全都不选者:
                null | {
                    应位于候选列表之该处: '首部' | '尾部';
                    字典条目之视式: 范_该字典_条目视式;
                };

            该字典诸条目之原式_其列表:
                null | Array<范_该字典_条目原式>;

            该字典诸条目之视式: {
                其列表: Array<范_该字典_条目视式>;
                其哈希表: Record<string, 范_该字典_条目视式>;
            };

            字典条目诸内容映射表之集: {
                从呈示称谓至值: Record<string, 范_该字典_条目之值>;
                从值至呈示称谓: { [条目之值对应之文本: string]: string; };
            };
        };

        态: {
            _已销毁: boolean;

            该字典当下所持的数据系由某次构建而得: boolean;
            该字典诸字典条目内容映射表业已构建完毕: boolean;
            该字典当下正在构建数据: boolean;
            期待_该字典最末一次数据构建任务已落定: Promise<void>;
        };

        为: {
            清空数据: () => void;
            重建数据: (...参数表_用以获取字典诸条目之原式: any[]) => Promise<void>;
            凭某条目之值求其呈示称谓: (所涉条目之值?: any) => string | null | undefined;
            自毁: () => void;
        } & ThisType<范_该字典机_其This>;

        形制要求杂集: {
            该字典机的调试信息之详尽等级: number;

            该字典构建诸字典条目内容映射表之方案: 范_单个字典构建诸字典条目内容映射表之方案;

            /**
             * 有些【字典】之【字典条目】依赖于其它变量，须临时反复构建。
            * 且此种【字典】往往不必在模块加载初始时构建。
            *
            * 例如，假设有【中标企业】和【已参选的投标企业】两种字段。
            * 其中，【中标企业】须在【已参选的投标企业】中选择。
            * 故【中标企业】对应的候选列表【字典】应根据【已参选企业】这一字段的值来临时构建。
            */
            该字典在默认情形下不参与字典群总机发起的数据重建任务: boolean;

            /**
             * 该所谓 “逆向” 哈希表用途不广，不及列表形式。故默认不构建该哈希表，以节省计算。
            * 但为了简化 “防卫性” 代码，即便不构建该哈希表，本工具仍令该哈希表之取值为 {} ，而非 null 。
            */
            应构建字典条目之视式之哈希表: boolean;
        };

        应对: {
            构建该字典所有条目之原式: (
                this: 范_该字典机_其This,

                该字典所属字典群之总机:
                    范_字典群之总机<
                        范_该字典机_其This,
                        any,
                        any
                    >,

                该字典机:
                    范_字典机<
                        范_该字典机_其This,
                        范_该字典_条目原式,
                        范_该字典_条目视式,
                    >,

                参数表_用以获取字典诸条目之原式: any[]
            ) => Promise<Array<范_该字典_条目原式>>;

            凭某条目之原式构建其视式: (
                this: 范_该字典机_其This,
                该字典_某条目之原式: 范_该字典_条目原式
            ) => 范_该字典_条目视式;

            /** 该项可视具体条件而省略。 */
            脱离字典条目原式之集构建诸字典条目内容映射表?: (
                this: 范_该字典机_其This,
            ) => Promise<范_字典条目诸内容映射表之集<范_该字典_条目视式['值']>>;

            /** 该项可视具体条件而省略。 */
            凭字典条目原式之集构建诸字典条目内容映射表?: (
                this: 范_该字典机_其This,
                该字典_诸条目原式_其列表: Array<范_该字典_条目原式>
            ) => Promise<范_字典条目诸内容映射表之集<范_该字典_条目视式['值']>>;

            /** 该项可省略。 */
            该字典每次数据重建后?: (
                this: 范_该字典机_其This,

                该字典所属字典群之总机:
                    范_字典群之总机<
                        范_该字典机_其This,
                        any,
                        any
                    >,

                该字典机:
                    范_字典机<
                        范_该字典机_其This,
                        范_该字典_条目原式,
                        范_该字典_条目视式,
                    >,
            ) => void;
        } & ThisType<范_该字典机_其This>;
    };
    ```


1. ##### 【字典群之总机】之范

    ```typescript
    export type 范_字典机系统_其This之默认式 = any;

    export type 范_字典群之总机<
        范_该总机_其This = 范_字典机系统_其This之默认式,
        范_该总机_内所谓标准字典_条目原式 = any,
        范_该总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>,
    > = {
        该字典群之称谓: string;

        所持: {
            字典机群: {
                其列表:
                    Array<
                        范_字典机<
                            范_该总机_其This,
                            any,
                            范_该总机_内所有字典_条目视式_各色形态之交集
                        >
                    >;

                其哈希表:
                    Record<
                        string,

                        范_字典机<
                            范_该总机_其This,
                            any,
                            范_该总机_内所有字典_条目视式_各色形态之交集
                        >
                    >;
            };
        };

        态: {
            当下仍有字典机在构建数据:
                boolean;

            期待_迄今所有批次的字典机之数据重建任务均已完成:
                Promise<void>;
        };

        为: {

            追加一批字典: <
                范_该批字典_条目原式_可能的默认形态 = 范_该总机_内所谓标准字典_条目原式
            >(
                一批字典机之形制要求总集之列表?: Array<
                    范_字典机_形制要求总集_形参准用式<
                        范_该总机_其This,
                        范_该批字典_条目原式_可能的默认形态,
                        范_该总机_内所有字典_条目视式_各色形态之交集
                    >
                >
            ) => Promise<void>;

            删除一批字典: (
                欲删除之诸字典之唯一标识之列表?: 范_字典_唯一标识[]
            ) => void;

            取某字典机: <
                范_该字典_条目原式 = 范_该总机_内所谓标准字典_条目原式,
                范_该字典_条目视式 extends 范_该总机_内所有字典_条目视式_各色形态之交集 = 范_该总机_内所有字典_条目视式_各色形态之交集
            >(
                欲索取之字典_其唯一标识?: 范_字典_唯一标识
            ) => (null | 范_字典机<范_该总机_其This, 范_该字典_条目原式, 范_该字典_条目视式>);

            取某字典诸条目之视式_其列表: <
                范_该字典_条目原式 = 范_该总机_内所谓标准字典_条目原式,
                范_该字典_条目视式 extends 范_该总机_内所有字典_条目视式_各色形态之交集 = 范_该总机_内所有字典_条目视式_各色形态之交集
            >(
                所涉字典_其唯一标识?: 范_字典_唯一标识
            ) => 范_字典诸条目之视式_其列表<范_该字典_条目视式>;

            取某字典诸条目之视式_其哈希表: <
                范_该字典_条目原式 = 范_该总机_内所谓标准字典_条目原式,
                范_该字典_条目视式 extends 范_该总机_内所有字典_条目视式_各色形态之交集 = 范_该总机_内所有字典_条目视式_各色形态之交集
            >(
                所涉字典_其唯一标识?: 范_字典_唯一标识
            ) => 范_字典诸条目之视式_其哈希表<范_该字典_条目视式>;

            令所有字典按需重建数据: (
                本次执行须筛选参与之诸字典时应采取哪种筛选方案?: 范_字典群之总机_成批重建字典数据之方案
            ) => Promise<void>;

        } & ThisType<范_该总机_其This>;

        形制要求杂集: {
            该总机的调试信息之详尽等级: number;
        };

        应对:
            {

                /** 该项可省略。 */
                内任何字典_某次数据重建后_统一做法?: (
                    this: 范_该总机_其This,

                    该字典群之总机: 范_字典群之总机<
                        范_该总机_其This,
                        范_该总机_所涉所谓标准字典_条目原式,
                        范_该总机_所涉所谓标准字典_条目之值_各色形态之并集
                    >,

                    所涉字典机: 范_字典机<
                        范_该总机_其This,
                        范_该总机_所涉所谓标准字典_条目原式,
                        范_该总机_所涉所谓标准字典_条目之值_各色形态之并集
                    >
                ) => void;

                /** 该项可省略。 */
                内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法?: (
                    this: 范_该总机_其This,
                    所涉字典_诸条目原式_其列表: Array<范_该总机_所涉所谓标准字典_条目原式>
                ) => Promise<
                    范_字典条目诸内容映射表之集<
                        范_该总机_所涉所谓标准字典_条目之值_各色形态之并集
                    >
                >;

                /** 该项可省略。 */
                内任何所谓标准字典_凭某条目之原式构建其视式_默认做法?: (
                    this: 范_该总机_其This,
                    所涉字典_某条目之原式: 范_该总机_所涉所谓标准字典_条目原式
                ) => 范_该总机_内所有字典_条目视式_各色形态之交集;

            } & ThisType<范_该总机_其This>;
    };
    ```


#### 针对 Vuejs 的专门处理

在【字典群之总机】内部，当操作某列表（Array）、散列表（Object）时，有少量用以迁就 Vuejs 的代码。具体如下：

-   当【工厂函数】发现其 `this` 对象存在，且该 `this` 对象配有 `$set` 方法时，【工厂函数】所构建的【字典群之总机】在操作某列表、散列表时，会尽量采用 `$set` 方法。

-   当【工厂函数】之 `this` 对象不存在，或该 `this` 对象不具备 `$set` 方法时，【工厂函数】所构建的【字典群之总机】会直接操作操作诸列表、散列表。




### 应用编程接口（外国话所谓 API）

不妨先阅读本文的《[关键数据之【范】](#关键数据之范)》章节。


1. #### 【字典群之总机】之工厂函数

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



1. #### 【字典机】之工厂函数

    不妨暂称【字典群之总机】为【甲】，称用以构建单个【字典机】之工厂函数为【乙】。须知，【甲】会自行按需调用【乙】，以构建出【字典机】。 **故不推荐开发者手工（或者说人为）调用【乙】。**

    细节从略。



1. #### 诸常量集

    ```typescript
    export const 某字典群之总机_成批重建字典数据之各色方案: Array<范_字典群之总机_成批重建字典数据之方案> = [
        '仅限那些允许参与数据自动构建任务且尚无构建好之数据的字典参与',
        '所有允许参与数据自动构建任务的字典均参与，不论其是否已构建好数据',
        '强制一切字典参与，不论其是否已构建好数据',
    ]

    export const 单个字典_构建诸条目内容映射表之各色方案: Array<范_单个字典构建诸字典条目内容映射表之方案> = [
        '不必构建',
        '从该字典之诸条目原式之集提取而得',
        '脱离该字典之诸条目原式之集而构建，仅一次即可',
        '脱离该字典之诸条目原式之集而构建，且须反复构建',
    ]

    export const 单个字典_构建诸条目内容映射表之默认方案: 范_单个字典构建诸字典条目内容映射表之方案 = '从该字典之诸条目原式之集提取而得'

    export const 字典特别条目_其代表全选者_默认的呈示称谓 = '〔全选〕'
    export const 字典特别条目_其代表全都不选者_默认的呈示称谓 = '〔全都不选〕'
    ```



### 应用示范集

1.  #### 示范1

    为某 Vuejs 部件构建一个【字典群之总机】。

    -   采用 TypeScript 语言之写法。

        ```typescript
        import { Vue, Component } from 'vue-property-decorator'

        import {
            作一字典群之总机,
        } from '@wulechuan/controllers-of-enum-dictionaries'

        export type 范_本示范应用中一切字典之字典条目之原式 = {
            /** 故意采用外国字，以示范在当今常见的项目中如何采用本工具（即指字典群总机）。 */
            id: string;

            /** 故意采用外国字，以示范在当今常见的项目中如何采用本工具（即指字典群总机）。 */
            label: string;
        };

        export type 范_本示范应用中一切字典之字典条目之视式 = 范_字典条目之视式_最简式<
            范_本示范应用中一切字典之字典条目之原式['id']
        >;



        @Component({})
        export default class Vue部件甲 extends Vue {
            public 字典总机: null | 范_本应用中一切字典群之总机<Page示范页1> = null

            private mounted (): void {
                this.字典总机 = 作一字典群之总机<范_本示范应用中一切字典之字典条目之原式, 范_本示范应用中一切字典之字典条目之视式>(
                    this,

                    {
                        该字典群之称谓: '我的第一个【字典群】',

                        该总机的调试信息之详尽等级: 2,

                        第一批字典机形制要求总集_其列表: [
                            {
                                该字典之唯一标识: '字典甲',

                                诸事之应对: {
                                    构建该字典所有条目之原式 () {
                                        return new Promise(落实之 => setTimeout(落实之, 2358)).then(() => {
                                            const 数据列表: Array<范_本示范应用中一切字典之字典条目之原式> = [
                                                '九章算术',
                                                '诗经',
                                                '尚书',
                                                '楚辞',
                                                '本草纲目',
                                                '孙子兵法',
                                                '史记',
                                                '传习录',
                                            ].map((名典之名称, 其列表编号) => {
                                                const 名典字典条目之原式: 范_本示范应用中一切字典之字典条目之原式 = {
                                                    id: `${其列表编号 + 1}`,
                                                    label: 名典之名称,
                                                }

                                                return 名典字典条目之原式
                                            })

                                            return 数据列表
                                        })
                                    }
                                },
                            },
                        ],
                    }
                )
            }
        }
        ```

1.  #### 完整示范

    见本工具集源代码仓库中随附的示范应用 2 则：

    1.  `〔仓库根文件夹〕/文档集/示范应用集/示范应用-1/采用-javascript-编写`
    1.  `〔仓库根文件夹〕/文档集/示范应用集/示范应用-1/采用-typescript-编写`


-----


## 未来计划

尚无。


-----

## 许可证类型

WTFPL

> ### 注意：
>
> 我未研究过许可证的约束。因此姑且声明为 WTFPL 类型。但实际上该许可证类型可能与我采用的开源模块有冲突。


