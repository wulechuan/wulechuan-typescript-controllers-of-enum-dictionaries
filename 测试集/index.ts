import {
    构建字典群之总机,
    范_界面标准数据项_默认形态,
} from '@wulechuan/controller-of-dictionaries'

const FakeVue = {}

type 范_原始数据项 = {
    id: string;
    label: string;
}

const 总机 = 构建字典群之总机<范_界面标准数据项_默认形态, 范_原始数据项, typeof FakeVue>(FakeVue, {
    最初的一批用以构建字典机的配置项集之列表: [
        {
            该字典的唯一标识: '字典甲',
            自定义事件之处理程序集: {
                获取或构建字典的原始数据 () {
                    const 原始数据列表: 范_原始数据项[] = [
                        {
                            id: '99',
                            label: 'xxx',
                        },
                        {
                            id: '77',
                            label: 'mmm',
                        },
                    ]

                    return Promise.resolve(原始数据列表)
                },
            },
        },
    ],
})

console.log('总机', 总机)
