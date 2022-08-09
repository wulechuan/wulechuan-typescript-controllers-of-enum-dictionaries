<template>
    <div class="页面 页面--示范页1">
        <div class="页面中央内容块">
            <el-row>
                <article>
                    <p>{{ 当下呈现的消息 }}</p>
                </article>
            </el-row>

            <el-row>
                <el-button type="danger" @click="删除字典('字典乙')">删除【字典乙】</el-button>
                <el-button type="success" @click="重新创建字典乙()">重构【字典乙】</el-button>
            </el-row>

            <hr>

            <el-form>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-select
                            v-model="表单之数据['填写项1']"
                            placeholder="请选择一种中华名典"
                            clearable
                            @change="当某表单项之值变动后('填写项（一）', $event, 字典机_字典甲())"
                        >
                            <el-option
                                v-for="字典条目之视式 in 字典条目之视式之列表_字典甲()"
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
                            @change="当某表单项之值变动后('填写项（二）', $event, 字典机_字典乙())"
                        >
                            <el-option
                                v-for="字典条目之视式 in 字典条目之视式之列表_字典乙()"
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
                            @change="当某表单项之值变动后('填写项（三）', $event, 字典机_字典丙())"
                        >
                            <el-option
                                v-for="字典条目之视式 in 字典条目之视式之列表_字典丙()"
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









<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import {
    作一字典群之总机,
} from '@wulechuan/controllers-of-enum-dictionaries'

import type {
    范_字典_唯一标识,
    范_工厂函数_作一字典群之总机,
} from '@wulechuan/controllers-of-enum-dictionaries'

import type {
    范_本应用中一切字典之字典条目之原式,
    范_本应用中一切字典之字典条目之视式,
    范_本应用中一切字典群之总机,
    范_本应用中一切字典机,
    范_字典机_形制要求总集_准用式,
} from '@/数据服务接口/types'

import {
    伪XHR接口_字典甲_获取数据列表,
    伪XHR接口_字典乙_获取数据列表,
} from '@/数据服务接口'

import{
    内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法,
    内任何所谓标准字典_凭某条目之原式构建其视式_默认做法,
} from '@/控制器'





const 消息前缀 = '示范页1：'





const 诸字典之构建配置总集之列表: 范_字典机_形制要求总集_准用式<
    范_本应用中一切字典之字典条目之原式,
    范_本应用中一切字典之字典条目之视式
>[] = [
    {
        该字典之唯一标识: '字典甲',
        诸事之应对: { 构建或获取该字典所有条目之原式: 伪XHR接口_字典甲_获取数据列表 },
    },

    {
        该字典之唯一标识: '字典乙',
        诸事之应对: { 构建或获取该字典所有条目之原式: 伪XHR接口_字典乙_获取数据列表 },
    },

    {
        该字典之唯一标识: '字典丙',

        形制要求杂集: {
            该字典在默认情形下不参与字典群总机发起的数据重建任务: true,
        },

        所持: {
            字典特别条目_其代表全选者: {
                字典条目之视式: {
                    唯一标识: '-全-',
                    值: '-全-',
                    呈示称谓: '〔我包圆了〕',
                },
            },
        },

        诸事之应对: {
            构建或获取该字典所有条目之原式 (this: Page示范页1) {
                const 字典机_字典乙 = this.字典总机!.为.取某字典机('字典乙')
                if (!字典机_字典乙) { return Promise.resolve([]) }

                const 字典乙诸条目之原式_其列表 = 字典机_字典乙.所持.该字典诸条目之原式_其列表
                if (!Array.isArray(字典乙诸条目之原式_其列表)) { return Promise.resolve([]) }

                return Promise.resolve(
                    字典乙诸条目之原式_其列表.filter(
                        字典乙某条目之原式 => /明制/.test(字典乙某条目之原式.label)
                    )
                )
            },
        },
    },
]





@Component({})
export default class Page示范页1 extends Vue {
    private 表单之数据 = {
        填写项1: '',
        填写项2: '',
        填写项3: '',
    }

    private 当下呈现的消息 = '暂无消息。'

    private 字典总机: null | 范_本应用中一切字典群之总机<Page示范页1> = null



    private 字典机_字典甲 (): null | 范_本应用中一切字典机 { return this.字典总机 && this.字典总机.为.取某字典机('字典甲') }
    private 字典机_字典乙 (): null | 范_本应用中一切字典机 { return this.字典总机 && this.字典总机.为.取某字典机('字典乙') }
    private 字典机_字典丙 (): null | 范_本应用中一切字典机 { return this.字典总机 && this.字典总机.为.取某字典机('字典丙') }

