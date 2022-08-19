/**
 * ═══════════════════════════════════════════════════════════════════════════════
 *           范之集： 【字典群之总机】
 * ═══════════════════════════════════════════════════════════════════════════════
 */

/** */

import type {
    范_字典机系统_其This之默认式,
} from './共'

import type {
    范_字典_唯一标识,
    范_字典条目之视式_最简式,
    范_字典诸条目之视式_其列表,
    范_字典诸条目之视式_其哈希表,
} from './料-字典'

import type {
    范_字典机,
    范_字典机_形制要求总集_形参准用式,

    范_某字典群_内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法,
    范_某字典群_内任何所谓标准字典_凭某条目之原式构建其视式_默认做法,
} from './机-单个字典机'





declare module '@wulechuan/controllers-of-enum-dictionaries' {

    /**
     * 所谓【标准字典】与【特异字典】
     *
     * ────────────────────────────────
     *
     * 在某【字典群之总机】（下称【总机】）中，
     * 若诸【字典】之数据结构高度相似甚至完全相同，
     * 不妨称这些【字典】为所谓【标准字典】。
     *
     * 相对的，可能存在某些【字典】之数据结构与众不同。
     * 不妨称这些【字典】为所谓【特异字典】。
     *
     * 由上述不难料想，本 npm 工具集允许单个【总机】内同时
     * 管理零个或任意多个【标准字典】、零个或任意多个【特异字典】。
     *
     * ────────────────────────────────
     *
     * 又，倘若所谓【标准字典】有且仅有 1 个，同时还有其它所谓【特异字典】，
     * 那么，从实用角度来看，该所谓【标准字典】实则【特异字典】。
     *
     * ────────────────────────────────
     *
     * 又，目前，在 JavaScript 层面（而非 TypeScript 层面）
     * 没有任何字段用以区别所谓【标准字典】和【特异字典】。
     * 二者完全由开发者内心界定。
     *
     * ────────────────────────────────
     *
     * 又，倘若某【总机】中确实存在所谓【标准字典】，
     * 则这类【字典】的【条目原式】必定存在，且开发者应该明确给出。
     * 换言之，该【总机】的【范_该总机_所谓标准字典_条目原式】不会是 never ，
     * 且开发者在实际代码中理应给出该【范】。
     *
     * 否则，该【总机】的【范_该总机_所谓标准字典_条目原式】应作 never 。
     */





    /**
     * 如果本工具集用于某采用 Vuejs 框架的研发项目中，
     * 则本工具集产生的【字典群之总机】中的各【方法函数】均会被 Vuejs
     * 自动绑定 this 。
     * 以 `字典群之总机.应对.某事件处理程序` 为例，
     * 该事件处理程序的 this 将有 Vuejs 决定。
     * 但 TypeScript 在作类型检查时，会“固执”的认为
     * 调用 `某事件处理程序` 时的 this 理应为 `字典群之总机.应对`，
     * 哪怕采用了 `& ThisType<范_某特定This>` 的写法也无济于事。
     * 为迁就 TypeScript 的类型检查机制，
     * 不得不令【完备式】的 `应对` 中的各【方法函数】“假装”不会绑定任何 this 。
     * 此举实际上是“欺骗” TypeScript 的类型检查机。
     * 同时，令【形参准用式】的 `诸事件之应对` 中的各【方法函数】配有绑定的 this 。
     *
     * 另一做法我也尝试过，可行，但最终放弃。
     * 该被放弃之做法如下：
     *
     * 在【范】之定义时，【完备式】、【形参准用式】中的各【方法函数】均配有绑定 this 。
     * 同时，在本工具集内部调用某【方法函数】时，明确采用 `.call(this)` 的形式。
     *
     * 放弃上述方案的原因是，已知 Vuejs 会绑死 this 的情况下，仍在调用时采用 `call` 方式，
     * 令我觉得多此一举，我不喜欢这样做。
     */





    /**
     * 此为 `范_字典群之总机_成批重建字典数据之方案` 。
     *
     * ────────────────────────────────
     *
     * 1.  `'仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与'`
     *
     *     即为 `该字典在默认情形下不参与字典群总机发起的数据重建任务` 取 `true` 的那些字典机。
     *     但，若某字典已经构建过数据，则不参与。
     *
     *     例如：由【字典群之总机】的 `追加一批字典` 行为新追加的那些【字典机】。
     *
     *     ────────────────────────────────
     *
     * 2.  `'所有允许参与数据自动构建任务的字典均参与，不论其是否已构建好数据'`
     *
     *     即为 `该字典在默认情形下不参与字典群总机发起的数据重建任务` 取 `true` 的那些【字典机】。
     *     哪怕它们曾经成功构建过数据。
     *
     *     ────────────────────────────────
     *
     * 3.  `'强制一切字典参与，不论其是否已构建好数据'`
     *
     *     即为该【字典群总机】内的一切【字典机】。
     *     换句话说，忽略【字典机】各自的 `该字典在默认情形下不参与字典群总机发起的数据重建任务` 之值。
     */
    export type 范_字典群之总机_成批重建字典数据之方案 = (
        | '仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与'
        | '所有允许参与数据自动构建任务的字典均参与，不论其是否已构建好数据'
        | '强制一切字典参与，不论其是否已构建好数据'
    );





    export type 范_诸字典机_其列表<
        范_所涉总机_其This = 范_字典机系统_其This之默认式,
        范_所涉总机_内所谓标准字典_条目原式 = any,
        范_所涉总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > = Array<
        范_字典机<
            范_所涉总机_其This,
            范_所涉总机_内所谓标准字典_条目原式,
            范_所涉总机_内所有字典_条目视式_各色形态之交集
        >
    >;



