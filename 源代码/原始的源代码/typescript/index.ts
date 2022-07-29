import {
    是合规的非列表对象,
    求合规的非列表对象_若不合规则给出空的对象,
    求合规的非列表对象_若不合规则给出null,
} from './辅助工具集_通用'

import {
    是字典之合规的唯一标识,
    // 是字典数据项之合规的唯一标识,
} from './辅助工具集_字典机专用'

export * from './辅助工具集_字典机专用'





export type 范_字典之唯一标识 = string;
export type 范_字典条目之唯一标识 = string | number;

export interface 范_字典条目之视式_最简式<范_字典条目之值 = any, 范_负载 = any> {
    唯一标识: 范_字典条目之唯一标识;
    在界面中的称谓: string;
    值: 范_字典条目之值;
}



export type 范_字典诸条目之视式_其列表<
    范_字典条目之视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = Array<范_字典条目之视式>;

export type 范_字典诸条目之视式_其哈希表<
    范_字典条目之视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = Record<string, 范_字典条目之视式>;



export type 范_字典条目内容映射表_从呈示称谓至值<范_字典条目之值 = any> = Record<string, 范_字典条目之值>;
export type 范_字典条目内容映射表_从值至呈示称谓 = { [条目之值对应之文本: string]: string; };

export type 范_字典条目内容映射表集<
    范_该字典_条目之值 = any
> = {
    从呈示称谓至值: 范_字典条目内容映射表_从呈示称谓至值<范_该字典_条目之值>;
    从值至呈示称谓: 范_字典条目内容映射表_从值至呈示称谓;
};



export type 范_某字典_代表全选的字典条目_完备式<
    范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = {
    应位于候选列表之该处: '首部' | '尾部';
    字典条目之视式: 范_该字典_条目视式;
};

export type 范_某字典_代表全选的字典条目_准用式<
    范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = {
    应位于候选列表之该处?: '首部' | '尾部';
    字典条目之视式: Omit<范_该字典_条目视式, '在界面中的称谓'> & { 在界面中的称谓?: string; };
};

export type 范_某字典_代表全都不选的字典条目_完备式<
    范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = {
    应位于候选列表之该处: '首部' | '尾部';
    字典条目之视式: 范_该字典_条目视式;
};

export type 范_某字典_代表全都不选的字典条目_准用式<
    范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = {
    应位于候选列表之该处?: '首部' | '尾部';
    字典条目之视式: Omit<范_该字典_条目视式, '在界面中的称谓'> & { 在界面中的称谓?: string; };
};



/**
 * -   `'不必构建'`
 *
 *     我假想有些字典表虽然项值数量有限，但项值之取值可能性则为无限。
 *     故而设计该种方案。
 *
 *     例如，某字典表为某种【款项】之列表。于这样的字典表，
 *     其各项之【界面措辞】须借助所谓【格式化程序】求得。
 *     所谓格式化，比如将数字按英美制（所谓“国际制”）的三位一组分隔。
 *     又如将数字转换为汉字形式等。
 *     于此种情形，我认为没必要为该种字典构建【字典条目内容映射表】，因实用价值不高。
 *
 * ------------------------------------------------------------
 *
 * -   `'从该字典条目之原式之集提取而得'`
 *
 *     较多的服务端程序员提供的字典【字典条目之原式】会同时包含【值】与【自然语言称谓】。
 *     典型的如：`{ id, name }` 或 `{ value, label }` 等。
 *
 *     于此种情形，【字典条目内容映射表】应借助该【字典条目之原式】表构建而得。
 *     且于【字典条目之视式】表而言，这些【字典条目内容映射表】无用途，即为备用。
 *
 * ------------------------------------------------------------
 *
 * -   `'脱离该字典条目之原式之集而构建，仅一次即可'`
 *
 *     有些简单的字典，客户端会“写死”一个或一对哈希表，
 *     用以映射【值 ~ 界面措辞】，而不是通过 XHR 从服务端获取。
 *     故而设计该种方案。
 *
 *     于此种情形，服务端给出的【字典条目之原式】不应该提供【自然语言称谓】字段，
 *     否则该字典的诸【字典条目内容映射表】之构建方案没必要配置为该种方案。
 *     且【字典条目内容映射表】应当参与【字典条目之视式】表的构建过程。
 *     即，【字典条目之视式】依赖【字典条目内容映射表】。
 *
 * ------------------------------------------------------------
 *
 * -   `'脱离该字典条目之原式之集而构建，且须反复获取或构建'`
 *
 *     此为假想的情形。暂无例证。即，此为预备值，暂不推荐采用。
 */
export type 范_单个字典构建诸字典条目内容映射表之方案 = (
    | '不必构建'
    | '从该字典条目之原式之集提取而得'
    | '脱离该字典条目之原式之集而构建，仅一次即可'
    | '脱离该字典条目之原式之集而构建，且须反复获取或构建'
);

export const 单个字典构建诸字典条目内容映射表时之各色候选方案: Array<范_单个字典构建诸字典条目内容映射表之方案> = [
    '不必构建',
    '从该字典条目之原式之集提取而得',
    '脱离该字典条目之原式之集而构建，仅一次即可',
    '脱离该字典条目之原式之集而构建，且须反复获取或构建',
]

export const 单个字典构建诸字典条目内容映射表时之默认方案: 范_单个字典构建诸字典条目内容映射表之方案 = '从该字典条目之原式之集提取而得'



export type 范_字典机_构建时所用配置总集_完备式<
    范_该字典_条目原式 = any,
    范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>,
> = {
    该字典之唯一标识: string;

    配置集: {
        代表全选的字典条目?: null | 范_某字典_代表全选的字典条目_准用式<范_该字典_条目视式>;
        代表全都不选的字典条目?: null | 范_某字典_代表全都不选的字典条目_准用式<范_该字典_条目视式>;

        该字典构建诸字典条目内容映射表之方案?: 范_单个字典构建诸字典条目内容映射表之方案;

        该字典并不参与字典群总机发起的所谓数据自动构建任务?: boolean;
        应构建字典条目之视式之哈希表?: boolean;
    };

    事件处理程序集: {
        构建或获取原始数据集?: (
            ...参数表: any[]
        ) => Promise<Array<范_该字典_条目原式>>;

        脱离该字典条目之原式之集构建诸字典条目内容映射表?: (
        ) => Promise<范_字典条目内容映射表集<范_该字典_条目视式['值']>>;

        凭该字典条目之原式之集构建诸字典条目内容映射表?: (
            该字典_诸条目原式_其列表: Array<范_该字典_条目原式>
        ) => Promise<范_字典条目内容映射表集<范_该字典_条目视式['值']>>;

        凭该字典某条目之原式构建该条目之视式?: (
            该字典_某条目之原式: 范_该字典_条目原式
        ) => 范_该字典_条目视式;

        该字典每次数据重建后?: (
            该字典机: 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>
        ) => void;

        _该字典每次数据重建后_在幕后通知所属字典群之总机: (
            该字典机: 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>
        ) => void;
    };
};

