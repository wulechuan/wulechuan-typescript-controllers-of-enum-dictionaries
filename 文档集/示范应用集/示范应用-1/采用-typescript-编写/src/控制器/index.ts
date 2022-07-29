import type {
    范_数据映射表_从界面措辞至值,
    范_数据映射表_从值至界面措辞,
} from '@wulechuan/controllers-of-enum-dictionaries'

import type {
    范_本应用中一切字典机_凭数据原项集构建诸数据映射表之行为,
    范_本应用中一切字典机_凭某数据原项构建数据视项之行为,
} from '../数据服务接口/types'



export const 任何字典_凭数据原项集构建诸数据映射表_默认做法: 范_本应用中一切字典机_凭数据原项集构建诸数据映射表之行为 = function (某字典之数据原项集) {
    const 从界面措辞至值: 范_数据映射表_从界面措辞至值 = {}
    const 从值至界面措辞: 范_数据映射表_从值至界面措辞 = {}

    某字典之数据原项集.forEach(某数据原项 => {
        const { id, label } = 某数据原项
        从值至界面措辞[id] = label
        从界面措辞至值[label] = id
    })

    return Promise.resolve({ 从界面措辞至值, 从值至界面措辞 })
}

export const 任何字典_凭某数据原项构建数据视项_默认做法: 范_本应用中一切字典机_凭某数据原项构建数据视项之行为 = function (某数据原项) {
    const { id, label } = 某数据原项
    return { 唯一标识: id, 在界面中的称谓: label, 值: id }
}
