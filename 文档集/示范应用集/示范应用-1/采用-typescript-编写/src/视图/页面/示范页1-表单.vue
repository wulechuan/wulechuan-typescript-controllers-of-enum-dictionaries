<template>
    <div class="页面 页面--示范页1">
        <div class="页面中央内容块">
            <el-form>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-select
                            v-model="表单之数据['填写项1']"
                            placeholder="请选择一种中华名典"
                            clearable
                            @change="当某表单项取值变动后('填写项（一）', $event, 字典机_字典甲)"
                        >
                            <template v-for="字典界面项 in 字典界面项之列表_字典甲" >
                                <el-option
                                    :key="字典界面项.唯一标识"
                                    :value="字典界面项.唯一标识"
                                    :label="字典界面项.在界面中的称谓"
                                ></el-option>
                            </template>
                        </el-select>
                    </el-col>

                    <el-col :span="8">
                        <el-select
                            v-model="表单之数据['填写项2']"
                            placeholder="请选择一种中华服饰"
                            clearable
                            @change="当某表单项取值变动后('填写项（二）', $event, 字典机_字典乙)"
                        >
                            <template v-for="字典界面项 in 字典界面项之列表_字典乙" >
                                <el-option
                                    :key="字典界面项.唯一标识"
                                    :value="字典界面项.唯一标识"
                                    :label="字典界面项.在界面中的称谓"
                                ></el-option>
                            </template>
                        </el-select>
                    </el-col>

                    <el-col :span="8">
                        <el-select
                            v-model="表单之数据['填写项3']"
                            placeholder="请选择一种中华明代服饰"
                            clearable
                            @change="当某表单项取值变动后('填写项（三）', $event, 字典机_字典丙)"
                        >
                            <template v-for="字典界面项 in 字典界面项之列表_字典丙" >
                                <el-option
                                    :key="字典界面项.唯一标识"
                                    :value="字典界面项.唯一标识"
                                    :label="字典界面项.在界面中的称谓"
                                ></el-option>
                            </template>
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
    构建字典群之总机,
} from '@wulechuan/controllers-of-enum-dictionaries'

import type {
    范_本应用中一切字典之数据原项,
    范_本应用中一切字典之界面标准项,
    范_本应用中一切字典群之总机,
    范_本应用中一切字典机,
} from '@/数据服务接口/types'

import {
    伪XHR接口_字典甲_获取数据列表,
    伪XHR接口_字典乙_获取数据列表,
} from '@/数据服务接口'

import{
    任何字典_凭数据原项集构建诸数据映射表_默认做法,
    任何字典_凭某数据原项构建界面标准项_默认做法,
} from '@/控制器'





@Component({})
export default class Page示范页1_常见的双列互通之形式 extends Vue {
    private 表单之数据 = {
        填写项1: '',
        填写项2: '',
        填写项3: '',
    }

    private 字典总机: null | 范_本应用中一切字典群之总机 = null

    private get 字典机_字典甲 (): null | 范_本应用中一切字典机 { return this.字典总机 && this.字典总机.行为.取某字典机('字典甲') }
    private get 字典机_字典乙 (): null | 范_本应用中一切字典机 { return this.字典总机 && this.字典总机.行为.取某字典机('字典乙') }
    private get 字典机_字典丙 (): null | 范_本应用中一切字典机 { return this.字典总机 && this.字典总机.行为.取某字典机('字典丙') }

    private get 字典界面项之列表_字典甲 (): 范_本应用中一切字典之界面标准项[] { return !this.字典总机 ? [] : this.字典总机.行为.取某字典之界面标准项之列表('字典甲') }
    private get 字典界面项之列表_字典乙 (): 范_本应用中一切字典之界面标准项[] { return !this.字典总机 ? [] : this.字典总机.行为.取某字典之界面标准项之列表('字典乙') }
    private get 字典界面项之列表_字典丙 (): 范_本应用中一切字典之界面标准项[] { return !this.字典总机 ? [] : this.字典总机.行为.取某字典之界面标准项之列表('字典丙') }





    private 制作字典群之总机 (): void {
        const 字典总机 = 构建字典群之总机<范_本应用中一切字典之数据原项, 范_本应用中一切字典之界面标准项>({
            最初的一批用以构建字典机的配置项集之列表: [
                {
                    该字典之唯一标识: '字典甲',
                    事件处理程序集: { 构建或获取原始数据集: 伪XHR接口_字典甲_获取数据列表 },
                },

                {
                    该字典之唯一标识: '字典乙',
                    事件处理程序集: { 构建或获取原始数据集: 伪XHR接口_字典乙_获取数据列表 },
                },

                {
                    该字典之唯一标识: '字典丙',

                    配置项集: {
                        在该字典所属的字典群初始化时不应获取或构建该字典的数据: true,

                        代表全选的字典项: {
                            界面标准项: {
                                唯一标识: '-全-',
                                值: '-全-',
                                在界面中的称谓: '〔全选〕',
                            },
                        },
                    },

                    事件处理程序集: {
                        构建或获取原始数据集: () => {
                            const { 字典机_字典乙 } = this
                            if (!字典机_字典乙) { return Promise.resolve([]) }

                            const 字典乙之数据原项集 = 字典机_字典乙.数据集.数据原项集
                            if (!字典乙之数据原项集) { return Promise.resolve([]) }

                            return Promise.resolve(
                                字典乙之数据原项集.filter(乙之某数据原项 => /明制/.test(乙之某数据原项.label))
                            )
                        },
                    },
                },
            ],

            事件处理程序集: {
                任何字典_凭数据原项集构建诸数据映射表_默认做法,
                任何字典_凭某数据原项构建界面标准项_默认做法,
            },
        })

        this.字典总机 = 字典总机

        this.字典总机.状态集.期待_初始化任务已完成.then(() => {
            const 字典总机: 范_本应用中一切字典群之总机 = this.字典总机!
            字典总机.行为.取某字典机('字典丙')?.行为.重建数据()
        })
    }





    private mounted (): void {
        this.制作字典群之总机()
    }

    private activated (): void {
        document.title = '字典群之总机·例1：表单（TypeScript）'
    }

    private 当某表单项取值变动后 (所涉填写项之称谓: string, 新值: string, 所涉字典机: 范_本应用中一切字典机) {
        const 新值之称谓 = 所涉字典机.行为.求某项值之称谓(新值)
        console.log(`填写项【${所涉填写项之称谓}】的取值变动了。变为：`, 新值之称谓, `（${新值}）。`)
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

    .el-select {
        width: 100%;
    }
}
</style>
