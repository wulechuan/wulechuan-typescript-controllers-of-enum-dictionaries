import type {
    范_字典_唯一标识,
    范_字典条目_唯一标识,
} from './index'





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
