// import type {
//     范_字典机系统_This之默认式,

//     范_期待_用以落实之之函数,
//     范_期待_用以落空之之函数,
// } from '../types/共'

// import type {
//     范_字典_唯一标识,
//     范_字典条目之视式_最简式,
//     范_字典诸条目之视式_其列表,
//     范_字典诸条目之视式_其哈希表,
// } from '../types/料-字典'

// import type {
//     范_字典机,
//     范_字典机_形制要求总集_形参准用式,
// } from '../types/机-单个字典机'

// import type {
//     范_字典群之总机,
//     // 范_字典群之总机_范之零件_诸事之应对_形参准用式,
//     范_字典群之总机_范之零件_诸事之应对_实参实得式,
//     范_字典群之总机_形制要求总集_形参准用式,
//     范_字典群之总机_成批重建字典数据之方案,
// } from '../types/机-字典群之总机'

import type {
    范_字典机系统_This之默认式,

    范_期待_用以落实之之函数,
    范_期待_用以落空之之函数,

    范_字典_唯一标识,
    范_字典条目之视式_最简式,
    范_字典诸条目之视式_其列表,
    范_字典诸条目之视式_其哈希表,

    范_字典机,
    范_字典机_形制要求总集_形参准用式,

    范_字典群之总机,
    // 范_字典群之总机_范之零件_诸事之应对_形参准用式,
    范_字典群之总机_范之零件_诸事之应对_实参实得式,
    范_字典群之总机_形制要求总集_形参准用式,
    范_字典群之总机_成批重建字典数据之方案,
} from '@wulechuan/controllers-of-enum-dictionaries'





import {
    // 以某This调用某函数,
    是合规的非列表对象,
    // 求合规的非列表对象_若不合规则给出null,
    求合规的非列表对象_若不合规则给出空的对象,
} from './辅助工具集-通用'

import {
    是字典之合规的唯一标识,
    // 是字典数据项之合规的唯一标识,
} from './辅助工具集-字典机专用'

import {
    作一字典机,
} from './主体-机-单个字典机'





export const 成批重建字典数据时之所有可能的方案: Array<范_字典群之总机_成批重建字典数据之方案> = [
    '仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与',
    '所有允许参与数据自动构建任务的字典均参与，不论其是否已构建好数据',
    '强制一切字典参与，不论其是否已构建好数据',
];





/**
 * ═══════════════════════════════════════════════════════════════════════════════
 *           工厂函数【作一字典群之总机】
 * ═══════════════════════════════════════════════════════════════════════════════
 */

/** */

export function 作一字典群之总机 <
    范_该总机_内所谓标准字典_条目原式 = any,
    范_该总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
>(
    该总机_This: any,

    该字典群之总机之形制要求总集?:
        范_字典群之总机_形制要求总集_形参准用式<
            typeof 该总机_This,
            范_该总机_内所谓标准字典_条目原式,
            范_该总机_内所有字典_条目视式_各色形态之交集
        >
): 范_字典群之总机<
    typeof 该总机_This,
    范_该总机_内所谓标准字典_条目原式,
    范_该总机_内所有字典_条目视式_各色形态之交集
> {
    type 范_该总机_This = typeof 该总机_This;

    return _作一字典群之总机_须以This调用<
        范_该总机_This,
        范_该总机_内所谓标准字典_条目原式,
        范_该总机_内所有字典_条目视式_各色形态之交集
    >.call(
        该总机_This,
        该字典群之总机之形制要求总集
    )

    // return <
    //     范_字典群之总机<
    //         范_该总机_This,
    //         范_该总机_内所谓标准字典_条目原式,
    //         范_该总机_内所有字典_条目视式_各色形态之交集
    //     >
    // >以某This调用某函数(
    //     该总机_This,

    //     _作一字典群之总机_须以This调用<
    //         范_该总机_This,
    //         范_该总机_内所谓标准字典_条目原式,
    //         范_该总机_内所有字典_条目视式_各色形态之交集
    //     >,

    //     该字典群之总机之形制要求总集,
    // )
}





