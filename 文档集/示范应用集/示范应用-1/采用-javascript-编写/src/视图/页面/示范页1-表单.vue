<template>
    <div class="页面 页面--示范页1">
        <div class="页面中央内容块">
            <el-row>
                <el-alert
                    title="请打开浏览器控制台观察输出日志。"
                    type="success"
                    :closable="false"
                ></el-alert>
            </el-row>

            <el-row>
                <article class="消息框">
                    <p>{{ 当下呈现的消息 }}</p>
                </article>
            </el-row>

            <el-row>
                <article class="任务列表">
                    <ol>
                        <li
                            v-for="(某测试任务, 列表编号) in 待运行之诸任务之名称列表"
                            :key="`${列表编号}-${某测试任务.称谓}`"
                        ><el-checkbox
                            :value="某测试任务.已完毕 || 某测试任务.已取消"
                            :disabled="true"
                            :class="{ '已取消': 某测试任务.已取消 }"
                        >测试任务：
                            <em v-if="某测试任务.已取消">〔{{ 某测试任务.已取消时的表述 }}〕</em>
                            <span>{{ 某测试任务.称谓 }}</span>
                        </el-checkbox></li>
                    </ol>
                </article>
            </el-row>

            <hr>

            <el-row>
                <el-button type="danger"  @click="删除字典('字典乙')">删除【字典乙】</el-button>
                <el-button type="success" @click="重新制造字典乙('人为按下重造按钮')">重造全新的【字典乙】</el-button>
                <el-button type="primary" @click="令所有字典重建数据('人为按下数据重建按钮')">令所有 {{ 当下存在的所有字典机.length }} 个字典重建数据</el-button>
            </el-row>

            <hr>

            <el-form>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-select
                            v-model="表单之数据['填写项1']"
                            placeholder="请选择一种中华名典"
                            clearable
                            @change="当某表单项之值变动后('填写项（一）', $event, 字典机_字典甲)"
                        >
                            <el-option
                                v-for="字典条目之视式 in 字典条目之视式之列表_字典甲"
                                :key="字典条目之视式.唯一标识"
                                :value="字典条目之视式.值"
                                :label="字典条目之视式.呈示称谓"
                            ></el-option>
                        </el-select>
                    </el-col>

                    <el-col :span="8">
                        <el-select
                            v-model="表单之数据['填写项2']"
                            placeholder="请选择一种中华服饰"
                            clearable
                            @change="当某表单项之值变动后('填写项（二）', $event, 字典机_字典乙)"
                        >
                            <el-option
                                v-for="字典条目之视式 in 字典条目之视式之列表_字典乙"
                                :key="字典条目之视式.唯一标识"
                                :value="字典条目之视式.值"
                                :label="字典条目之视式.呈示称谓"
                            ></el-option>
                        </el-select>
                    </el-col>

                    <el-col :span="8">
                        <el-select
                            v-model="表单之数据['填写项3']"
                            placeholder="请选择一种中华明代服饰"
                            clearable
                            @change="当某表单项之值变动后('填写项（三）', $event, 字典机_字典丙)"
                        >
                            <el-option
                                v-for="字典条目之视式 in 字典条目之视式之列表_字典丙"
                                :key="字典条目之视式.唯一标识"
                                :value="字典条目之视式.值"
                                :label="字典条目之视式.呈示称谓"
                            ></el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>









<script>
/**
 * @typedef {import('@wulechuan/controllers-of-enum-dictionaries').范_字典_唯一标识} 范_字典_唯一标识
 */

/**
 * @typedef {import('../../数据服务接口/范之集').范_本应用中一切字典之字典条目之原式} 范_本应用中一切字典之字典条目之原式
 */

/**
 * @typedef {import('../../数据服务接口/范之集').范_本应用中一切字典之字典条目之视式} 范_本应用中一切字典之字典条目之视式
 */

/**
 * @typedef {import('../../数据服务接口/范之集').范_本应用中一切字典群之总机} 范_本应用中一切字典群之总机
 */

/**
 * @typedef {import('../../数据服务接口/范之集').范_本应用中一切字典机} 范_本应用中一切字典机
 */

/**
 * @typedef {import('../../数据服务接口/范之集').范_本应用中一切字典机_形制要求总集_形参准用式} 范_本应用中一切字典机_形制要求总集_形参准用式
 */





import {
    作一字典群之总机,
} from '@wulechuan/controllers-of-enum-dictionaries'

import {
    伪XHR接口_字典甲_获取数据列表,
    伪XHR接口_字典乙_获取数据列表,
} from '@/数据服务接口'

import{
    本应用任何字典群之总机_内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法,
    本应用任何字典群之总机_内任何所谓标准字典_凭某条目之原式构建其视式_默认做法,
} from '@/控制器'