export type 范_字典机_构建时所用配置总集_对所属总机的准用式<
    范_该字典_条目原式 = any,
    范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = {
    该字典之唯一标识: string;

    配置集?: {
        代表全选的字典条目?: null | 范_某字典_代表全选的字典条目_准用式<范_该字典_条目视式>;
        代表全都不选的字典条目?: null | 范_某字典_代表全都不选的字典条目_准用式<范_该字典_条目视式>;

        该字典构建诸字典条目内容映射表之方案?: 范_单个字典构建诸字典条目内容映射表之方案;

        该字典并不参与字典群总机发起的所谓数据自动构建任务?: boolean;
        应构建字典条目之视式之哈希表?: boolean;
    };

    事件处理程序集?: {
        构建或获取原始数据集?: (
            ...参数表: any[]
        ) => Promise<Array<范_该字典_条目原式>>;

        脱离该字典条目之原式之集构建诸字典条目内容映射表?: (
        ) => Promise<范_字典条目内容映射表集<范_该字典_条目视式['值']>>;

        凭该字典条目之原式之集构建诸字典条目内容映射表?: (
            该字典_诸条目原式_其列表: Array<范_该字典_条目原式>
        ) => Promise<范_字典条目内容映射表集<范_该字典_条目视式['值']>>;

        凭该字典某条目之原式构建该条目之视式?: (
            该字典_某条目之原式: 范_该字典_条目原式
        ) => 范_该字典_条目视式;

        该字典每次数据重建后?: (
            该字典机: 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>
        ) => void;

        _该字典每次数据重建后_在幕后通知所属字典群之总机: (
            该字典机: 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>
        ) => void;
    };
};

export type 范_字典机_构建时所用配置总集_对外的准用式<
    范_该字典_条目原式 = any,
    范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = {
    该字典之唯一标识: string;

    配置集?: {
        代表全选的字典条目?: null | 范_某字典_代表全选的字典条目_准用式<范_该字典_条目视式>;
        代表全都不选的字典条目?: null | 范_某字典_代表全都不选的字典条目_准用式<范_该字典_条目视式>;

        该字典构建诸字典条目内容映射表之方案?: 范_单个字典构建诸字典条目内容映射表之方案;

        该字典并不参与字典群总机发起的所谓数据自动构建任务?: boolean;
        应构建字典条目之视式之哈希表?: boolean;
    };

    事件处理程序集?: {
        构建或获取原始数据集?: (
            ...参数表: any[]
        ) => Promise<Array<范_该字典_条目原式>>;

        脱离该字典条目之原式之集构建诸字典条目内容映射表?: (
        ) => Promise<范_字典条目内容映射表集<范_该字典_条目视式['值']>>;

        凭该字典条目之原式之集构建诸字典条目内容映射表?: (
            该字典_诸条目原式_其列表: Array<范_该字典_条目原式>
        ) => Promise<范_字典条目内容映射表集<范_该字典_条目视式['值']>>;

        凭该字典某条目之原式构建该条目之视式?: (
            该字典_某条目之原式: 范_该字典_条目原式
        ) => 范_该字典_条目视式;

        该字典每次数据重建后?: (
            该字典机: 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>
        ) => void;
    };
};



export type 范_字典机<
    范_该字典_条目原式 = any,
    范_该字典_条目视式 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = {
    该字典之唯一标识: string;

    态: {
        该字典构建诸字典条目内容映射表之方案: 范_单个字典构建诸字典条目内容映射表之方案;
        该字典诸字典条目内容映射表业已构建完毕: boolean;

        /**
         * 有些字典，依赖于其它变量，须临时反复构建。且往往在模块加载初始时不必构建。
         *
         * 例如，【中标企业】须在【已参选的投标企业】中选择。
         * 故【中标企业】对应的候选列表字典应根据【已参选企业】这一变量的值来临时构建。
         */
        该字典并不参与字典群总机发起的所谓数据自动构建任务: boolean;

        /**
         * 该所谓“逆向”哈希表用途不广，不及列表形式。故默认不构建该哈希表，以节省计算。
         * 但为了简化【守卫】代码，即便不构建该哈希表，本工具仍令该哈希表之取值为 {} ，而非 null 。
         */
        应构建字典条目之视式之哈希表: boolean;

        当下的数据系某次成功构建而得的: boolean;
    };

    数据集: {
        代表全选的字典条目: null | 范_某字典_代表全选的字典条目_完备式<范_该字典_条目视式>;
        代表全都不选的字典条目: null | 范_某字典_代表全都不选的字典条目_完备式<范_该字典_条目视式>;

        字典条目之原式集: null | Array<范_该字典_条目原式>;

        字典条目之视式集: {
            列表形式: 范_字典诸条目之视式_其列表<范_该字典_条目视式>;
            哈希表形式: 范_字典诸条目之视式_其哈希表<范_该字典_条目视式>;
        };

        字典条目内容映射表集: 范_字典条目内容映射表集<范_该字典_条目视式['值']>;
    };

    为: {
        清空数据: () => void;
        重建数据: (...用以获取字典条目之原式集的参数表: any[]) => Promise<void>;
        求某项值之称谓: (项值?: any) => string | null | undefined;
    };

    _暗为: {
        _凭字典条目之原式集构建字典条目之视式集: () => void;
        _按需构建诸字典条目内容映射表: () => Promise<void>;
        _发布消息_数据已重建一次: () => void;
    };

    _事件处理程序集: {
        构建或获取原始数据集: (
            ...参数表: any[]
        ) => Promise<Array<范_该字典_条目原式>>;

        脱离该字典条目之原式之集构建诸字典条目内容映射表?: (
        ) => Promise<范_字典条目内容映射表集<范_该字典_条目视式['值']>>;

        凭该字典条目之原式之集构建诸字典条目内容映射表?: (
            该字典_诸条目原式_其列表: Array<范_该字典_条目原式>
        ) => Promise<范_字典条目内容映射表集<范_该字典_条目视式['值']>>;

        凭该字典某条目之原式构建该条目之视式: (
            该字典_某条目之原式: 范_该字典_条目原式
        ) => 范_该字典_条目视式;

        该字典每次数据重建后?: (
            该字典机: 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>
        ) => void;

        _该字典每次数据重建后_在幕后通知所属字典群之总机: (
            该字典机: 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>
        ) => void;
    };
};



export type 范_诸字典机_其列表<
    范_该组字典_条目原式_可能的默认形态 = any,
    范_该组字典_条目视式_各形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = Array<
    范_字典机<范_该组字典_条目原式_可能的默认形态, 范_该组字典_条目视式_各形态之交集>
>;



export type 范_诸字典机_其哈希表<
    范_该组字典_条目原式_可能的默认形态 = any,
    范_该组字典_条目视式_各形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = Record<string, 范_字典机<范_该组字典_条目原式_可能的默认形态, 范_该组字典_条目视式_各形态之交集>>;



export type 范_任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法<
    范_某次调用期间所操作之字典_条目原式_默认形态 = any,
    范_某次调用期间所操作之字典_项值_默认形态 = any
> = (
    该字典_诸条目原式_其列表: Array<范_某次调用期间所操作之字典_条目原式_默认形态>
) => Promise<范_字典条目内容映射表集<范_某次调用期间所操作之字典_项值_默认形态>>;



