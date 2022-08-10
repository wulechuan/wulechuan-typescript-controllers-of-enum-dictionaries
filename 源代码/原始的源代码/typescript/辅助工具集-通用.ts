/**
 * https://github.com/Microsoft/TypeScript/issues/212#issuecomment-63246576
 */
export function 以某This调用某函数 (
    指定的This: any,
    原始函数: (...参数表2: any[]) => any,
    ...参数表: any[]
): ReturnType<typeof 原始函数> {
    return 原始函数.call(指定的This, ...参数表);
}



export function 是合规的非列表对象 <
    范_期望之形态 extends object
>(
    待验值: unknown
): 待验值 is 范_期望之形态 {
    return !!待验值 && typeof 待验值 === 'object' && !Array.isArray(待验值)
}



export function 求合规的非列表对象_若不合规则给出null <
    范_期望之形态 extends object
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
    范_期望之形态 extends object
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