export function _作一字典群之总机_须以This调用 <
    范_该总机_This = 范_字典机系统_This之默认式,
    范_该总机_内所谓标准字典_条目原式 = any,
    范_该总机_内所有字典_条目视式_各色形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any>
>(
    this: 范_该总机_This,

    该字典群之总机之形制要求总集?: 范_字典群之总机_形制要求总集_形参准用式<
        范_该总机_This,
        范_该总机_内所谓标准字典_条目原式,
        范_该总机_内所有字典_条目视式_各色形态之交集
    >
): 范_字典群之总机<
    范_该总机_This,
    范_该总机_内所谓标准字典_条目原式,
    范_该总机_内所有字典_条目视式_各色形态之交集
> {

    /**
     * 定义以下诸【范】，是为了在本函数体中方便指代它们。
     */

    /** */

    type 范_该字典群之总机 = 范_字典群之总机<
        范_该总机_This,
        范_该总机_内所谓标准字典_条目原式,
        范_该总机_内所有字典_条目视式_各色形态之交集
    >;

    type 范_该字典群之总机_形制要求总集_形参准用式 = 范_字典群之总机_形制要求总集_形参准用式<
        范_该总机_This,
        范_该总机_内所谓标准字典_条目原式,
        范_该总机_内所有字典_条目视式_各色形态之交集
    >;

    type 范_该字典群之总机_诸事之应对_实参实得式 = 范_字典群之总机_范之零件_诸事之应对_实参实得式<
        范_该总机_This,
        范_该总机_内所谓标准字典_条目原式,
        范_该总机_内所有字典_条目视式_各色形态之交集
    >;

    type 范_该字典群之总机_任何字典机加入该群时视作的形态 = 范_字典机<范_该总机_This, any, 范_该总机_内所有字典_条目视式_各色形态之交集>;





    let $_该字典群之总机_以往数据重建任务总次数 = 0
    let $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落实之: undefined | 范_期待_用以落实之之函数<void>
    let $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落空之: undefined | 范_期待_用以落空之之函数<void>
    let $_该字典群之总机_期待_迄今历次数据重建任务主体均已完成: null | Promise<void>
    let $_该字典群之总机_迄今所有批次任务中遭遇的所有异常_其列表: Array<any>;





    const _该字典群之总机_追加一批字典 = <
        范_该批字典_条目原式_可能的共同形态 = 范_该总机_内所谓标准字典_条目原式 | never,
        范_该批字典_内所有字典_条目视式_各色形态之交集 extends 范_该总机_内所有字典_条目视式_各色形态之交集 = 范_该总机_内所有字典_条目视式_各色形态之交集
    >(
        一批字典机之形制要求总集之列表?: Array<
            范_字典机_形制要求总集_形参准用式<
                范_该总机_This,
                范_该批字典_条目原式_可能的共同形态,
                范_该批字典_内所有字典_条目视式_各色形态之交集
            >
        >
    ): void => {
        if (!Array.isArray(一批字典机之形制要求总集之列表)) { return }

        一批字典机之形制要求总集之列表.forEach(_该字典群之总机_按需追加单个字典<
            范_该批字典_条目原式_可能的共同形态,
            范_该批字典_内所有字典_条目视式_各色形态之交集
        >)

        该字典群之总机.为.令所有字典按需重建数据('仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与')
    }



    const _该字典群之总机_按需追加单个字典 = <
        范_该字典_条目原式 = 范_该总机_内所谓标准字典_条目原式,
        范_该字典_条目视式 extends 范_该总机_内所有字典_条目视式_各色形态之交集 = 范_该总机_内所有字典_条目视式_各色形态之交集
    >(
        该字典机之形制要求总集?: 范_字典机_形制要求总集_形参准用式<
            范_该总机_This,
            范_该字典_条目原式,
            范_该字典_条目视式
        >
    ): (
        null | 范_字典机<范_该总机_This, 范_该字典_条目原式, 范_该字典_条目视式>
    ) => {

        if (!是合规的非列表对象(该字典机之形制要求总集)) { return null }

        const {
            该字典之唯一标识,
            该字典机的调试信息之详尽等级,
        } = 该字典机之形制要求总集

        if (!是字典之合规的唯一标识(该字典之唯一标识)) { return null }

        if (typeof 该字典机的调试信息之详尽等级 !== 'number') {
            该字典机之形制要求总集.该字典机的调试信息之详尽等级 = 该总机的调试信息之详尽等级
        }

        const 字典机 = 该字典群之总机.为.取某字典机<范_该字典_条目原式, 范_该字典_条目视式>(该字典之唯一标识)
        if (字典机) {
            console.debug(`${$_该字典群之总机_消息前缀}\n    不应重复构建标识为 “${该字典之唯一标识}” 的【字典机】。已略过该构建任务。`)
            return 字典机
        }

        const 新作的字典机 = 作一字典机<
            范_该总机_This,
            范_该总机_内所谓标准字典_条目原式,
            范_该总机_内所有字典_条目视式_各色形态之交集,
            范_该字典_条目原式,
            范_该字典_条目视式
        >.call(
            this,
            该字典群之总机,
            该字典机之形制要求总集
        )

        if (!新作的字典机) {
            return null
        }



        const 新作的字典机_加入字典群时视作的形态: 范_该字典群之总机_任何字典机加入该群时视作的形态 = 新作的字典机 as unknown as 范_该字典群之总机_任何字典机加入该群时视作的形态

        const { 字典机群 } = 该字典群之总机.所持

        // if (this) {
        //     type 范_此处所关心的Vue的最简式 = {
        //         $set: (h: object, k: string | number, v: any) => void;
        //         [k: string]: any;
        //     };

        //     const that: 范_此处所关心的Vue的最简式 = this as unknown as 范_此处所关心的Vue的最简式

        //     if (typeof that.$set === 'function') {
        //         that.$set(字典机群.其列表, 字典机群.其列表.length, 新作的字典机_加入字典群时视作的形态)
        //         that.$set(字典机群.其哈希表, 该字典之唯一标识, 新作的字典机_加入字典群时视作的形态)
        //     }
        // }

        字典机群.其列表.push(新作的字典机_加入字典群时视作的形态)
        字典机群.其哈希表[该字典之唯一标识] = 新作的字典机_加入字典群时视作的形态

        return 新作的字典机
    }



    const _该字典群之总机_删除一批字典 = (
        欲删除之诸字典之唯一标识之列表?: 范_字典_唯一标识[]
    ): void => {
        if (
            !Array.isArray(欲删除之诸字典之唯一标识之列表) ||
            欲删除之诸字典之唯一标识之列表.length === 0
        ) { return }

        const { 字典机群 } = 该字典群之总机.所持

        const {
            其列表: 字典机之旧列表,
            其哈希表: 字典机之旧哈希表,
        } = 字典机群

        let 字典机之新哈希表: typeof 字典机之旧哈希表 = {}

        let 字典机之新列表 = [ ...字典机之旧列表 ].filter(某字典机 => {
            const 该字典应销毁 = 欲删除之诸字典之唯一标识之列表.includes(某字典机.该字典之唯一标识)

            if (该字典应销毁) {
                某字典机.为.自毁()
            } else {
                字典机之新哈希表[某字典机.该字典之唯一标识] = 某字典机
            }

            return !该字典应销毁
        })

        字典机群.其列表 = 字典机之新列表
        字典机群.其哈希表 = 字典机之新哈希表
    }



    const _该字典群之总机_令所有字典按需重建数据 = (
        本次执行须为哪些字典重建数据?: 范_字典群之总机_成批重建字典数据之方案
    ): Promise<void> => {

        // ══════════ 准备工作 ════════════

        if (
            typeof 本次执行须为哪些字典重建数据 !== 'string' ||
            !成批重建字典数据时之所有可能的方案.includes(本次执行须为哪些字典重建数据)
        ) {
            本次执行须为哪些字典重建数据 = '仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与'
        }



        // ══════════ 确定须参与的字典之列表 ════════════

        let 须为其构建数据之字典机之列表 = 该字典群之总机.所持.字典机群.其列表

        if (本次执行须为哪些字典重建数据 === '仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与') {
            须为其构建数据之字典机之列表 = 须为其构建数据之字典机之列表.filter(
                某字典机 => !某字典机.形制要求杂集.该字典在默认情形下不参与字典群总机发起的数据重建任务 && !某字典机.态.当下的数据系某次成功构建而得的
            )
        } else if (本次执行须为哪些字典重建数据 === '所有允许参与数据自动构建任务的字典均参与，不论其是否已构建好数据') {
            须为其构建数据之字典机之列表 = 须为其构建数据之字典机之列表.filter(
                某字典机 => !某字典机.形制要求杂集.该字典在默认情形下不参与字典群总机发起的数据重建任务
            )
        }



        // ══════════ 令所有参与的字典各自构建数据 ════════════

        const 本批次任务之代号 = $_该字典群之总机_以往数据重建任务总次数 + 1

        // eslint-disable-next-line no-unused-vars
        const 本批次任务之消息前缀 = `${$_该字典群之总机_消息前缀} 任务代号〔${本批次任务之代号}〕：`

        该总机的调试信息之详尽等级 >= 1 && console.debug(本批次任务之消息前缀, '须为其构建数据之字典机之列表。 共', 须为其构建数据之字典机之列表.length, '个。', 须为其构建数据之字典机之列表.map(字典机 => 字典机.该字典之唯一标识))



        $_该字典群之总机_以往数据重建任务总次数 += 1

        if (须为其构建数据之字典机之列表.length === 0) {
            该总机的调试信息之详尽等级 >= 1 && console.debug(`${本批次任务之消息前缀} 须重建数据之字典数为零。已直接结束。`)
            return Promise.resolve()
        }



        const { 态 } = 该字典群之总机



        态.当下仍有字典机在构建数据 = true

        const 期待_本批次字典机之数据重建任务均已完成: Promise<void> = Promise.allSettled(
            须为其构建数据之字典机之列表.map(某字典机 => 某字典机.为.重建数据())
        )
            .then(() => {})
            .catch(异常之记载 => {
                $_该字典群之总机_迄今所有批次任务中遭遇的所有异常_其列表.push(异常之记载)
            })



        const 发起本批次任务之前没有未完成的以往批次: boolean = !$_该字典群之总机_期待_迄今历次数据重建任务主体均已完成



        let 期待_含本批次任务在内的所有任务刚好完成: Promise<void>

        if (发起本批次任务之前没有未完成的以往批次) {
            $_该字典群之总机_迄今所有批次任务中遭遇的所有异常_其列表 = []

            态.期待_迄今所有批次的字典机之数据重建任务均已完成 = new Promise((落实, 落空) => {
                $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落实之 = 落实
                $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落空之 = 落空
            }).then(() => {
                态.当下仍有字典机在构建数据 = false
                $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落实之 = undefined
                $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落空之 = undefined
                态.期待_迄今所有批次的字典机之数据重建任务均已完成 = Promise.resolve()
            }).catch(异常之记载 => {
                态.当下仍有字典机在构建数据 = false
                $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落实之 = undefined
                $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落空之 = undefined
                态.期待_迄今所有批次的字典机之数据重建任务均已完成 = Promise.resolve()
                return Promise.reject($_该字典群之总机_迄今所有批次任务中遭遇的所有异常_其列表)
            })



            期待_含本批次任务在内的所有任务刚好完成 = 期待_本批次字典机之数据重建任务均已完成
        } else {
            期待_含本批次任务在内的所有任务刚好完成 = Promise.all([
                $_该字典群之总机_期待_迄今历次数据重建任务主体均已完成,
                期待_本批次字典机之数据重建任务均已完成,
            ]).then(() => {})
        }



        期待_含本批次任务在内的所有任务刚好完成 = 期待_含本批次任务在内的所有任务刚好完成.then(() => {
            该总机的调试信息之详尽等级 >= 2 && console.debug(`${本批次任务之消息前缀} 刚刚完成某批次数据重建任务。`)

            if ($_该字典群之总机_期待_迄今历次数据重建任务主体均已完成 !== 期待_含本批次任务在内的所有任务刚好完成) {
                该总机的调试信息之详尽等级 >= 2 && console.debug(`${本批次任务之消息前缀} 仍有某批次数据重建任务未完成。`)
                return
            } else {
                该总机的调试信息之详尽等级 >= 1 && console.debug(`${本批次任务之消息前缀} 已完成所有迄今所有批次的数据重建任务。`)
            }

            if ($_该字典群之总机_迄今所有批次任务中遭遇的所有异常_其列表.length === 0) {
                if (typeof $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落实之 === 'function') {
                    $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落实之()
                }
            } else {
                if (typeof $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落空之 === 'function') {
                    $_该字典群之总机_期待_所有批次的数据重建任务均已完毕_落空之()
                }
            }
        })

        $_该字典群之总机_期待_迄今历次数据重建任务主体均已完成 = 期待_含本批次任务在内的所有任务刚好完成



        return 期待_本批次字典机之数据重建任务均已完成
    }



    const _该字典群之总机_取某字典机 = <
        范_该字典_条目原式 = 范_该总机_内所谓标准字典_条目原式,
        范_该字典_条目视式 extends 范_该总机_内所有字典_条目视式_各色形态之交集 = 范_该总机_内所有字典_条目视式_各色形态之交集
    >(
        欲索取之字典_其唯一标识?: 范_字典_唯一标识
    ): (
        null | 范_字典机<范_该总机_This, 范_该字典_条目原式, 范_该字典_条目视式>
    ) => {
        if (!是字典之合规的唯一标识(欲索取之字典_其唯一标识)) { return null }
        const 字典机之哈希表 = 该字典群之总机.所持.字典机群.其哈希表
        const 字典机 = 字典机之哈希表[欲索取之字典_其唯一标识] as unknown as 范_字典机<范_该总机_This, 范_该字典_条目原式, 范_该字典_条目视式>
        return 字典机 || null
    }



    const _该字典群之总机_取某字典诸条目之视式_其列表 = <
        范_该字典_条目原式 = 范_该总机_内所谓标准字典_条目原式,
        范_该字典_条目视式 extends 范_该总机_内所有字典_条目视式_各色形态之交集 = 范_该总机_内所有字典_条目视式_各色形态之交集
    >(
        所涉字典_其唯一标识?: 范_字典_唯一标识
    ): 范_字典诸条目之视式_其列表<范_该字典_条目视式> => {
        const 字典机 = 该字典群之总机.为.取某字典机<范_该字典_条目原式, 范_该字典_条目视式>(所涉字典_其唯一标识)
        if (字典机) {
            return 字典机.所持.该字典诸条目之视式.其列表
        } else {
            return []
        }
    }



    const _该字典群之总机_取某字典诸条目之视式_其哈希表 = <
        范_该字典_条目原式 = 范_该总机_内所谓标准字典_条目原式,
        范_该字典_条目视式 extends 范_该总机_内所有字典_条目视式_各色形态之交集 = 范_该总机_内所有字典_条目视式_各色形态之交集
    >(
        所涉字典_其唯一标识?: 范_字典_唯一标识
    ): 范_字典诸条目之视式_其哈希表<范_该字典_条目视式> => {
        const 字典机 = 该字典群之总机.为.取某字典机<范_该字典_条目原式, 范_该字典_条目视式>(所涉字典_其唯一标识)
        if (字典机 && 字典机.所持.该字典诸条目之视式.其哈希表) {
            return 字典机.所持.该字典诸条目之视式.其哈希表
        } else {
            return {}
        }
    }





    const 总机之已知合规的形制要求总集 = 求合规的非列表对象_若不合规则给出空的对象<范_该字典群之总机_形制要求总集_形参准用式>(该字典群之总机之形制要求总集)

    let {
        该字典群之称谓,
    } = 总机之已知合规的形制要求总集

    if (typeof 该字典群之称谓 !== 'string' || !该字典群之称谓.trim()) {
        该字典群之称谓 = '<未详>'
    } else {
        该字典群之称谓 = 该字典群之称谓 // .trim()
    }



    const {
        该总机的调试信息之详尽等级: _该总机的调试信息之详尽等级_外界给出值,
    } = 总机之已知合规的形制要求总集

    let 该总机的调试信息之详尽等级 = 0

    if (typeof _该总机的调试信息之详尽等级_外界给出值 === 'number') {
        该总机的调试信息之详尽等级 = _该总机的调试信息之详尽等级_外界给出值
    }





    const $_该字典群之总机_消息前缀 = `【字典总机】“${该字典群之称谓}”：`





    const 该总机_诸事之应对 = 求合规的非列表对象_若不合规则给出空的对象<范_该字典群之总机_诸事之应对_实参实得式>(
        总机之已知合规的形制要求总集['诸事之应对']
    )

    let {
        内任何字典_某次数据重建后_统一做法,
    } = 该总机_诸事之应对

    if (typeof 内任何字典_某次数据重建后_统一做法 !== 'function') {
        内任何字典_某次数据重建后_统一做法 = undefined
    } else {
        内任何字典_某次数据重建后_统一做法 = 内任何字典_某次数据重建后_统一做法.bind(this)
    }



    let {
        内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法,
    } = 该总机_诸事之应对

    if (typeof 内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法 !== 'function') {
        内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法 = undefined
    } else {
        内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法 = 内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法.bind(this)
    }



    let {
        内任何所谓标准字典_凭某条目之原式构建其视式_默认做法,
    } = 该总机_诸事之应对

    if (typeof 内任何所谓标准字典_凭某条目之原式构建其视式_默认做法 !== 'function') {
        内任何所谓标准字典_凭某条目之原式构建其视式_默认做法 = undefined
    } else {
        内任何所谓标准字典_凭某条目之原式构建其视式_默认做法 = 内任何所谓标准字典_凭某条目之原式构建其视式_默认做法.bind(this)
    }





    const 该字典群之总机: 范_该字典群之总机 = {
        该字典群之称谓,

        所持: {
            字典机群: {
                其列表: [],
                其哈希表: {},
            },
        },

        态: {
            该总机的调试信息之详尽等级,
            当下仍有字典机在构建数据: false,
            期待_迄今所有批次的字典机之数据重建任务均已完成: Promise.resolve(),
        },

        为: {
            追加一批字典: _该字典群之总机_追加一批字典,
            删除一批字典: _该字典群之总机_删除一批字典,
            取某字典机: _该字典群之总机_取某字典机,
            取某字典诸条目之视式_其列表: _该字典群之总机_取某字典诸条目之视式_其列表,
            取某字典诸条目之视式_其哈希表: _该字典群之总机_取某字典诸条目之视式_其哈希表,
            令所有字典按需重建数据: _该字典群之总机_令所有字典按需重建数据,
        },

        应对: {
            内任何字典_某次数据重建后_统一做法,
            内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法,
            内任何所谓标准字典_凭某条目之原式构建其视式_默认做法,
        },
    }



    该字典群之总机.为.追加一批字典(总机之已知合规的形制要求总集.第一批字典机形制要求总集_其列表)



    return 该字典群之总机
}