export type 范_任何字典_凭该字典某条目之原式构建该条目之视式_默认做法<
    范_某次调用期间所操作之字典_条目原式_默认形态 = any,
    范_某次调用期间所操作之字典_条目视式_默认形态 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = (
    该字典_某条目之原式: 范_某次调用期间所操作之字典_条目原式_默认形态
) => 范_某次调用期间所操作之字典_条目视式_默认形态;



export type 范_用以构建字典群之总机之配置总集_完备式<
    范_该总机内所有字典_条目原式_可能的默认形态 = any,
    范_该总机内所有字典_条目视式_各形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = {
    不应自动善始: boolean;

    最初的一批用以构建字典机的配置集之列表: Array<
        范_字典机_构建时所用配置总集_对外的准用式<any, 范_该总机内所有字典_条目视式_各形态之交集>
    >;

    事件处理程序集: {
        任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法?: 范_任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法<
            范_该总机内所有字典_条目原式_可能的默认形态,
            范_该总机内所有字典_条目视式_各形态之交集['值']
        >;

        任何字典_凭该字典某条目之原式构建该条目之视式_默认做法?: 范_任何字典_凭该字典某条目之原式构建该条目之视式_默认做法<
            范_该总机内所有字典_条目原式_可能的默认形态,
            范_该总机内所有字典_条目视式_各形态之交集
        >;

        任何字典_某次数据重建后?: (
            该字典群之总机: 范_字典群之总机<
                范_该总机内所有字典_条目原式_可能的默认形态,
                范_该总机内所有字典_条目视式_各形态之交集
            >,

            所涉字典机: 范_字典机<any, 范_该总机内所有字典_条目视式_各形态之交集>
        ) => void;
    };
};

export type 范_用以构建字典群之总机之配置总集_准用式<
    范_该总机内所有字典_条目原式_可能的默认形态 = any,
    范_该总机内所有字典_条目视式_各形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = {
    不应自动善始?: boolean;

    最初的一批用以构建字典机的配置集之列表?: Array<
        范_字典机_构建时所用配置总集_对外的准用式<any, 范_该总机内所有字典_条目视式_各形态之交集>
    >;

    事件处理程序集?: {
        任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法?: 范_任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法<
            范_该总机内所有字典_条目原式_可能的默认形态,
            范_该总机内所有字典_条目视式_各形态之交集['值']
        >;

        任何字典_凭该字典某条目之原式构建该条目之视式_默认做法?: 范_任何字典_凭该字典某条目之原式构建该条目之视式_默认做法<
            范_该总机内所有字典_条目原式_可能的默认形态,
            范_该总机内所有字典_条目视式_各形态之交集
        >;

        任何字典_某次数据重建后?: (
            该字典群之总机: 范_字典群之总机<
                范_该总机内所有字典_条目原式_可能的默认形态,
                范_该总机内所有字典_条目视式_各形态之交集
            >,

            所涉字典机: 范_字典机<any, 范_该总机内所有字典_条目视式_各形态之交集>
        ) => void;
    };
};



export type 范_字典群之总机成批重建字典的执行方案 = (
    /** 例如由 `追加一批字典` 新追加的那些字典机。 */
    | '仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与'

    /** 即为 `该字典并不参与字典群总机发起的所谓数据自动构建任务` 之特征取 'true' 的那些字典机，哪怕它们曾经成功善始过。 */
    | '所有允许参与数据自动构建任务的字典均参与，不论其是否已构建好数据'

    /** 即为一切字典机。换句话说，忽略各字典机各自的 `该字典并不参与字典群总机发起的所谓数据自动构建任务` 之特征。 */
    | '强制一切字典参与，不论其是否已构建好数据'
);

export const 成批重建字典数据时之所有可能的方案: Array<范_字典群之总机成批重建字典的执行方案> = [
    '仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与',
    '所有允许参与数据自动构建任务的字典均参与，不论其是否已构建好数据',
    '强制一切字典参与，不论其是否已构建好数据',
]



export type 范_字典群之总机<
    范_该总机内所有字典_条目原式_可能的默认形态 = any,
    范_该总机内所有字典_条目视式_各形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
> = {
    字典机之集: {
        列表形式: 范_诸字典机_其列表<
            any,
            范_该总机内所有字典_条目视式_各形态之交集
        >;

        哈希表形式: 范_诸字典机_其哈希表<
            any,
            范_该总机内所有字典_条目视式_各形态之交集
        >;
    };

    态: {
        期待_善始任务已完成: Promise<void>;
        善始任务仍在运转: boolean;
        善始任务已经成功: boolean;
    },

    为: {
        善始: (强制重新善始?: boolean) => Promise<void>;

        追加一批字典: <范_该组字典_条目原式_可能的默认形态 = 范_该总机内所有字典_条目原式_可能的默认形态>(
            用以构建一批字典机之配置集之列表?: Array<
                范_字典机_构建时所用配置总集_对所属总机的准用式<范_该组字典_条目原式_可能的默认形态, 范_该总机内所有字典_条目视式_各形态之交集>
            >
        ) => void;

        取某字典机: <
            范_该字典_条目原式 = 范_该总机内所有字典_条目原式_可能的默认形态,
            范_该字典_条目视式 extends 范_该总机内所有字典_条目视式_各形态之交集 = 范_该总机内所有字典_条目视式_各形态之交集
        >(
            欲索取之字典之唯一标识?: 范_字典之唯一标识
        ) => (null | 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>);

        取某字典之字典条目之视式之列表: <
            范_该字典_条目原式 = 范_该总机内所有字典_条目原式_可能的默认形态,
            范_该字典_条目视式 extends 范_该总机内所有字典_条目视式_各形态之交集 = 范_该总机内所有字典_条目视式_各形态之交集
        >(
            欲索取其中数据之字典之唯一标识?: 范_字典之唯一标识
        ) => 范_字典诸条目之视式_其列表<范_该字典_条目视式>;

        取某字典之字典条目之视式之哈希表: <
            范_该字典_条目原式 = 范_该总机内所有字典_条目原式_可能的默认形态,
            范_该字典_条目视式 extends 范_该总机内所有字典_条目视式_各形态之交集 = 范_该总机内所有字典_条目视式_各形态之交集
        >(
            欲索取其中数据之字典之唯一标识?: 范_字典之唯一标识
        ) => 范_字典诸条目之视式_其哈希表<范_该字典_条目视式>;

        令所有字典按需重建数据: (
            本次执行须为哪些字典重建数据?: 范_字典群之总机成批重建字典的执行方案
        ) => Promise<void>;
    };

    _暗为: {
        _按需追加单个字典: <
            范_该字典_条目原式 = 范_该总机内所有字典_条目原式_可能的默认形态,
            范_该字典_条目视式 extends 范_该总机内所有字典_条目视式_各形态之交集 = 范_该总机内所有字典_条目视式_各形态之交集
        >(
            用以构建该字典机之配置总集?: 范_字典机_构建时所用配置总集_对外的准用式<范_该字典_条目原式, 范_该字典_条目视式>
        ) => (null | 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>);

        _发布消息_单个字典之数据已重建: (
            所涉字典机: 范_字典机<
                范_该总机内所有字典_条目原式_可能的默认形态,
                范_该总机内所有字典_条目视式_各形态之交集
            >
        ) => void;
    };

    _事件处理程序集: {
        任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法?: 范_任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法<
            范_该总机内所有字典_条目原式_可能的默认形态,
            范_该总机内所有字典_条目视式_各形态之交集['值']
        >;

        任何字典_凭该字典某条目之原式构建该条目之视式_默认做法?: 范_任何字典_凭该字典某条目之原式构建该条目之视式_默认做法<
            范_该总机内所有字典_条目原式_可能的默认形态,
            范_该总机内所有字典_条目视式_各形态之交集
        >;

        任何字典_某次数据重建后?: (
            该字典群之总机: 范_字典群之总机<
                范_该总机内所有字典_条目原式_可能的默认形态,
                范_该总机内所有字典_条目视式_各形态之交集
            >,

            所涉字典机: 范_字典机<any, 范_该总机内所有字典_条目视式_各形态之交集>
        ) => void;
    };
};





