import {
    构建字典群之总机,
    范_界面标准项_默认形态,
} from '@wulechuan/controller-of-dictionaries'

const FakeVue = {}

type 范_数据原项 = {
    id: string;
    label: string;
}

const 总机 = 构建字典群之总机<范_界面标准项_默认形态, 范_数据原项, typeof FakeVue>(FakeVue, {
    最初的一批用以构建字典机的配置项集之列表: [
        {
            该字典之唯一标识: '字典甲',
            事件处理程序集: {
                构建或获取原始数据集 () {
                    const 数据原项集: 范_数据原项[] = [
                        {
                            id: '99',
                            label: 'xxx',
                        },
                        {
                            id: '77',
                            label: 'mmm',
                        },
                    ]

                    return Promise.resolve(数据原项集)
                },
            },
        },
    ],
})

console.log('总机', 总机)