const 消息前缀 = '示范页1：'





/**
 * @type {Array<范_本应用中一切字典机_形制要求总集_形参准用式>}
 */
const 诸字典之构建配置总集之列表 = [
    {
        该字典之唯一标识: '字典甲',
        诸事之应对: {
            构建该字典所有条目之原式 (
                该字典所属字典群之总机, // eslint-disable-line no-unused-vars
                该字典机自身, // eslint-disable-line no-unused-vars
                第三个参数搜集了从该字典机自身的_重建数据_函数传递过来的实参列表 // eslint-disable-line no-unused-vars
            ) { return 伪XHR接口_字典甲_获取数据列表(12) },
        },
    },

    {
        该字典之唯一标识: '字典乙',
        该字典机的调试信息之详尽等级: 2,
        诸事之应对: {
            构建该字典所有条目之原式 () { return 伪XHR接口_字典乙_获取数据列表() },
        },
    },

    {
        该字典之唯一标识: '字典丙',
        该字典机的调试信息之详尽等级: 2,

        还应持有: {
            字典特别条目_其代表全选者: {
                当正常候选项个数为零时仍允许采用本特别项: true,
                字典条目之视式: {
                    唯一标识: '-全-',
                    值: '-全-',
                    呈示称谓: '〔我包圆了〕',
                },
            },
        },

        形制要求杂集: {
            该字典在默认情形下不参与字典群总机发起的数据重建任务: true,
        },

        诸事之应对: {
            // eslint-disable-next-line no-unused-vars
            构建该字典所有条目之原式 (该字典所属字典群之总机, 该字典机自身_即字典丙的字典机, 第三个参数搜集了从该字典机自身的_重建数据_函数传递过来的实参列表) {
                const 字典机_字典乙 = 该字典所属字典群之总机.为.取某字典机('字典乙')

                const 字典乙诸条目之原式_其列表 = 字典机_字典乙?.所持.该字典诸条目之原式_其列表
                if (!Array.isArray(字典乙诸条目之原式_其列表)) { return Promise.resolve([]) }

                return Promise.resolve(
                    字典乙诸条目之原式_其列表.filter(
                        字典乙某条目之原式 => /明制/.test(字典乙某条目之原式.label)
                    )
                )
            },

            该字典每次数据重建后 (该字典所属字典群之总机, 该字典机自身) {
                console.log(消息前缀, 该字典所属字典群之总机.该字典群之称谓, '~', 该字典机自身.该字典之唯一标识, '数据已重建。')
            },
        },
    },
]





/**
 * @typedef {object} 测试任务
 * @property {string} 称谓
 * @property {boolean} 已完毕
 * @property {boolean} 已取消
 * @property {string} 已取消时的表述
 */




