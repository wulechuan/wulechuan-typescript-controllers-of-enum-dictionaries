import {
    作一字典群之总机,
    范_字典条目之视式_默认形态,
} from '@wulechuan/controller-of-dictionaries'

const FakeVue = {}

type 范_字典条目之原式 = {
    id: string;
    label: string;
}

const 总机 = 作一字典群之总机<范_字典条目之视式_默认形态, 范_字典条目之原式, typeof FakeVue>(FakeVue, {
    第一批字典机形制要求总集_其列表: [
        {
            该字典之唯一标识: '字典甲',
            诸事之应对: {
                构建或获取该字典所有条目之原式 () {
                    const 该字典诸条目之原式_其列表: 范_字典条目之原式[] = [
                        {
                            id: '99',
                            label: 'xxx',
                        },
                        {
                            id: '77',
                            label: 'mmm',
                        },
                    ]

                    return Promise.resolve(该字典诸条目之原式_其列表)
                },
            },
        },
    ],
})

console.log('总机', 总机)
