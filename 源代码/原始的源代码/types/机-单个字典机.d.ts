/**
 * ═══════════════════════════════════════════════════════════════════════════════
 *           范之集： 【字典机】
 * ═══════════════════════════════════════════════════════════════════════════════
 */

/** */

import type {
    范_字典机系统_其This之默认式,
} from './共'

import type {
    范_字典条目之视式_最简式,
    范_字典_字典特别条目_其代表全选者_形参准用式,
    范_字典_字典特别条目_其代表全选者_完备式,
    范_字典_字典特别条目_其代表全都不选者_完备式,
    范_字典_字典特别条目_其代表全都不选者_形参准用式,
    范_字典条目诸内容映射表之集,
    范_字典诸条目之视式_其列表,
    范_字典诸条目之视式_其哈希表,
} from './料-字典'





declare module '@wulechuan/controllers-of-enum-dictionaries' {

    /**
     * 绑定 this 。
     *
     * 1)  外界可以（借助【字典群之总机】的工厂函数）向【字典机】明确给出
     *     一个作为 this 的对象。
     *
     * 2)  本工具集产生的【字典机】中的各【方法函数】均会被自动绑定该 this 。
     *
     * 如果本工具集用于某采用 Vuejs 框架的研发项目中，此举恐怕有所裨益。
     *
     * 以 `字典机.应对.某事件处理程序` 为例，
     * 如果外界传入该事件处理程序时没有另行、先行绑定 this ，
     * 则本工具会在幕后将自动为 `字典机.应对.某事件处理程序` 绑定给定的 this 。
     *
     * ────────────────────────────────
     *
     * 在编码设计过程中，我遇到一种问题：
     *
     * TypeScript 在作类型检查时，会“固执”的认为
     * 调用 `某事件处理程序` 时的 this 理应为 `字典机.应对`，
     * 哪怕采用了 `& ThisType<范_某特定This>` 这一写法也无济于事。
     *
     * 为迁就 TypeScript 的类型检查机制，
     * 不得不令【完备式】的 `应对` 中的各【方法函数】“假装”不会绑定任何 this 。
     * 此举实际上是“欺骗” TypeScript 的类型检查机。
     * 同时，令【形参准用式】的 `诸事件之应对` 中的各【方法函数】配有绑定的 this 。
     *
     * 另一做法我也尝试过，可行，但最终放弃。
     *
     * 该被放弃之做法如下：
     *
     * 在定义诸【范】时，不少【范】同时具备【完备式】、【形参准用式】两种变体。
     * 并且两种变体中的各【方法函数】均配有绑定 this 。
     * 又，在本工具集内部调用某【方法函数】时，总是明确采用 `.call(this)` 的形式。
     *
     * 放弃上述方案的原因是，已知 Vuejs 会绑死 this 的情况下，仍在调用时采用 `call` 方式，
     * 令我觉得多此一举，我不喜欢这样做。
     */





    /**
     * 此为 `范_单个字典构建诸字典条目内容映射表之方案` 。
     *
     * ────────────────────────────────
     *
     * 1.  `'不必构建'`
     *
     *     我假想有些【字典】虽然其【条目】之数量有限，但【条目】之【值】之可能性则为无限。
     *     故而设计该种方案。
     *
     *     例如，某字典表为某种【款项】之列表。于这样的字典表，
     *     其各项之【界面措辞】须借助所谓【格式化程序】求得。
     *     所谓格式化，比如将数字按英美制（所谓“国际制”）的三位一组分隔。
     *     又如将数字转换为汉字形式等。
     *     于此种情形，我认为没必要为该种字典构建【字典条目内容映射表】，因实用价值不高。
     *
     *     ────────────────────────────────
     *
     * 2.  `'从该字典之诸条目原式之集提取而得'`
     *
     *     较多的服务端程序员提供的字典【字典条目之原式】会同时包含【值】与【自然语言称谓】。
     *     典型的如：`{ id, name }` 或 `{ value, label }` 等。
     *
     *     于此种情形，【字典条目内容映射表】应借助该【字典条目之原式】表构建而得。
     *     且于【字典条目之视式】表而言，这些【字典条目内容映射表】无用途，即为备用。
     *
     *     ────────────────────────────────
     *
     * 3.  `'脱离该字典之诸条目原式之集而构建，仅一次即可'`
     *
     *     有些简单的字典，客户端会“写死”一个或一对哈希表，
     *     用以映射【值 ~ 界面措辞】，而不是通过 XHR 从服务端获取。
     *     故而设计该种方案。
     *
     *     于此种情形，服务端给出的【字典条目之原式】不应该提供【自然语言称谓】字段，
     *     否则该字典的诸【字典条目内容映射表】之构建方案没必要配置为该种方案。
     *     且【字典条目内容映射表】应当参与【字典条目之视式】表的构建过程。
     *     即，【字典条目之视式】依赖【字典条目内容映射表】。
     *
     *     ────────────────────────────────
     *
     * 4.  `'脱离该字典之诸条目原式之集而构建，且须反复构建'`
     *
     *     此为假想的情形。暂无例证。即，此为预备值，暂不推荐采用。
     */
    export type 范_单个字典构建诸字典条目内容映射表之方案 = (
        | '不必构建'
        | '从该字典之诸条目原式之集提取而得'
        | '脱离该字典之诸条目原式之集而构建，仅一次即可'
        | '脱离该字典之诸条目原式之集而构建，且须反复构建'
    );