/** */
export default {
    name: 'Page示范页1',

    data () {
        return {
            表单之数据: {
                填写项1: '',
                填写项2: '',
                填写项3: '',
            },

            当下呈现的消息: '暂无消息。',

            /** @type {测试任务[]} */
            待运行之诸任务之名称列表: [],

            /** @type {范_本应用中一切字典群之总机} */
            字典总机: null,
        }
    },

    computed: {
        /** @returns {null | 范_本应用中一切字典机} */
        字典机_字典甲 () { return this.字典总机 && this.字典总机.所持.字典机群.其哈希表['字典甲'] },

        /**
         * 【字典乙】故意采用了不同于【字典甲】、【字典丙】的写法。殊途同归。
         * @returns {null | 范_本应用中一切字典机}
         */
        字典机_字典乙 () { return this.字典总机 && this.字典总机.为.取某字典机('字典乙') },

        /** @returns {null | 范_本应用中一切字典机} */
        字典机_字典丙 () { return this.字典总机 && this.字典总机.所持.字典机群.其哈希表['字典丙'] },

        /** @returns {范_本应用中一切字典机[]} */
        当下存在的所有字典机 () {
            return [
                this.字典机_字典甲,
                this.字典机_字典乙,
                this.字典机_字典丙,
            ].filter(某字典机 => !!某字典机)
        },

        /** @returns {范_本应用中一切字典之字典条目之视式[]} */
        字典条目之视式之列表_字典甲 () { return !this.字典机_字典甲 ? [] : this.字典机_字典甲.所持.该字典诸条目之视式.其列表 },

        /**
         * 【字典乙】故意采用了不同于【字典甲】、【字典丙】的写法。殊途同归。
         * @returns {范_本应用中一切字典之字典条目之视式[]}
         */
        字典条目之视式之列表_字典乙 () { return !this.字典总机 ? [] : this.字典总机.为.取某字典诸条目之视式_其列表('字典乙') },

        /** @returns {范_本应用中一切字典之字典条目之视式[]} */
        字典条目之视式之列表_字典丙 () { return !this.字典机_字典丙 ? [] : this.字典机_字典丙.所持.该字典诸条目之视式.其列表 },
    },

    methods: {
        /**
         * @param {string} 所涉填写项之称谓
         * @param {string} 新值
         * @param {undefined | 范_本应用中一切字典机} 所涉字典机
         */
        当某表单项之值变动后 (所涉填写项之称谓, 新值, 所涉字典机) {
            /** @type {string} */
            let 消息

            if (!所涉字典机) {
                消息 = `填写项【${所涉填写项之称谓}】幕后的【字典】已不存在。`
            } else {
                const 新值之称谓 = 所涉字典机.为.凭某条目之值求其呈示称谓(新值)
                消息 = `填写项【${所涉填写项之称谓}】的【值】变动了。变为：“${新值之称谓}”，对应的【值】为 “${新值}” 。`
            }

            console.log(`${消息前缀}\n    ${消息}`)
            this.当下呈现的消息 = 消息
        },

        /**
         * @param {字典之唯一标识} 范_字典_唯一标识
         */
        删除字典 (字典之唯一标识) {
            const { 字典总机 } = this

            if (!字典总机) { return }

            /** @type {测试任务} */
            const 该任务 = {
                称谓: '删除【字典】 “字典乙” ',
                已完毕: false,
                已取消: false,
                已取消时的表述: '已取消',
            }

            this.待运行之诸任务之名称列表.push(该任务)

            字典总机.为.删除一批字典([ 字典之唯一标识 ])

            该任务.已完毕 = true

            const 消息 = `【字典】 “${字典之唯一标识}” 已删除。`
            console.log(`${消息前缀}\n    ${消息}`)
            this.当下呈现的消息 = 消息
        },

        /**
         * @param {string} 某次任务之补充描述
         */
        令所有字典重建数据 (某次任务之补充描述) {
            const { 字典总机, 当下存在的所有字典机 } = this

            if (!字典总机) { return }

            const 任务称谓 = `令所有 ${当下存在的所有字典机.length} 个【字典】重建数据 （${某次任务之补充描述 || '无补充描述'}）`

            /** @type {测试任务} */
            const 该任务 = {
                称谓: 任务称谓,
                已完毕: false,
                已取消: false,
                已取消时的表述: '某些字典构建数据时遭遇异常',
            }

            this.待运行之诸任务之名称列表.push(该任务)

            字典总机.为.令一批字典各自重建数据('强制一切字典参与，不论其是否已构建好数据').then(() => {
                该任务.已完毕 = true
            }).catch(() => {
                该任务.已取消 = true
            })

            // 字典总机.态.期待_迄今所有批次的字典机之数据重建任务均已落定.then(() => {
            //     console.log(任务称谓, '全完成（所有任务皆成功）')
            // }).catch(() => {
            //     console.log(任务称谓, '全完成（部分任务失败）')
            // })
        },

        /**
         * @param {string} 某次任务之补充描述
         */
        重新制造字典乙 (某次任务之补充描述) {
            const { 字典总机 } = this

            if (!字典总机) { return }

            /** @type {测试任务} */
            const 该任务 = {
                称谓: `重新构建【字典】 “字典乙” （${某次任务之补充描述 || '无补充描述'}）`,
                已完毕: false,
                已取消: false,
                已取消时的表述: '遭遇异常',
            }

            this.待运行之诸任务之名称列表.push(该任务)

            const 消息 = '开始构建【字典】 “字典乙” 。'
            console.log(`${消息前缀}\n    ${消息}`)
            this.当下呈现的消息 = 消息

            字典总机.为.制作一批新字典([ 诸字典之构建配置总集之列表[1] ]).then(() => {
                该任务.已完毕 = true
                const 消息 = '【字典】 “字典乙” 已构建完毕。'
                console.log(`${消息前缀}\n    ${消息}`)
                this.当下呈现的消息 = 消息
            }).catch(() => {
                该任务.已取消 = true
            })

            // const 任务称谓 = '迄今所有的数据重建任务'

            // 字典总机.态.期待_迄今所有批次的字典机之数据重建任务均已落定.then(() => {
            //     console.log(任务称谓, '全完成（所有任务皆成功）')
            // }).catch(() => {
            //     console.log(任务称谓, '全完成（部分任务失败）')
            // })
        },

        /**
         * @param {string} 某次任务之补充描述
         */
        令已经存在的字典乙重建数据 (某次任务之补充描述) {
            const { 字典总机 } = this
            if (!字典总机) { return }

            const 字典机_字典乙 = 字典总机.为.取某字典机('字典乙')
            if (!字典机_字典乙) { return }

            /** @type {测试任务} */
            const 该任务 = {
                称谓: `令已经存在的【字典】 “字典乙” 重建数据 （${某次任务之补充描述 || '无补充描述'}）`,
                已完毕: false,
                已取消: false,
                已取消时的表述: '遭遇异常',
            }

            this.待运行之诸任务之名称列表.push(该任务)

            字典机_字典乙.为.重建数据().then(() => {
                该任务.已完毕 = true
            }).catch(() => {
                该任务.已取消 = true
            })
        },
    },

    mounted () {
        this.字典总机 = 作一字典群之总机(
            this,

            {
                该字典群之称谓: '示范页1中唯一的【字典群】',

                该总机的调试信息之详尽等级: 2,

                第一批字典机形制要求总集_其列表: 诸字典之构建配置总集之列表,

                诸事之应对: {
                    内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法: 本应用任何字典群之总机_内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法,

                    内任何所谓标准字典_凭某条目之原式构建其视式_默认做法: 本应用任何字典群之总机_内任何所谓标准字典_凭某条目之原式构建其视式_默认做法,

                    内任何字典_某次数据重建后_统一做法 (所涉字典所属字典群之总机, 所涉字典机) {
                        if (所涉字典机.该字典之唯一标识 === '字典乙') {
                            const 字典机_字典丙 = 所涉字典所属字典群之总机.为.取某字典机('字典丙')

                            if (字典机_字典丙) {
                                /** @type {测试任务} */
                                const 该任务 = {
                                    称谓: '令已经存在的【字典】 “字典丙” 重建数据',
                                    已完毕: false,
                                    已取消: false,
                                    已取消时的表述: '遭遇异常',
                                }

                                this.待运行之诸任务之名称列表.push(该任务)

                                字典机_字典丙.为.重建数据().then(() => {
                                    该任务.已完毕 = true
                                }).catch(() => {
                                    该任务.已取消 = true
                                })
                            }
                        }
                    },
                },
            }
        )
    },

    activated () {
        document.title = '字典群之总机·例1：表单（JavaScript）'

        /**
         * 接口代码已故意令伪造的接口较慢，须数秒钟。
         * 而下面的代码则在字典乙尚未重建完毕时故意再次要求起重建。
         * 如果代码运转如期，应在浏览器控制台中观测到消息，告知我们字典乙不会并行多个数据重建任务。
         */
        this.$nextTick().then(() => { this.令已经存在的字典乙重建数据('页面刚激活之后的第一个“滴答”。') })

        /**
         * 下面的代码则在等待足够长的时间后（确保字典乙数据重建完毕后），故意要求字典乙再次重建数据。
         * 如果代码运转如期，应观测到字典乙的确重新构建了。
         */
        setTimeout(() => { this.令已经存在的字典乙重建数据('页面激活约10秒后故意重建之') }, 9981)

        setTimeout(() => { this.令所有字典重建数据('页面激活后的 333 毫秒') }, 333)
        setTimeout(() => { this.令所有字典重建数据('页面激活后的 3333 毫秒') }, 3333)
        setTimeout(() => { this.令所有字典重建数据('页面激活后的 13333 毫秒') }, 13333)
    },
}
</script>









