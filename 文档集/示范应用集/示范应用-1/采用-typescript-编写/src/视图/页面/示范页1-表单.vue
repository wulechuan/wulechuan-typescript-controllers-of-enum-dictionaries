<template>
    <div class="页面 页面--示范页1-常见的双列互通之形式">
        <div class="页面中央内容块">
            <el-form>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-select
                            v-model="表单之数据['填写项1']"
                            clearable
                            @change="当某表单项取值变动后('填写项1', $event)"
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

                    <el-col :span="12">
                        <el-select
                            v-model="表单之数据['填写项2']"
                            clearable
                            @change="当某表单项取值变动后('填写项2', $event)"
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
    范_字典群之总机,
    范_数据映射表_从界面措辞至值,
    范_数据映射表_从值至界面措辞,
    范_界面标准项_最简形态,
    范_任何字典_凭数据原项集构建诸数据映射表_默认做法,
    范_任何字典_凭某数据原项构建界面标准项_默认做法,
} from '@wulechuan/controllers-of-enum-dictionaries'





type 范_本页一切字典之数据原项 = {
    id: string;
    label: string;
};

type 范_本页一切字典之数据项值 = 范_本页一切字典之数据原项['id'];

type 范_本页一切字典之界面标准项 = 范_界面标准项_最简形态<范_本页一切字典之数据项值>;

type 范_本页字典群之总机 = 范_字典群之总机<范_本页一切字典之数据原项, 范_本页一切字典之界面标准项>;





const 任何字典_凭数据原项集构建诸数据映射表_默认做法: 范_任何字典_凭数据原项集构建诸数据映射表_默认做法<
    范_本页一切字典之数据原项,
    范_本页一切字典之数据项值
> = function (某字典之数据原项集) {
    const 从界面措辞至值: 范_数据映射表_从界面措辞至值 = {}
    const 从值至界面措辞: 范_数据映射表_从值至界面措辞 = {}

    某字典之数据原项集.forEach(某数据原项 => {
        const { id, label } = 某数据原项
        从值至界面措辞[id] = label
        从界面措辞至值[label] = id
    })

    return Promise.resolve({ 从界面措辞至值, 从值至界面措辞 })
}



const 任何字典_凭某数据原项构建界面标准项_默认做法: 范_任何字典_凭某数据原项构建界面标准项_默认做法<
    范_本页一切字典之数据原项,
    范_本页一切字典之界面标准项
> = function (某数据原项) {
    const { id, label } = 某数据原项
    return { 唯一标识: id, 在界面中的称谓: label, 值: id }
}





@Component({})
export default class Page示范页1_常见的双列互通之形式 extends Vue {
    public 表单之数据 = {
        填写项1: '',
        填写项2: '',
    }

    public 字典总机: null | 范_本页字典群之总机 = null

    get 字典界面项之列表_字典甲 (): 范_本页一切字典之界面标准项[] {
        const { 字典总机 } = this
        if (!字典总机) { return [] }
        return 字典总机.行为.取某字典之界面标准项之列表('字典甲')
    }

    get 字典界面项之列表_字典乙 (): 范_本页一切字典之界面标准项[] {
        const { 字典总机 } = this
        if (!字典总机) { return [] }
        return 字典总机.行为.取某字典之界面标准项之列表('字典乙')
    }





    private 初始化 (): void {
        const 字典总机 = 构建字典群之总机<范_本页一切字典之数据原项, 范_本页一切字典之界面标准项>({
            最初的一批用以构建字典机的配置项集之列表: [
                {
                    该字典之唯一标识: '字典甲',
                    事件处理程序集: {
                        构建或获取原始数据集 () {
                            const 数据原项集: 范_本页一切字典之数据原项[] = [
                                {
                                    id: '99',
                                    label: '九十九',
                                },
                            ]

                            return Promise.resolve(数据原项集)
                        },
                    },
                },

                {
                    该字典之唯一标识: '字典乙',
                    事件处理程序集: {
                        构建或获取原始数据集 () {
                            const 数据原项集: 范_本页一切字典之数据原项[] = [
                                {
                                    id: '22',
                                    label: '连衣裙',
                                },
                            ]

                            return Promise.resolve(数据原项集)
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
    }





    private mounted (): void {
        this.初始化()
    }

    private activated (): void {
        document.title = '字典群之总机·例1：表单（TypeScript）'
    }

    private 当某表单项取值变动后 (所涉填写项之称谓: string, 新值: string) {
        console.log(`填写项【${所涉填写项之称谓}】的取值变动了。变为：`, 新值)
    }
}
</script>









<style lang="stylus">
/* autoprefixer: off */

.页面--示范页1-常见的双列互通之形式 {
    height 100%
    display flex
    flex-direction column
    justify-content center
    align-items center

    .页面顶部功能区 {

    }

    .页面顶部的控制面板 {
        flex 0 0 32em
        display flex
        flex-direction row
        justify-content flex-end
        align-items center

        input {
            display block
            width 6em
        }

        button {
            flex 0 0 auto
        }
    }

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
}
</style>
