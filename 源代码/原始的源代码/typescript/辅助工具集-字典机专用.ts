// import type {
//     范_字典_唯一标识,
//     范_字典条目_唯一标识,
// } from '../types/料-字典'

// import type {
//     范_字典群之总机,
// } from '../types/机-字典群之总机'

import type {
    范_字典_唯一标识,
    范_字典条目_唯一标识,
    范_字典群之总机,
} from '@wulechuan/controllers-of-enum-dictionaries'





import {
    是合规的非列表对象,
} from './辅助工具集-通用'





export function 是字典之合规的唯一标识 (待验值: any): 待验值 is 范_字典_唯一标识 {
    if (![
        'string',
        // 'number',
    ].includes(typeof 待验值)) {
        return false
    }

    // if (typeof 待验值 === 'number' && !isFinite(待验值)) {
    //     return false
    // }

    return true
}



export function 是字典数据项之合规的唯一标识 (待验值: any): 待验值 is 范_字典条目_唯一标识 {
    if (![
        'string',
        'number',
    ].includes(typeof 待验值)) {
        return false
    }

    if (typeof 待验值 === 'number' && !isFinite(待验值)) {
        return false
    }

    return true
}



export function 是合规的字典群之总机之实例 (待验值: unknown): 待验值 is 范_字典群之总机 {
    if (!是合规的非列表对象<范_字典群之总机>(待验值)) {
        return false
    }

    const { 该字典群之称谓, 所持, 应对 } = 待验值
    if (typeof 该字典群之称谓 !== 'string') { return false }
    if (!是合规的非列表对象(所持)) { return false }
    if (!是合规的非列表对象(应对)) { return false }

    const { 字典机群 } = 所持
    if (!是合规的非列表对象(字典机群)) { return false }

    const { 其列表, 其哈希表 } = 字典机群
    if (!Array.isArray(其列表)) { return false }
    if (!是合规的非列表对象(其哈希表)) { return false }

    return true
}