    export type 范_字典机_范之零件_形制要求杂集_完备式<

        /**
         * 于本【范】之定义，【范_该字典机_其This】参数暂时无用。
         * 但为了令各【泛范】形式统一，也为了便于未来扩展该【范】，
         * 此处故意保留该【泛范参数】。
         */
        范_该字典机_其This = 范_字典机系统_其This之默认式
    > = {
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



    export type 范_字典机_范之零件_形制要求杂集_形参准用式<

        /**
         * 于本【范】之定义，【范_该字典机_其This】参数暂时无用。
         * 但为了令各【泛范】形式统一，也为了便于未来扩展该【范】，
         * 此处故意保留该【泛范参数】。
         */
        范_该字典机_其This = 范_字典机系统_其This之默认式
    > = Partial<
        Omit<
            范_字典机_范之零件_形制要求杂集_完备式<
                范_该字典机_其This
            >,

            '该字典机的调试信息之详尽等级'
        >
    >;



    export type 范_字典机_范之零件_所持_完备式<

        /**
         * 于本【范】之定义，【范_该字典机_其This】参数暂时无用。
         * 但为了令各【泛范】形式统一，也为了便于未来扩展该【范】，
         * 此处故意保留该【泛范参数】。
         */
        范_该字典机_其This = 范_字典机系统_其This之默认式,

        /**
         * 该参数（即【范_该字典_条目原式】）暂未用到，故设为 never 。
         */
        范_该字典_条目原式 = never,

        范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > = {
        字典特别条目_其代表全选者:
            null | 范_字典_字典特别条目_其代表全选者_完备式<范_该字典_条目视式>;

        字典特别条目_其代表全都不选者:
            null | 范_字典_字典特别条目_其代表全都不选者_完备式<范_该字典_条目视式>;
    };



    export type 范_字典机_范之零件_所持_形参准用式<

        /**
         * 于本【范】之定义，【范_该字典机_其This】参数暂时无用。
         * 但为了令各【泛范】形式统一，也为了便于未来扩展该【范】，
         * 此处故意保留该【泛范参数】。
         */
        范_该字典机_其This = 范_字典机系统_其This之默认式,

        /**
         * 该参数（即【范_该字典_条目原式】）暂未用到，故设为 never 。
         */
        范_该字典_条目原式 = never,

        范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > = {
        字典特别条目_其代表全选者?:
            null | 范_字典_字典特别条目_其代表全选者_形参准用式<范_该字典_条目视式>;

        字典特别条目_其代表全都不选者?:
            null | 范_字典_字典特别条目_其代表全都不选者_形参准用式<范_该字典_条目视式>;
    };



    export type 范_字典机_范之零件_诸事之应对_完备式<
        范_该字典机_其This = 范_字典机系统_其This之默认式,
        范_该字典_条目原式 = any,
        范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > = {
        构建或获取该字典所有条目之原式: (
            this: 范_该字典机_其This,

            所属字典群之总机:
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

            该字典机_重建数据_获得的原始参数表: any[]
        ) => Promise<Array<范_该字典_条目原式>>;

        凭某条目之原式构建其视式: (
            this: 范_该字典机_其This,
            该字典_某条目之原式: 范_该字典_条目原式
        ) => 范_该字典_条目视式;

        /** 即便是在该【范】的所谓【完备式】中，该项亦可视具体条件而省略。 */
        脱离字典条目原式之集构建诸字典条目内容映射表?: (
            this: 范_该字典机_其This,
        ) => Promise<范_字典条目诸内容映射表之集<范_该字典_条目视式['值']>>;

        /** 即便是在该【范】的所谓【完备式】中，该项亦可视具体条件而省略。 */
        凭字典条目原式之集构建诸字典条目内容映射表?: (
            this: 范_该字典机_其This,
            该字典_诸条目原式_其列表: Array<范_该字典_条目原式>
        ) => Promise<范_字典条目诸内容映射表之集<范_该字典_条目视式['值']>>;

        /** 即便是在该【范】的所谓【完备式】中，该项亦可省略。 */
        该字典每次数据重建后?: (
            this: 范_该字典机_其This,

            所属字典群之总机:
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
    };



    export type 范_字典机_范之零件_诸事之应对_形参准用式<
        范_该字典机_其This = 范_字典机系统_其This之默认式,
        范_该字典_条目原式 = any,
        范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > = Partial<
        范_字典机_范之零件_诸事之应对_完备式<
            范_该字典机_其This,
            范_该字典_条目原式,
            范_该字典_条目视式
        >
    >;



    export type 范_某字典群_内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法<
        范_所涉总机_其This = 范_字典机系统_其This之默认式,
        范_所涉总机_所涉所谓标准字典_条目原式 = any,
        范_所涉总机_所涉所谓标准字典_条目之值_各色形态之并集 = any,
    > = (
        this: 范_所涉总机_其This,
        所涉字典_诸条目原式_其列表: Array<范_所涉总机_所涉所谓标准字典_条目原式>
    ) => Promise<
        范_字典条目诸内容映射表之集<
            范_所涉总机_所涉所谓标准字典_条目之值_各色形态之并集
        >
    >;



    export type 范_某字典群_内任何所谓标准字典_凭某条目之原式构建其视式_默认做法<
        范_所涉总机_其This = 范_字典机系统_其This之默认式,
        范_所涉总机_所涉所谓标准字典_条目原式 = any,
        范_所涉总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > = (
        this: 范_所涉总机_其This,
        所涉字典_某条目之原式: 范_所涉总机_所涉所谓标准字典_条目原式
    ) => 范_所涉总机_内所有字典_条目视式_各色形态之交集;



    export type 范_字典机_形制要求总集_形参准用式<
        范_该字典机_其This = 范_字典机系统_其This之默认式,
        范_该字典_条目原式 = any,
        范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>,
    > = {
        该字典之唯一标识: string;

        该字典机的调试信息之详尽等级?: number;

        形制要求杂集?:
            范_字典机_范之零件_形制要求杂集_形参准用式<
                范_该字典机_其This
            >;

        所持?:
            范_字典机_范之零件_所持_形参准用式<
                范_该字典机_其This,
                范_该字典_条目原式,
                范_该字典_条目视式
            >;

        诸事之应对?:
            范_字典机_范之零件_诸事之应对_形参准用式<
                范_该字典机_其This,
                范_该字典_条目原式,
                范_该字典_条目视式
            >;
    };



    export type 范_字典机<
        范_该字典机_其This = 范_字典机系统_其This之默认式,
        范_该字典_条目原式 = any,
        范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > = {
        该字典之唯一标识: string;

        所持:
            范_字典机_范之零件_所持_完备式<
                范_该字典机_其This,
                范_该字典_条目原式,
                范_该字典_条目视式
            > & {
                该字典诸条目之原式_其列表:
                    null | Array<范_该字典_条目原式>;

                该字典诸条目之视式: {
                    其列表: 范_字典诸条目之视式_其列表<范_该字典_条目视式>;
                    其哈希表: 范_字典诸条目之视式_其哈希表<范_该字典_条目视式>;
                };

                字典条目诸内容映射表之集: 范_字典条目诸内容映射表之集<范_该字典_条目视式['值']>;
            };

        态: {
            _已销毁: boolean;

            当下的数据系某次成功构建而得的: boolean;
            该字典诸字典条目内容映射表业已构建完毕: boolean;
            当下正在构建数据: boolean;
            期待_最末一次构建数据之任务已完毕: Promise<void>;
        };

        为: {
            清空数据: () => void;
            重建数据: (...参数表_用以获取字典诸条目之原式: any[]) => Promise<void>;
            凭某条目之值求其呈示称谓: (所涉条目之值?: any) => string | null | undefined;
            自毁: () => void;
        } & ThisType<范_该字典机_其This>;

        形制要求杂集:
            范_字典机_范之零件_形制要求杂集_完备式<
                范_该字典机_其This
            >;

        应对:
            范_字典机_范之零件_诸事之应对_完备式<
                范_该字典机_其This,
                范_该字典_条目原式,
                范_该字典_条目视式
            > & ThisType<范_该字典机_其This>;
    };





    export declare const 单个字典构建诸字典条目内容映射表时之各色候选方案: Array<范_单个字典构建诸字典条目内容映射表之方案>;
    export declare const 单个字典构建诸字典条目内容映射表时之默认方案: 范_单个字典构建诸字典条目内容映射表之方案;
    export declare const 字典特别条目_其代表全选者_默认的呈示称谓 = '〔全选〕';
    export declare const 字典特别条目_其代表全都不选者_默认的呈示称谓 = '〔全都不选〕';
    export declare function 作一字典机 <
        范_该字典机_其This,
        范_所属总机_内所谓标准字典_条目原式 = any,
        范_所属总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>,
        范_该字典_条目原式 = 范_所属总机_内所谓标准字典_条目原式,
        范_该字典_条目视式 extends 范_所属总机_内所有字典_条目视式_各色形态之交集 = 范_所属总机_内所有字典_条目视式_各色形态之交集,
    >(
        this: 范_该字典机_其This,

        所属字典群之总机?:
            范_字典群之总机<
                范_该字典机_其This,
                范_所属总机_内所谓标准字典_条目原式,
                范_所属总机_内所有字典_条目视式_各色形态之交集
            >,

        该字典机之形制要求总集?:
            范_字典机_形制要求总集_形参准用式<
                范_该字典机_其This,
                范_该字典_条目原式,
                范_该字典_条目视式
            >
    ): (
        null | 范_字典机<范_该字典机_其This, 范_该字典_条目原式, 范_该字典_条目视式>
    );

}
