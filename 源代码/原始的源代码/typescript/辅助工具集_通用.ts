export type 范_任意对象 = { [键: string]: any; };





export function 是合规的非列表对象 (待检验的值: any): 待检验的值 is 范_任意对象 {
    return !!待检验的值 && typeof 待检验的值 === 'object' && !Array.isArray(待检验的值)
}



export function 求合规的非列表对象_若不合规则给出null <范_期望之形态 extends 范_任意对象 = 范_任意对象>(待检验的值: any): null | 范_期望之形态 {
    if (!!待检验的值 && typeof 待检验的值 === 'object' && !Array.isArray(待检验的值)) {
        const 合规的值: 范_期望之形态 = 待检验的值
        return 合规的值
    } else {
        return null
    }
}



export function 求合规的非列表对象_按需构造空的对象 <范_期望之形态 extends 范_任意对象 = 范_任意对象>(待检验的值: any): 范_期望之形态 {
    if (!!待检验的值 && typeof 待检验的值 === 'object' && !Array.isArray(待检验的值)) {
        const 合规的值: 范_期望之形态 = 待检验的值
        return 合规的值
    } else {
        return {} as 范_期望之形态
    }
}
