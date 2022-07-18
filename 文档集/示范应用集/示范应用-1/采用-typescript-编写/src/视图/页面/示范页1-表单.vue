<template>
    <div class="页面 页面--示范页1-常见的双列互通之形式">
        <div class="页面中央内容块">
            <el-form>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-select
                            v-model="表单之数据['填写项1']"
                            @change="当某表单项取值变动后($event)"
                        >
                            <template v-for="字典界面项 in 字典界面项之列表_字典甲" >
                                <el-option
                                    :key="字典界面项.唯一标识"
                                    :label="字典界面项.界面措辞"
                                ></el-option>
                            </template>
                        </el-select>
                    </el-col>

                    <el-col :span="12">
                        <el-select
                            v-model="表单之数据['填写项2']"
                            @change="当某表单项取值变动后($event)"
                        >
                            <template v-for="字典界面项 in 字典界面项之列表_字典乙" >
                                <el-option
                                    :key="字典界面项.唯一标识"
                                    :label="字典界面项.界面措辞"
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
    // 范_界面标准数据项_最简形态,
    范_字典群之总机,
    范_数据映射表_从界面措辞至值,
    范_数据映射表_从值至界面措辞,
    范_界面标准数据项_默认形态,
} from '@wulechuan/controllers-of-enum-dictionaries'





type 范_本应用一切字典原始数据项 = {
    id: string;
    label: string;
};

type 范_本应用一切字典之界面标准数据项 = 范_界面标准数据项_默认形态;

type 范_字典群之总机_本部件专用 = 范_字典群之总机<Page示范页1_常见的双列互通之形式, 范_本应用一切字典原始数据项, 范_本应用一切字典之界面标准数据项>;





@Component({})
export default class Page示范页1_常见的双列互通之形式 extends Vue {
    public 表单之数据 = {
        填写项1: '',
        填写项2: '',
    }

    public 字典总机: null | 范_字典群之总机_本部件专用 = null

    get 字典界面项之列表_字典甲 (): 范_本应用一切字典之界面标准数据项[] {
        const { 字典总机 } = this
        if (!字典总机) { return [] }
        return 字典总机.行为.取字典机之列表形式的界面标准数据('字典甲')
    }

    get 字典界面项之列表_字典乙 (): 范_本应用一切字典之界面标准数据项[] {
        const { 字典总机 } = this
        if (!字典总机) { return [] }
        return 字典总机.行为.取字典机之列表形式的界面标准数据('字典乙')
    }





    private 初始化 (): void {
        const 字典总机 = 构建字典群之总机<Page示范页1_常见的双列互通之形式, 范_本应用一切字典原始数据项, 范_本应用一切字典之界面标准数据项>(this, {
            最初的一批用以构建字典机的配置项集之列表: [
                {
                    该字典的唯一标识: '字典甲',
                    自定义事件之处理程序集: {
                        获取或构建字典的原始数据 () {
                            const 原始数据项之列表: 范_本应用一切字典原始数据项[] = [
                                {
                                    id: '99',
                                    label: '九十九',
                                },
                            ]

                            return Promise.resolve(原始数据项之列表)
                        },
                    },
                },
            ],

            自定义事件之处理程序集: {
                根据某字典原始数据构建其映射器集的默认做法 (某字典之原始数据项之列表) {
                    const 从界面措辞至值: 范_数据映射表_从界面措辞至值 = {}
                    const 从值至界面措辞: 范_数据映射表_从值至界面措辞 = {}

                    某字典之原始数据项之列表.forEach(某原始数据项 => {
                        const { id, label } = 某原始数据项
                        从值至界面措辞[id] = label
                        从界面措辞至值[label] = id
                    })

                    return { 从界面措辞至值, 从值至界面措辞 }
                },

                根据某字典之某原始数据项构建其对应界面标准数据项的默认做法 (某原始数据项) {
                    const { id, label } = 某原始数据项
                    return { 唯一标识: id, 界面措辞: label, 值: id }
                },
            },
        })

        字典总机.行为.初始化()

        this.字典总机 = 字典总机
    }





    private mounted (): void {
        this.初始化()
    }

    private activated (): void {
        document.title = '字典群之总机·例1：表单（TypeScript）'
    }

    private 当某表单项取值变动后 () {
        console.log('变动了。')
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
