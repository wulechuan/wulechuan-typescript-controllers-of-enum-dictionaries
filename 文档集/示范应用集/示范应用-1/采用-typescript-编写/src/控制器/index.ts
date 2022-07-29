import type {
    范_数据映射表_从界面措辞至值,
    范_数据映射表_从值至界面措辞,
} from '@wulechuan/controllers-of-enum-dictionaries'

import type {
    范_本应用中一切字典机_凭字典条目之原式集构建诸数据映射表之行为,
    范_本应用中一切字典机_凭某字典条目之原式构建字典条目之视式之行为,
} from '../数据服务接口/types'



export const 任何字典_凭字典条目之原式集构建诸数据映射表_默认做法: 范_本应用中一切字典机_凭字典条目之原式集构建诸数据映射表之行为 = function (某字典之字典条目之原式集) {
    const 从界面措辞至值: 范_数据映射表_从界面措辞至值 = {}
    const 从值至界面措辞: 范_数据映射表_从值至界面措辞 = {}

    某字典之字典条目之原式集.forEach(某字典条目之原式 => {
        const { id, label } = 某字典条目之原式
        从值至界面措辞[id] = label
        从界面措辞至值[label] = id
    })

    return Promise.resolve({ 从界面措辞至值, 从值至界面措辞 })
}

export const 任何字典_凭某字典条目之原式构建字典条目之视式_默认做法: 范_本应用中一切字典机_凭某字典条目之原式构建字典条目之视式之行为 = function (某字典条目之原式) {
    const { id, label } = 某字典条目之原式
    return { 唯一标识: id, 在界面中的称谓: label, 值: id }
}
