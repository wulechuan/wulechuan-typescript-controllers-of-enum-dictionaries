/**
 * @typedef {import('./types').范_本应用中一切字典之字典条目之原式} 范_本应用中一切字典之字典条目之原式
 * @typedef {import('./types').范_本应用中一切字典之字典条目之原式_其列表} 范_本应用中一切字典之字典条目之原式_其列表
 */



const 消息前缀 = '【示范项目·接口群1】：'



/**
 * @returns {Promise<范_本应用中一切字典之字典条目之原式_其列表>}
 */
export function 伪XHR接口_字典甲_获取数据列表 () {
    console.log(`${消息前缀} 发起虚拟的 XHR 请求：“字典甲”。`)

    return new Promise(落实 => setTimeout(落实, 1234)).then(() => {
        /** @type {范_本应用中一切字典之字典条目之原式_其列表} */
        const 数据列表 = [
            '九章算术',
            '诗经',
            '尚书',
            '楚辞',
            '本草纲目',
            '孙子兵法',
            '史记',
            '传习录',
        ].map((名典之名称, 其列表编号) => {
            /** @type {范_本应用中一切字典之字典条目之原式} */
            const 名典字典条目之原式 = {
                id: `${其列表编号 + 1}`,
                label: 名典之名称,
            }

            return 名典字典条目之原式
        })

        return 数据列表
    })
}



/**
 * @returns {Promise<范_本应用中一切字典之字典条目之原式_其列表>}
 */
export function 伪XHR接口_字典乙_获取数据列表 () {
    console.log(`${消息前缀} 发起虚拟的 XHR 请求：“字典乙”。`)

    return new Promise(落实 => setTimeout(落实, 4321)).then(() => {
        /** @type {范_本应用中一切字典之字典条目之原式_其列表} */
        const 数据列表 = [
            '霞帔',
            '明制披风',
            '明制贴里',
            '明制曳撒',
            '连衣裙',
            '九分裤',
            '宋制道袍',
            '唐制襦裙',
            '唐制圆领袍',
            '清代旗袍',
            '明制马面裙',
        ].map((名典之名称, 其列表编号) => {
            /**@type {范_本应用中一切字典之字典条目之原式} */
            const 名典字典条目之原式 = {
                id: `${其列表编号 + 1}`,
                label: 名典之名称,
            }

            return 名典字典条目之原式
        })

        return 数据列表
    })
}
