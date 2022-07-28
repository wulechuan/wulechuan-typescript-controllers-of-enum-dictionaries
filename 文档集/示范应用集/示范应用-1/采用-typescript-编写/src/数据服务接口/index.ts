import type {
    范_本应用中一切字典之数据原项,
} from '@/数据服务接口/types'

export function 伪XHR接口_字典甲_获取数据列表 (): Promise<Array<范_本应用中一切字典之数据原项>> {
    return new Promise(落实 => setTimeout(落实, 219)).then(() => {
        const 数据列表: Array<范_本应用中一切字典之数据原项> = [
            '九章算术',
            '诗经',
            '尚书',
            '楚辞',
            '本草纲目',
            '孙子兵法',
            '史记',
            '传习录',
        ].map((名典之名称, 其列表编号) => {
            const 名典数据原项: 范_本应用中一切字典之数据原项 = {
                id: `${其列表编号 + 1}`,
                label: 名典之名称,
            }

            return 名典数据原项
        })

        return 数据列表
    })
}



export function 伪XHR接口_字典乙_获取数据列表 (): Promise<Array<范_本应用中一切字典之数据原项>> {
    return new Promise(落实 => setTimeout(落实, 319)).then(() => {
        const 数据列表: Array<范_本应用中一切字典之数据原项> = [
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
            const 名典数据原项: 范_本应用中一切字典之数据原项 = {
                id: `${其列表编号 + 1}`,
                label: 名典之名称,
            }

            return 名典数据原项
        })

        return 数据列表
    })
}