export function 构建字典群之总机 <
    范_该总机内所有字典_条目原式_可能的默认形态 = any,
    范_该总机内所有字典_条目视式_各形态之交集 extends 范_字典条目之视式_最简式 = 范_字典条目之视式_最简式<any, any>
>(
    该字典群之总机之配置总集?: 范_用以构建字典群之总机之配置总集_准用式<
        范_该总机内所有字典_条目原式_可能的默认形态,
        范_该总机内所有字典_条目视式_各形态之交集
    >
): 范_字典群之总机<
    范_该总机内所有字典_条目原式_可能的默认形态,
    范_该总机内所有字典_条目视式_各形态之交集
> {

    /** 此处定义该【范】是为了在本函数体中方便指代。 */
    type 范_用以构建该字典群之总机之配置总集_完备式 = 范_用以构建字典群之总机之配置总集_完备式<
        范_该总机内所有字典_条目原式_可能的默认形态,
        范_该总机内所有字典_条目视式_各形态之交集
    >;

    /** 此处定义该【范】是为了在本函数体中方便指代。 */
    type 范_该字典群之总机 = 范_字典群之总机<
        范_该总机内所有字典_条目原式_可能的默认形态,
        范_该总机内所有字典_条目视式_各形态之交集
    >;



    function 善始 (强制重新善始?: boolean): Promise<void> {
        const { 态 } = 该字典群之总机

        if (态.善始任务仍在运转) {
            return 态.期待_善始任务已完成
        }

        if (强制重新善始 || !态.善始任务已经成功) {
            态.善始任务仍在运转 = true
            态.善始任务已经成功 = false
            return 令所有字典按需重建数据('仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与').then(() => {
                态.善始任务仍在运转 = false
                态.善始任务已经成功 = true
            })
        } else {
            return 态.期待_善始任务已完成
        }
    }



    function 追加一批字典 <范_该组字典_条目原式_可能的默认形态 = 范_该总机内所有字典_条目原式_可能的默认形态>(
        用以构建一批字典机之配置集之列表?: Array<
            范_字典机_构建时所用配置总集_对外的准用式<范_该组字典_条目原式_可能的默认形态, 范_该总机内所有字典_条目视式_各形态之交集>
        >
    ): void {
        if (!Array.isArray(用以构建一批字典机之配置集之列表)) { return }
        const { _按需追加单个字典 } = 该字典群之总机._暗为
        用以构建一批字典机之配置集之列表.forEach(_按需追加单个字典)
    }



    function 令所有字典按需重建数据 (
        本次执行须为哪些字典重建数据?: 范_字典群之总机成批重建字典的执行方案
    ): Promise<void> {

        // ----- 准备工作 -----

        if (
            typeof 本次执行须为哪些字典重建数据 !== 'string' ||
            !成批重建字典数据时之所有可能的方案.includes(本次执行须为哪些字典重建数据)
        ) {
            本次执行须为哪些字典重建数据 = '仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与'
        }



        // ----- 确定须参与的字典之列表 -----

        let 须为其构建数据之字典机之列表 = 该字典群之总机.字典机之集.列表形式

        if (本次执行须为哪些字典重建数据 === '仅限那些允许参与数据自动构建任务且尚未构建过数据的字典参与') {
            须为其构建数据之字典机之列表 = 须为其构建数据之字典机之列表.filter(
                某字典机 => !某字典机.态.该字典并不参与字典群总机发起的所谓数据自动构建任务 && !某字典机.态.当下的数据系某次成功构建而得的
            )
        } else if (本次执行须为哪些字典重建数据 === '所有允许参与数据自动构建任务的字典均参与，不论其是否已构建好数据') {
            须为其构建数据之字典机之列表 = 须为其构建数据之字典机之列表.filter(
                某字典机 => !某字典机.态.该字典并不参与字典群总机发起的所谓数据自动构建任务
            )
        }



        // ----- 令所有参与的字典各自构建数据 -----

        return Promise.allSettled(
            须为其构建数据之字典机之列表.map(某字典机 => 某字典机.为.重建数据())
        )
            .then(() => undefined)
            .catch(() => undefined)
    }



    function 取某字典机 <
        范_该字典_条目原式 = 范_该总机内所有字典_条目原式_可能的默认形态,
        范_该字典_条目视式 extends 范_该总机内所有字典_条目视式_各形态之交集 = 范_该总机内所有字典_条目视式_各形态之交集
    >(
        欲索取之字典之唯一标识?: 范_字典之唯一标识
    ): (null | 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>) {
        if (!是字典之合规的唯一标识(欲索取之字典之唯一标识)) { return null }
        const 已知合规的唯一标识: 范_字典之唯一标识 = 欲索取之字典之唯一标识!
        const 字典机之哈希表 = 该字典群之总机.字典机之集.哈希表形式
        const 字典机 = 字典机之哈希表[已知合规的唯一标识] as 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>
        return 字典机 || null
    }



    function 取某字典之字典条目之视式之列表 <
        范_该字典_条目原式 = 范_该总机内所有字典_条目原式_可能的默认形态,
        范_该字典_条目视式 extends 范_该总机内所有字典_条目视式_各形态之交集 = 范_该总机内所有字典_条目视式_各形态之交集
    >(
        欲索取其中数据之字典之唯一标识?: 范_字典之唯一标识
    ): 范_字典诸条目之视式_其列表<范_该字典_条目视式> {
        const 字典机 = 取某字典机<范_该字典_条目原式, 范_该字典_条目视式>(欲索取其中数据之字典之唯一标识)
        if (字典机) {
            return 字典机.数据集.字典条目之视式集.列表形式
        } else {
            return []
        }
    }



    function 取某字典之字典条目之视式之哈希表 <
        范_该字典_条目原式 = 范_该总机内所有字典_条目原式_可能的默认形态,
        范_该字典_条目视式 extends 范_该总机内所有字典_条目视式_各形态之交集 = 范_该总机内所有字典_条目视式_各形态之交集
    >(
        欲索取其中数据之字典之唯一标识?: 范_字典之唯一标识
    ): 范_字典诸条目之视式_其哈希表<范_该字典_条目视式> {
        const 字典机 = 取某字典机<范_该字典_条目原式, 范_该字典_条目视式>(欲索取其中数据之字典之唯一标识)
        if (字典机 && 字典机.数据集.字典条目之视式集.哈希表形式) {
            return 字典机.数据集.字典条目之视式集.哈希表形式
        } else {
            return {}
        }
    }



    function _按需追加单个字典 <
        范_该字典_条目原式 = 范_该总机内所有字典_条目原式_可能的默认形态,
        范_该字典_条目视式 extends 范_该总机内所有字典_条目视式_各形态之交集 = 范_该总机内所有字典_条目视式_各形态之交集
    >(
        用以构建该字典机之配置总集?: 范_字典机_构建时所用配置总集_对外的准用式<
            范_该字典_条目原式,
            范_该字典_条目视式
        >
    ): (
        null | 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>
    ) {

        /** 此处定义该【范】是为了在本函数体中方便指代。 */
        type 范_用以构建该字典机之配置总集_完备式 = 范_字典机_构建时所用配置总集_完备式<
            范_该字典_条目原式,
            范_该字典_条目视式
        >;

        /** 此处定义该【范】是为了在本函数体中方便指代。 */
        type 范_用以构建该字典机之配置总集_对外的准用式 = 范_字典机_构建时所用配置总集_对外的准用式<
            范_该字典_条目原式,
            范_该字典_条目视式
        >;

        /** 此处定义该【范】是为了在本函数体中方便指代。 */
        type 范_用以构建该字典机之配置总集_对所属总机的准用式 = 范_字典机_构建时所用配置总集_对所属总机的准用式<
            范_该字典_条目原式,
            范_该字典_条目视式
        >;

        /** 此处定义该【范】是为了在本函数体中方便指代。 */
        type 范_该字典机 = 范_字典机<
            范_该字典_条目原式,
            范_该字典_条目视式
        >;



        if (!是合规的非列表对象(用以构建该字典机之配置总集)) { return null }
        const 已知合规的配置总集 = 用以构建该字典机之配置总集

        const { 该字典之唯一标识 } = 已知合规的配置总集
        if (!是字典之合规的唯一标识(该字典之唯一标识)) { return null }
        const 已知合规的唯一标识: 范_字典之唯一标识 = 该字典之唯一标识 as 范_字典之唯一标识

        const 字典机 = 取某字典机<范_该字典_条目原式, 范_该字典_条目视式>(已知合规的唯一标识)
        if (字典机) {
            console.warn(`不应重复构建标识为 “${已知合规的唯一标识}” 的【字典机】。已略过该构建任务。`)
            return 字典机
        }

        const 事件处理程序集 = 求合规的非列表对象_若不合规则给出空的对象<范_用以构建该字典机之配置总集_完备式['事件处理程序集']>(已知合规的配置总集['事件处理程序集'])

        const 最终合并采纳的配置总集: 范_用以构建该字典机之配置总集_对所属总机的准用式 = {
            ...已知合规的配置总集,

            事件处理程序集: {
                ...事件处理程序集,

                _该字典每次数据重建后_在幕后通知所属字典群之总机 (所涉字典机: 范_该字典机): void {
                    该字典群之总机._暗为._发布消息_单个字典之数据已重建(所涉字典机)
                },
            },
        }


        const 构建之结果 = 构建单个字典机<范_该字典_条目原式, 范_该字典_条目视式>(
            最终合并采纳的配置总集,

            {
                任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法,
                任何字典_凭该字典某条目之原式构建该条目之视式_默认做法,
            },
        )

        if (!构建之结果) {
            return null
        }

        const 新构建的字典机 = 构建之结果

        const { 字典机之集 } = 该字典群之总机

        字典机之集.列表形式.push(新构建的字典机)
        字典机之集.哈希表形式[已知合规的唯一标识] = 新构建的字典机

        return 新构建的字典机
    }



    function _发布消息_单个字典之数据已重建 (所涉字典机: 范_字典机<范_该总机内所有字典_条目原式_可能的默认形态, 范_该总机内所有字典_条目视式_各形态之交集>): void {
        const { 任何字典_某次数据重建后 } = 该字典群之总机._事件处理程序集
        if (typeof 任何字典_某次数据重建后 === 'function') {
            任何字典_某次数据重建后(该字典群之总机, 所涉字典机)
        }
    }



    function 构建单个字典机 <
        范_该字典_条目原式 = 范_该总机内所有字典_条目原式_可能的默认形态,
        范_该字典_条目视式 extends 范_该总机内所有字典_条目视式_各形态之交集 = 范_该总机内所有字典_条目视式_各形态之交集
    >(
        用以构建该字典机之配置总集?: 范_字典机_构建时所用配置总集_对所属总机的准用式<范_该字典_条目原式, 范_该字典_条目视式>,

        默认值集?: {
            任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法?: 范_任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法<范_该总机内所有字典_条目原式_可能的默认形态, 范_该总机内所有字典_条目视式_各形态之交集['值']>;
            任何字典_凭该字典某条目之原式构建该条目之视式_默认做法?: 范_任何字典_凭该字典某条目之原式构建该条目之视式_默认做法<范_该总机内所有字典_条目原式_可能的默认形态, 范_该总机内所有字典_条目视式_各形态之交集>;
        }
    ): (
        null | 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>
    ) {

        /** 此处定义该【范】是为了在本函数体中方便指代。 */
        type 范_用以构建该字典机之配置总集_完备式 = 范_字典机_构建时所用配置总集_完备式<范_该字典_条目原式, 范_该字典_条目视式>;

        /** 此处定义该【范】是为了在本函数体中方便指代。 */
        type 范_该字典机 = 范_字典机<范_该字典_条目原式, 范_该字典_条目视式>;

        /** 此处定义该【范】是为了在本函数体中方便指代。 */
        type 范_该字典机所属总机提供的默认值集_准用式 = {
            任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法?: 范_任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法<范_该总机内所有字典_条目原式_可能的默认形态, 范_该总机内所有字典_条目视式_各形态之交集['值']>;
            任何字典_凭该字典某条目之原式构建该条目之视式_默认做法?: 范_任何字典_凭该字典某条目之原式构建该条目之视式_默认做法<范_该总机内所有字典_条目原式_可能的默认形态, 范_该总机内所有字典_条目视式_各形态之交集>;
        };

        /** 此处定义该【范】是为了在本函数体中方便指代。 */
        type 范_该字典_代表全选的字典条目_完备式 = 范_某字典_代表全选的字典条目_完备式<范_该字典_条目视式>;

        /** 此处定义该【范】是为了在本函数体中方便指代。 */
        type 范_该字典_代表全选的字典条目_准用式 = 范_某字典_代表全选的字典条目_准用式<范_该字典_条目视式>;

        /** 此处定义该【范】是为了在本函数体中方便指代。 */
        type 范_该字典_代表全都不选的字典条目_完备式 = 范_某字典_代表全都不选的字典条目_完备式<范_该字典_条目视式>;

        /** 此处定义该【范】是为了在本函数体中方便指代。 */
        type 范_该字典_代表全都不选的字典条目_准用式 = 范_某字典_代表全都不选的字典条目_准用式<范_该字典_条目视式>;



        const {
            任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法,
            任何字典_凭该字典某条目之原式构建该条目之视式_默认做法,
        } = 求合规的非列表对象_若不合规则给出空的对象<范_该字典机所属总机提供的默认值集_准用式>(默认值集)



        const 已知合规的配置总集 = 求合规的非列表对象_若不合规则给出null<范_用以构建该字典机之配置总集_完备式>(用以构建该字典机之配置总集)
        if (!已知合规的配置总集) {
            // 不必给出警示或出错提示。
            return null
        }

        const { 该字典之唯一标识: 待检测的唯一标识 } = 已知合规的配置总集
        if (!是字典之合规的唯一标识(待检测的唯一标识)) {
            console.error('用以构建某字典之配置总集中：缺少合规的【\`待检测的唯一标识\`】。所涉配置总集为：', 用以构建该字典机之配置总集)
            return null
        }

        const 该字典之唯一标识: 范_字典之唯一标识 = 待检测的唯一标识 as 范_字典之唯一标识

        const 事件处理程序集 = 求合规的非列表对象_若不合规则给出null<范_用以构建该字典机之配置总集_完备式['事件处理程序集']>(已知合规的配置总集['事件处理程序集'])
        if (!事件处理程序集) {
            console.error(`在用以构建字典 “${该字典之唯一标识}” 的配置总集中：缺少合规的【\`事件处理程序集\`】对象。`)
            return null
        }



        const {
            构建或获取原始数据集,
        } = 事件处理程序集

        if (typeof 构建或获取原始数据集 !== 'function') {
            console.error(`在用以构建字典 “${该字典之唯一标识}” 的配置总集中：【\`构建或获取原始数据集\`】不是函数。`)
            return null
        }



        const 配置集 = 求合规的非列表对象_若不合规则给出空的对象<范_用以构建该字典机之配置总集_完备式['配置集']>(已知合规的配置总集['配置集'])

        let 该字典构建诸字典条目内容映射表之方案 = 配置集.该字典构建诸字典条目内容映射表之方案
        if (
            typeof 该字典构建诸字典条目内容映射表之方案 !== 'string' ||
            !单个字典构建诸字典条目内容映射表时之各色候选方案.includes(该字典构建诸字典条目内容映射表之方案)
        ) {
            该字典构建诸字典条目内容映射表之方案 = 单个字典构建诸字典条目内容映射表时之默认方案
        }

        const 外界须提供函数用以凭该字典条目之原式之集构建诸字典条目内容映射表 = 该字典构建诸字典条目内容映射表之方案 === '从该字典条目之原式之集提取而得'
        const 外界须提供函数用以脱离该字典条目之原式之集构建诸字典条目内容映射表 = ([
            '脱离该字典条目之原式之集而构建，仅一次即可',
            '脱离该字典条目之原式之集而构建，且须反复获取或构建',
        ] as 范_单个字典构建诸字典条目内容映射表之方案[]).includes(该字典构建诸字典条目内容映射表之方案)



        const 该字典并不参与字典群总机发起的所谓数据自动构建任务 = !!配置集.该字典并不参与字典群总机发起的所谓数据自动构建任务
        const 应构建字典条目之视式之哈希表 = !!配置集.应构建字典条目之视式之哈希表



        let 代表全选的字典条目_准用式 = 求合规的非列表对象_若不合规则给出null<范_该字典_代表全选的字典条目_准用式>(配置集['代表全选的字典条目'])
        if (代表全选的字典条目_准用式) {
            const { 应位于候选列表之该处, 字典条目之视式 } = 代表全选的字典条目_准用式

            if (!是合规的非列表对象(字典条目之视式)) {
                console.error(`在用以构建字典 “${该字典之唯一标识}” 的配置总集中：【\`代表全选的字典条目\`】未附带合规的【\'字典条目之视式\'】。`)
                代表全选的字典条目_准用式 = null
            } else {
                if (typeof 应位于候选列表之该处 !== 'string' || ![
                    '首部',
                    '尾部',
                ].includes(应位于候选列表之该处)) {
                    代表全选的字典条目_准用式.应位于候选列表之该处 = '首部'
                }

                const { 在界面中的称谓 } = 字典条目之视式
                if (typeof 在界面中的称谓 !== 'string') {
                    字典条目之视式.在界面中的称谓 = '〔全选〕'
                }
            }
        }

        const 代表全选的字典条目: null | 范_该字典_代表全选的字典条目_完备式 = 代表全选的字典条目_准用式 as null | 范_该字典_代表全选的字典条目_完备式



        let 代表全都不选的字典条目_准用式 = 求合规的非列表对象_若不合规则给出null<范_该字典_代表全都不选的字典条目_准用式>(配置集['代表全都不选的字典条目'])
        if (代表全都不选的字典条目_准用式) {
            const { 应位于候选列表之该处, 字典条目之视式 } = 代表全都不选的字典条目_准用式

            if (!是合规的非列表对象(字典条目之视式)) {
                console.error(`在用以构建字典 “${该字典之唯一标识}” 的配置总集中：【\`代表全都不选的字典条目\`】未附带合规的【\'字典条目之视式\'】。`)
                代表全都不选的字典条目_准用式 = null
            } else {
                if (typeof 应位于候选列表之该处 !== 'string' || ![
                    '首部',
                    '尾部',
                ].includes(应位于候选列表之该处)) {
                    代表全都不选的字典条目_准用式.应位于候选列表之该处 = '首部'
                }

                const { 在界面中的称谓 } = 字典条目之视式
                if (typeof 在界面中的称谓 !== 'string') {
                    字典条目之视式.在界面中的称谓 = '〔全都不选〕'
                }
            }
        }

        const 代表全都不选的字典条目: null | 范_该字典_代表全都不选的字典条目_完备式 = 代表全都不选的字典条目_准用式 as null | 范_该字典_代表全都不选的字典条目_完备式



        let { 脱离该字典条目之原式之集构建诸字典条目内容映射表 } = 事件处理程序集

        if (外界须提供函数用以脱离该字典条目之原式之集构建诸字典条目内容映射表) {
            if (typeof 脱离该字典条目之原式之集构建诸字典条目内容映射表 !== 'function') {
                console.error(`在用以构建字典 “${该字典之唯一标识}” 的配置总集中：【\`脱离该字典条目之原式之集构建诸字典条目内容映射表\`】不是函数。`)
                return null
            }
        }



        let { 凭该字典条目之原式之集构建诸字典条目内容映射表 } = 事件处理程序集

        if (外界须提供函数用以凭该字典条目之原式之集构建诸字典条目内容映射表) {
            if (typeof 凭该字典条目之原式之集构建诸字典条目内容映射表 !== 'function') {
                if (typeof 任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法 === 'function') {
                    凭该字典条目之原式之集构建诸字典条目内容映射表 = 任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法 as unknown as 范_任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法<范_该字典_条目原式, 范_该字典_条目视式['值']>
                } else {
                    console.error(`在用以构建字典 “${该字典之唯一标识}” 的配置总集中：【\`凭该字典条目之原式之集构建诸字典条目内容映射表\`】和【\`任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法\`】都不是函数。`)
                    return null
                }
            }
        }



        let { 凭该字典某条目之原式构建该条目之视式 } = 事件处理程序集

        if (typeof 凭该字典某条目之原式构建该条目之视式 !== 'function') {
            if (typeof 任何字典_凭该字典某条目之原式构建该条目之视式_默认做法 === 'function') {
                凭该字典某条目之原式构建该条目之视式 = 任何字典_凭该字典某条目之原式构建该条目之视式_默认做法 as unknown as 范_任何字典_凭该字典某条目之原式构建该条目之视式_默认做法<范_该字典_条目原式, 范_该字典_条目视式>
            } else {
                console.error(`在用以构建字典 “${该字典之唯一标识}” 的配置总集中：【\`凭该字典某条目之原式构建该条目之视式\`】和【\`任何字典_凭该字典某条目之原式构建该条目之视式_默认做法\`】都不是函数。`)
                return null
            }
        }



        let { _该字典每次数据重建后_在幕后通知所属字典群之总机 } = 事件处理程序集

        if (typeof _该字典每次数据重建后_在幕后通知所属字典群之总机 !== 'function') {
            console.error(`在用以构建字典 “${该字典之唯一标识}” 的配置总集中：【\`_该字典每次数据重建后_在幕后通知所属字典群之总机\`】不是函数。`)
            return null
        }



        let { 该字典每次数据重建后 } = 事件处理程序集
        if (typeof 该字典每次数据重建后 !== 'function') {
            该字典每次数据重建后 = undefined
        }





        function _凭字典条目之原式集构建字典条目之视式集 (): void {
            const { 凭该字典某条目之原式构建该条目之视式 } = 该字典机._事件处理程序集
            const { 字典条目之原式集, 代表全选的字典条目, 代表全都不选的字典条目 } = 该字典机.数据集

            if (!Array.isArray(字典条目之原式集)) { return }

            type 范_该字典_条目视式集 = 范_该字典机['数据集']['字典条目之视式集']

            const 字典条目之视式之列表: 范_该字典_条目视式集['列表形式'] = []
            const 字典条目之视式之哈希表: 范_该字典_条目视式集['哈希表形式'] = {}

            if (代表全选的字典条目) {
                const {
                    应位于候选列表之该处,
                    字典条目之视式,
                } = 代表全选的字典条目

                if (应位于候选列表之该处 === '首部') {
                    字典条目之视式之列表.push(字典条目之视式)
                }
            }

            if (代表全都不选的字典条目) {
                const {
                    应位于候选列表之该处,
                    字典条目之视式,
                } = 代表全都不选的字典条目

                if (应位于候选列表之该处 === '首部') {
                    字典条目之视式之列表.push(字典条目之视式)
                }
            }

            字典条目之原式集.forEach(某字典条目之原式 => {
                const 字典条目之视式 = 凭该字典某条目之原式构建该条目之视式(某字典条目之原式)
                if (!字典条目之视式) { return }
                const { 唯一标识 } = 字典条目之视式
                if (!是字典之合规的唯一标识(唯一标识)) { return }

                字典条目之视式之列表.push(字典条目之视式)

                if (应构建字典条目之视式之哈希表) {
                    字典条目之视式之哈希表[唯一标识] = 字典条目之视式
                }
            })

            该字典机.数据集.字典条目之视式集.列表形式 = 字典条目之视式之列表
            该字典机.数据集.字典条目之视式集.哈希表形式 = 字典条目之视式之哈希表

            if (代表全都不选的字典条目) {
                const {
                    应位于候选列表之该处,
                    字典条目之视式,
                } = 代表全都不选的字典条目

                if (应位于候选列表之该处 === '尾部') {
                    字典条目之视式之列表.push(字典条目之视式)
                }
            }

            if (代表全选的字典条目) {
                const {
                    应位于候选列表之该处,
                    字典条目之视式,
                } = 代表全选的字典条目

                if (应位于候选列表之该处 === '尾部') {
                    字典条目之视式之列表.push(字典条目之视式)
                }
            }
        }



        function _按需构建诸字典条目内容映射表 (): Promise<void> {
            const { 态, 数据集, _事件处理程序集 } = 该字典机

            const {
                该字典构建诸字典条目内容映射表之方案,
                该字典诸字典条目内容映射表业已构建完毕,
            } = 态



            let 构建诸字典条目内容映射表一事已落实: Promise<void> = Promise.resolve()



            if (该字典构建诸字典条目内容映射表之方案 === '不必构建') {
                return 构建诸字典条目内容映射表一事已落实
            }



            if (该字典构建诸字典条目内容映射表之方案 === '从该字典条目之原式之集提取而得') {
                const {
                    字典条目之原式集,
                } = 数据集

                const {
                    凭该字典条目之原式之集构建诸字典条目内容映射表,
                } = _事件处理程序集

                if (!字典条目之原式集) {
                    console.error(`字典 “${该字典之唯一标识}” 的诸【字典条目内容映射表】配置为 “${该字典构建诸字典条目内容映射表之方案}”。但构建诸【字典条目内容映射表】时，发现【\`字典条目之原式集\`】尚不可用。`)
                    return 构建诸字典条目内容映射表一事已落实
                    // return Promise.reject()
                }

                if (typeof 凭该字典条目之原式之集构建诸字典条目内容映射表 !== 'function') {
                    console.error(`字典 “${该字典之唯一标识}” 的诸【字典条目内容映射表】配置为 “${该字典构建诸字典条目内容映射表之方案}”。但构建诸【字典条目内容映射表】时，发现【\`凭该字典条目之原式之集构建诸字典条目内容映射表\`】不是函数。`)
                    return 构建诸字典条目内容映射表一事已落实
                    // return Promise.reject()
                }

                return 凭该字典条目之原式之集构建诸字典条目内容映射表(字典条目之原式集).then(字典条目内容映射表集 => {
                    数据集.字典条目内容映射表集 = 字典条目内容映射表集
                    态.该字典诸字典条目内容映射表业已构建完毕 = true
                })
            }



            if (
                ([
                    '脱离该字典条目之原式之集而构建，仅一次即可',
                    '脱离该字典条目之原式之集而构建，且须反复获取或构建',
                ] as 范_单个字典构建诸字典条目内容映射表之方案[]
                ).includes(该字典构建诸字典条目内容映射表之方案)
            ) {
                if (该字典构建诸字典条目内容映射表之方案 === '脱离该字典条目之原式之集而构建，仅一次即可' && 该字典诸字典条目内容映射表业已构建完毕) {
                    return 构建诸字典条目内容映射表一事已落实
                } else {
                    if (该字典构建诸字典条目内容映射表之方案 === '脱离该字典条目之原式之集而构建，且须反复获取或构建') {
                        态.该字典诸字典条目内容映射表业已构建完毕 = false
                    }
                }

                const {
                    脱离该字典条目之原式之集构建诸字典条目内容映射表,
                } = _事件处理程序集

                if (typeof 脱离该字典条目之原式之集构建诸字典条目内容映射表 !== 'function') {
                    console.error(`字典 “${该字典之唯一标识}” 的诸【字典条目内容映射表】配置为 “${该字典构建诸字典条目内容映射表之方案}”。但构建诸【字典条目内容映射表】时，发现【\`脱离该字典条目之原式之集构建诸字典条目内容映射表\`】不是函数。`)
                    return 构建诸字典条目内容映射表一事已落实
                    // return Promise.reject()
                }

                return 脱离该字典条目之原式之集构建诸字典条目内容映射表().then(字典条目内容映射表集 => {
                    数据集.字典条目内容映射表集 = 字典条目内容映射表集
                    态.该字典诸字典条目内容映射表业已构建完毕 = true
                })
            }



            return 构建诸字典条目内容映射表一事已落实
        }



        function 清空数据 (): void {
            const { 态, 数据集 } = 该字典机

            数据集.字典条目之原式集 = null
            数据集.字典条目之视式集.列表形式 = []
            数据集.字典条目之视式集.哈希表形式 = {}
            数据集.字典条目内容映射表集.从值至呈示称谓 = {}
            数据集.字典条目内容映射表集.从呈示称谓至值 = {}

            态.当下的数据系某次成功构建而得的 = false
        }



        function 重建数据 (...用以获取字典条目之原式集的参数表: any[]): Promise<void> {
            该字典机.为.清空数据()

            const {
                该字典构建诸字典条目内容映射表之方案,
            } = 该字典机.态

            let 独立构建诸字典条目内容映射表一事已落实: Promise<void>
            if (
                ([
                    '脱离该字典条目之原式之集而构建，仅一次即可',
                    '脱离该字典条目之原式之集而构建，且须反复获取或构建',
                ] as 范_单个字典构建诸字典条目内容映射表之方案[]
                ).includes(该字典构建诸字典条目内容映射表之方案)
            ) {
                独立构建诸字典条目内容映射表一事已落实 = 该字典机._暗为._按需构建诸字典条目内容映射表()
            } else {
                独立构建诸字典条目内容映射表一事已落实 = Promise.resolve()
            }

            return Promise.all([
                独立构建诸字典条目内容映射表一事已落实,

                该字典机._事件处理程序集.构建或获取原始数据集(...用以获取字典条目之原式集的参数表).then(字典条目之原式集 => {
                    该字典机.数据集.字典条目之原式集 = 字典条目之原式集
                }),
            ]).then(() => {
                该字典机._暗为._凭字典条目之原式集构建字典条目之视式集()
                该字典机.态.当下的数据系某次成功构建而得的 = true

                if (
                    ([
                        '从该字典条目之原式之集提取而得',
                    ] as 范_单个字典构建诸字典条目内容映射表之方案[]
                    ).includes(该字典构建诸字典条目内容映射表之方案)
                ) {
                    return 该字典机._暗为._按需构建诸字典条目内容映射表()
                }
            }).then(() => {
                该字典机._暗为._发布消息_数据已重建一次()
            })
        }



        function 求某项值之称谓 (项值?: any): string | null | undefined {
            if ([ null, undefined ].includes(项值)) {
                return 项值
            }

            const { 从值至呈示称谓 } = 该字典机.数据集.字典条目内容映射表集
            let 查得的措辞: string | undefined
            查得的措辞 = 从值至呈示称谓[`${项值}`]

            if (typeof 查得的措辞 === 'string') {
                return 查得的措辞
            }

            return `${项值}`
        }



        function _发布消息_数据已重建一次 (): void {
            const {
                该字典每次数据重建后,
                _该字典每次数据重建后_在幕后通知所属字典群之总机,
            } = 该字典机._事件处理程序集

            if (typeof 该字典每次数据重建后 === 'function') {
                该字典每次数据重建后(该字典机)
            }

            if (typeof _该字典每次数据重建后_在幕后通知所属字典群之总机 === 'function') {
                _该字典每次数据重建后_在幕后通知所属字典群之总机(该字典机)
            }
        }



        const 该字典机: 范_该字典机 = {
            该字典之唯一标识,

            态: {
                该字典构建诸字典条目内容映射表之方案,
                该字典诸字典条目内容映射表业已构建完毕: false,

                该字典并不参与字典群总机发起的所谓数据自动构建任务,
                应构建字典条目之视式之哈希表,

                当下的数据系某次成功构建而得的: false,
            },

            数据集: {
                代表全选的字典条目,
                代表全都不选的字典条目,

                字典条目之原式集: null,

                字典条目之视式集: {
                    列表形式: [],
                    哈希表形式: {},
                },

                字典条目内容映射表集: {
                    从值至呈示称谓: {},
                    从呈示称谓至值: {},
                },
            },

            为: {
                清空数据,
                重建数据,
                求某项值之称谓,
            },

            _暗为: {
                _凭字典条目之原式集构建字典条目之视式集,
                _按需构建诸字典条目内容映射表,
                _发布消息_数据已重建一次,
            },

            _事件处理程序集: {
                构建或获取原始数据集,
                脱离该字典条目之原式之集构建诸字典条目内容映射表,
                凭该字典条目之原式之集构建诸字典条目内容映射表,
                凭该字典某条目之原式构建该条目之视式,

                该字典每次数据重建后,
                _该字典每次数据重建后_在幕后通知所属字典群之总机,
            },
        }

        return 该字典机
    }





    const 总机之已知合规的配置总集 = 求合规的非列表对象_若不合规则给出空的对象<范_用以构建该字典群之总机之配置总集_完备式>(该字典群之总机之配置总集)

    const {
        不应自动善始,
    } = 总机之已知合规的配置总集

    let {
        任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法,
        任何字典_凭该字典某条目之原式构建该条目之视式_默认做法,
        任何字典_某次数据重建后,
    } = 求合规的非列表对象_若不合规则给出空的对象<范_用以构建该字典群之总机之配置总集_完备式['事件处理程序集']>(总机之已知合规的配置总集.事件处理程序集)

    if (typeof 任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法 !== 'function') {
        任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法 = undefined
    }

    if (typeof 任何字典_凭该字典某条目之原式构建该条目之视式_默认做法 !== 'function') {
        任何字典_凭该字典某条目之原式构建该条目之视式_默认做法 = undefined
    }

    if (typeof 任何字典_某次数据重建后 !== 'function') {
        任何字典_某次数据重建后 = undefined
    }



    const 该字典群之总机: 范_该字典群之总机 = {
        字典机之集: {
            列表形式: [],
            哈希表形式: {},
        },

        态: {
            期待_善始任务已完成: Promise.resolve(),
            善始任务仍在运转: false,
            善始任务已经成功: false,
        },

        为: {
            善始,
            追加一批字典,
            取某字典机,
            取某字典之字典条目之视式之列表,
            取某字典之字典条目之视式之哈希表,
            令所有字典按需重建数据,
        },

        _暗为: {
            _按需追加单个字典,
            _发布消息_单个字典之数据已重建,
        },

        _事件处理程序集: {
            任何字典_凭该字典条目之原式之集构建诸字典条目内容映射表_默认做法,
            任何字典_凭该字典某条目之原式构建该条目之视式_默认做法,
            任何字典_某次数据重建后,
        },
    }



    追加一批字典(总机之已知合规的配置总集.最初的一批用以构建字典机的配置集之列表)



    if (!不应自动善始) {
        该字典群之总机.态.期待_善始任务已完成 = 善始()
    }



    return 该字典群之总机
}
