export type 范_任意对象 = { [键: string]: any; };





export function 是合规的非列表对象 <
    范_期望之形态 extends 范_任意对象 = 范_任意对象
>(
    待验值: unknown
): 待验值 is 范_期望之形态 {
    return !!待验值 && typeof 待验值 === 'object' && !Array.isArray(待验值)
}



export function 求合规的非列表对象_若不合规则给出null <
    范_期望之形态 extends 范_任意对象 = 范_任意对象
>(
    待验值: unknown
): null | 范_期望之形态 {
    if (!!待验值 && typeof 待验值 === 'object' && !Array.isArray(待验值)) {
        const 合规的值 = 待验值 as 范_期望之形态
        return 合规的值
    } else {
        return null
    }
}



export function 求合规的非列表对象_若不合规则给出空的对象 <
    范_期望之形态 extends 范_任意对象 = 范_任意对象
>(
    待验值: unknown
): 范_期望之形态 {
    if (!!待验值 && typeof 待验值 === 'object' && !Array.isArray(待验值)) {
        const 合规的值 = 待验值 as 范_期望之形态
        return 合规的值
    } else {
        return {} as 范_期望之形态
    }
}