    export type 范_诸字典机_其哈希表<
        范_所涉总机_其This = 范_字典机系统_其This之默认式,
        范_所涉总机_所涉所谓标准字典_条目原式 = any,
        范_所涉总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > = Record<
        string,

        范_字典机<
            范_所涉总机_其This,
            范_所涉总机_所涉所谓标准字典_条目原式,
            范_所涉总机_内所有字典_条目视式_各色形态之交集
        >
    >;



    export type 范_某字典群_内任何所谓标准字典_某次数据重建后_统一做法<
        范_所涉总机_其This = 范_字典机系统_其This之默认式,
        范_所涉总机_所涉所谓标准字典_条目原式 = any,
        范_所涉总机_所涉所谓标准字典_条目之值_各色形态之并集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > = (
        this: 范_所涉总机_其This,

        该字典群之总机: 范_字典群之总机<
            范_该总机_其This,
            范_该总机_内所谓标准字典_条目原式,
            范_该总机_内所有字典_条目视式_各色形态之交集
        >,

        所涉字典机: 范_字典机<
            范_所涉总机_其This,
            范_所涉总机_所涉所谓标准字典_条目原式, // NOTE 此处原本明确写作 any 。
            范_所涉总机_所涉所谓标准字典_条目之值_各色形态之并集
        >
    ) => void;



    export type 范_字典群之总机_范之零件_诸事之应对_完备式<
        范_该总机_其This = 范_字典机系统_其This之默认式,
        范_该总机_内所谓标准字典_条目原式 = any,
        范_该总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > = {

        /** 即便是在该【范】的所谓【完备式】中，该项亦可省略。 */
        内任何字典_某次数据重建后_统一做法?:
            范_某字典群_内任何所谓标准字典_某次数据重建后_统一做法<
                范_该总机_其This,
                范_该总机_内所谓标准字典_条目原式,
                范_该总机_内所有字典_条目视式_各色形态之交集
            >;

        /** 即便是在该【范】的所谓【完备式】中，该项亦可省略。 */
        内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法?:
            范_某字典群_内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法<
                范_该总机_其This,
                范_该总机_内所谓标准字典_条目原式,
                范_该总机_内所有字典_条目视式_各色形态之交集['值']
            >;

        /** 即便是在该【范】的所谓【完备式】中，该项亦可省略。 */
        内任何所谓标准字典_凭某条目之原式构建其视式_默认做法?:
            范_某字典群_内任何所谓标准字典_凭某条目之原式构建其视式_默认做法<
                范_该总机_其This,
                范_该总机_内所谓标准字典_条目原式,
                范_该总机_内所有字典_条目视式_各色形态之交集
            >;
    };



    export type 范_字典群之总机_范之零件_诸事之应对_形参准用式<
        范_该总机_其This = 范_字典机系统_其This之默认式,
        范_该总机_内所谓标准字典_条目原式 = any,
        范_该总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    > =
        /**
         * 尽管对应的【完备式】中，各属性恰好全是【可省略项】（即名称后带有一个英语问号），
         * 但下方仍明确采用了 Partial 运算。
         * 此乃故意为之，以为明确。
         */
        Partial<
            范_字典群之总机_范之零件_诸事之应对_完备式<
                范_该总机_其This,
                范_该总机_内所谓标准字典_条目原式,
                范_该总机_内所有字典_条目视式_各色形态之交集
            >
        >;



    export type 范_字典群之总机_形制要求总集_形参准用式<
        范_该总机_其This = 范_字典机系统_其This之默认式,
        范_该总机_内所谓标准字典_条目原式 = any,
        范_该总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>,
    > = {

        /**
         * 目前仅前缀于各类消息文本。
         */
        该字典群之称谓?: string;

        该总机的调试信息之详尽等级?: number;

        第一批字典机形制要求总集_其列表?: Array<
            范_字典机_形制要求总集_形参准用式<
                范_该总机_其This,
                any,
                范_该总机_内所有字典_条目视式_各色形态之交集
            >
        >;

        诸事之应对?:
            范_字典群之总机_范之零件_诸事之应对_形参准用式<
                范_该总机_其This,
                范_该总机_内所谓标准字典_条目原式,
                范_该总机_内所有字典_条目视式_各色形态之交集
            >;
    };





    export type 范_字典群之总机<
        范_该总机_其This = 范_字典机系统_其This之默认式,
        范_该总机_内所谓标准字典_条目原式 = any,
        范_该总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>,
    > = {
        该字典群之称谓: string;

        所持: {
            字典机群: {
                其列表: 范_诸字典机_其列表<
                    范_该总机_其This,
                    any,
                    范_该总机_内所有字典_条目视式_各色形态之交集
                >;

                其哈希表: 范_诸字典机_其哈希表<
                    范_该总机_其This,
                    any,
                    范_该总机_内所有字典_条目视式_各色形态之交集
                >;
            };
        };

        态: {
            当下仍有字典机在构建数据: boolean;
            期待_迄今所有批次的字典机之数据重建任务均已完成: Promise<void>;
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
            范_字典群之总机_范之零件_诸事之应对_完备式<
                范_该总机_其This,
                范_该总机_内所谓标准字典_条目原式,
                范_该总机_内所有字典_条目视式_各色形态之交集
            > & ThisType<范_该总机_其This>;
    };





    export declare const 成批重建字典数据时之所有可能的方案: Array<范_字典群之总机_成批重建字典数据之方案>;

    export declare function _作一字典群之总机_须以This调用 <
        范_该总机_其This = 范_字典机系统_其This之默认式,
        范_该总机_内所谓标准字典_条目原式 = any,
        范_该总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
    >(
        this: 范_该总机_其This,

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

}