<style lang="scss">
/* autoprefixer: off */

.页面--示范页1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    .页面中央内容块 {
        margin: 0;
        width: 90%;
        max-width: 1000px;
    }

    hr {
        display: block;
        border-width: 0;
        min-height: 1px;
        max-height: 1px;
        background-color: transparent;
        background-image: linear-gradient(to right, transparent 0%, rgba(black, 0.1) 10% 90%, transparent 100%);
    }

    h3 {
        font-size: 2rem;
        text-align: center;
        margin: 0;
        padding: 1rem;
    }

    article {
        display: block;
        border-radius: 0.5rem;
        border-width: 1px;
        border-style: solid;
        margin: 1rem 0;
        padding: 0.5rem 1rem;

        border-color: #ccc;

        p, li {
            margin: 0.25rem 0;
        }

        &.消息框 {
            height: 4rem;
        }

        &.任务列表 {
            height: 50vh;
            min-height: 12rem;
            overflow: auto;

            ol {
                padding: 0 0 0 1.5rem;
            }

            li {
                padding: 0.1rem 0.5rem;
            }

            .el-checkbox em {
                margin-right: 2em;
            }

            .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
                background-color: #409eff;
                border-color: #409eff;
            }

            .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
                border-color: white;
            }

            .el-checkbox__input.is-disabled + span.el-checkbox__label {
                color: black;
            }

            .已取消 {

                .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
                    background-color: #f00;
                    border-color: #f00;
                }

                .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
                    border-color: white;
                }

                .el-checkbox__input.is-disabled + span.el-checkbox__label {
                    color: red;
                }
            }
        }
    }

    .el-select {
        width: 100%;
    }
}
</style>