    private 字典条目之视式之列表_字典甲 (): 范_本应用中一切字典之字典条目之视式[] { return !this.字典总机 ? [] : this.字典总机.为.取某字典诸条目之视式_其列表('字典甲') }
    private 字典条目之视式之列表_字典乙 (): 范_本应用中一切字典之字典条目之视式[] { return !this.字典总机 ? [] : this.字典总机.为.取某字典诸条目之视式_其列表('字典乙') }
    private 字典条目之视式之列表_字典丙 (): 范_本应用中一切字典之字典条目之视式[] { return !this.字典总机 ? [] : this.字典总机.为.取某字典诸条目之视式_其列表('字典丙') }

    private 当某表单项之值变动后 (所涉填写项之称谓: string, 新值: string, 所涉字典机: undefined | 范_本应用中一切字典机): void {
        let 消息: string

        if (!所涉字典机) {
            消息 = `填写项【${所涉填写项之称谓}】幕后的【字典】已不存在。`
        } else {
            const 新值之称谓 = 所涉字典机.为.凭某条目之值求其呈示称谓(新值)
            消息 = `填写项【${所涉填写项之称谓}】的【值】变动了。变为：“${新值之称谓}”，对应的【值】为 “${新值}” 。`
        }

        console.log(`${消息前缀}\n    ${消息}`)
        this.当下呈现的消息 = 消息
    }

    private 删除字典 (字典之唯一标识: 范_字典_唯一标识): void {
        this.字典总机?.为.删除一批字典([ 字典之唯一标识 ])

        const 消息 = `【字典】 “${字典之唯一标识}” 已删除。`
        console.log(`${消息前缀}\n    ${消息}`)
        this.当下呈现的消息 = 消息
    }

    private 令所有字典重建数据 (): void {
        this.字典总机?.为.令所有字典按需重建数据('强制一切字典参与，不论其是否已构建好数据')
    }

    private 重新创建字典乙 (): void {
        this.字典总机?.为.追加一批字典([ 诸字典之构建配置总集之列表[1] ])

        const 消息 = '【字典】 “字典乙” 已创建。'
        console.log(`${消息前缀}\n    ${消息}`)
        this.当下呈现的消息 = 消息
    }

    private 令已经存在的字典乙重建数 (): void {
        this.字典总机?.为.取某字典机('字典乙')?.为.重建数据()
    }



    private mounted (this: Page示范页1): void {
        this.字典总机 = (作一字典群之总机 as 范_工厂函数_作一字典群之总机<
            范_本应用中一切字典之字典条目之原式,
            范_本应用中一切字典之字典条目之视式,
            Page示范页1
        >).call(
            this,

            {
                该字典群之称谓: '示范页1中唯一的字典群总机',

                第一批字典机形制要求总集_其列表: 诸字典之构建配置总集之列表,

                诸事之应对: {
                    内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法,

                    内任何所谓标准字典_凭某条目之原式构建其视式_默认做法,

                    任何字典_某次数据重建后 (this: Page示范页1, 该字典群之总机, 所涉字典机) {
                        if (所涉字典机.该字典之唯一标识 === '字典乙') {
                            该字典群之总机.为.取某字典机('字典丙')?.为.重建数据()
                        }
                    },
                },
            }
        )
    }

    private activated (): void {
        document.title = '字典群之总机·例1：表单（TypeScript）'

        /**
         * 接口代码已故意令伪造的接口较慢，须数秒钟。
         * 而下面的代码则在字典乙尚未重建完毕时故意再次要求起重建。
         * 如果代码运转如期，应在浏览器控制台中观测到消息，告知我们字典乙不会并行多个数据重建任务。
         */
        this.$nextTick().then(this.令已经存在的字典乙重建数)

        /**
         * 下面的代码则在等待足够长的时间后（确保字典乙数据重建完毕后），故意要求字典乙再次重建数据。
         * 如果代码运转如期，应观测到字典乙的确重新构建了。
         */
        setTimeout(this.令已经存在的字典乙重建数, 9981)

        setTimeout(this.令所有字典重建数据, 333)
        setTimeout(this.令所有字典重建数据, 3333)
        setTimeout(this.令所有字典重建数据, 13333)
    }
}
</script>









<style lang="stylus">
/* autoprefixer: off */

.页面--示范页1 {
    height 100%
    display flex
    flex-direction column
    justify-content center
    align-items center

    .页面中央内容块 {
        margin 0
        width 90%
        max-width 1000px
        height 90%
    }

    h3 {
        font-size 2rem
        text-align center
        margin 0
        padding 1rem
    }

    article {
        display block
        height 4rem
        border-radius 0.5rem
        border-width 1px
        border-style solid
        margin 1rem 0
        padding 0.5rem 1rem

        border-color #ccc

        p {
            margin 0.25rem 0
        }
    }

    .el-select {
        width: 100%;
    }
}
</style>
