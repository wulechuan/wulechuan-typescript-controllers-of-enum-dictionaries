declare module '@wulechuan/controllers-of-enum-dictionaries' {

    export declare function 以某This调用某函数 (
        指定的This: any,
        原始函数: (...参数表2: any[]) => any,
        ...参数表: any[]
    ): ReturnType<typeof 原始函数>;

    export declare function 是合规的非列表对象 <范_期望之形态 extends object>(待验值: unknown): 待验值 is 范_期望之形态;
    export declare function 求合规的非列表对象_若不合规则给出null <范_期望之形态 extends object>(待验值: unknown): null | 范_期望之形态;
    export declare function 求合规的非列表对象_若不合规则给出空的对象 <范_期望之形态 extends object>(待验值: unknown): 范_期望之形态;

}
