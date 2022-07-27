export function 是字典之合规的唯一标识 (待检验的唯一标识: any): boolean {
    if (![
        'string',
        // 'number',
    ].includes(typeof 待检验的唯一标识)) {
        return false
    }

    // if (typeof 待检验的唯一标识 === 'number' && !isFinite(待检验的唯一标识)) {
    //     return false
    // }

    return true
}



export function 是字典数据项之合规的唯一标识 (待检验的唯一标识: any): boolean {
    if (![
        'string',
        'number',
    ].includes(typeof 待检验的唯一标识)) {
        return false
    }

    if (typeof 待检验的唯一标识 === 'number' && !isFinite(待检验的唯一标识)) {
        return false
    }

    return true
}
