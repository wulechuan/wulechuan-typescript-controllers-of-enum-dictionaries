type 范_某_默认 = Record<string, any>;

class 类_伪造的Vue {
    $set (this: 类_伪造的Vue, 基: object, 键: string | number, 值: NonNullable<any> | null): void {
        console.log('$set', '某基', 键, 值)
    }
};





// ------------------------------

type 范_甲_构建时的配置集<范_this> = {
    应变: {
        一型事件: (this: 范_this) => void;
    };
};



// ------------------------------

type 范_乙_构建时的配置集<范_this, 范_该乙_某> = {
    料: {
        该乙_第一个某: 范_该乙_某
    };

    应变: {
        二型事件: (this: 范_this) => void;
    };
};



// ------------------------------

type 范_乙<范_this, 范_该乙_某 extends 范_某_默认 = 范_某_默认> = {
    所持: {
        寅: string;
        卯: boolean;
        某: 范_该乙_某;
    };

    为: {
        震: (雷: 范_该乙_某) => number;
    };

    应变: {
        二型事件: (this: 范_this) => void;
    };
};



// ------------------------------

type 范_甲<范_this, 范_该甲_任何乙_某之默认式 extends 范_某_默认 = 范_某_默认> = {
    所持: {
        子: string;
        丑: number;
        乙集: 范_乙<范_this, any>[];
    };

    为: {
        作乙: <范_该乙_某 extends 范_某_默认 = 范_该甲_任何乙_某之默认式>(该乙_构建时的配置集: 范_乙_构建时的配置集<范_this, 范_该乙_某>) => 范_乙<范_this, 范_该乙_某>;
        取某乙: <范_该乙_某 extends 范_某_默认 = 范_该甲_任何乙_某之默认式>(序号: number) => 范_乙<范_this, 范_该乙_某> | null;
        乾于某乙: <范_该乙_某 extends 范_某_默认 = 范_该甲_任何乙_某之默认式>(该乙: 范_乙<范_this, 范_该乙_某>) => Promise<string>;
        坤于某乙: <范_该乙_某 extends 范_某_默认 = 范_该甲_任何乙_某之默认式>(该乙: 范_乙<范_this, 范_该乙_某>) => void;
    };

    应变: {
        一型事件: (this: 范_this) => void;
    };
};





// ------------------------------

export function 作甲 <范_this, 范_该甲_任何乙_某之默认式 extends 范_某_默认 = 范_某_默认>(
    this: 范_this,
    该甲_构建时的配置项集: 范_甲_构建时的配置集<范_this>
): 范_甲<范_this, 范_该甲_任何乙_某之默认式> {
    type 范_该甲 = 范_甲<范_this, 范_该甲_任何乙_某之默认式>;

    const 该甲_绑定的This = this

    const {
        一型事件,
    } = 该甲_构建时的配置项集.应变

    const 该甲: 范_该甲 = {
        所持: {
            子: '鼠',
            丑: 2,
            乙集: [],
        },

        为: {
            作乙 <范_该乙_某 extends 范_某_默认 = 范_该甲_任何乙_某之默认式>(
                该乙_构建时的配置集: 范_乙_构建时的配置集<范_this, 范_该乙_某>
            ): 范_乙<范_this, 范_该乙_某> {
                return 甲__作乙并蓄__无This<范_this, 范_该乙_某>.call(该甲_绑定的This, 该甲, 该乙_构建时的配置集)
            },

            取某乙 <范_该乙_某 extends 范_某_默认 = 范_该甲_任何乙_某之默认式>(
                序号: number
            ): null | 范_乙<范_this, 范_该乙_某> {
                return 甲__取某乙__无This<范_this, 范_该乙_某>.call(该甲_绑定的This, 该甲, 序号)
            },

            乾于某乙 <范_该乙_某 extends 范_某_默认 = 范_该甲_任何乙_某之默认式>(
                该乙: 范_乙<范_this, 范_该乙_某>
            ): Promise<string> {
                return 甲__乾于某乙__无This<范_this, 范_该乙_某>.call(该甲_绑定的This, 该甲, 该乙)
            },

            坤于某乙 <范_该乙_某 extends 范_某_默认 = 范_该甲_任何乙_某之默认式>(
                该乙: 范_乙<范_this, 范_该乙_某>
            ): void {
                return 甲__坤于某乙__无This<范_this, 范_该乙_某>.call(该甲_绑定的This, 该甲, 该乙)
            },
        },

        应变: {
            一型事件,
        },
    }

    return 该甲
}



function _某甲__作乙__无this <范_this, 范_该乙_某 extends 范_某_默认>(
    this: 范_this,
    该甲: 范_甲<范_this, 范_该乙_某>,
    该乙_构建时的配置集: 范_乙_构建时的配置集<范_this, 范_该乙_某>
): 范_乙<范_this, 范_该乙_某> {
    type 范_该乙 = 范_乙<范_this, 范_该乙_某>

    const 该乙_绑定的This = this

    const {
        料: {
            该乙_第一个某,
        },

        应变: {
            二型事件,
        },
    } = 该乙_构建时的配置集

    const 该乙: 范_该乙 = {
        所持: {
            寅: '虎',
            卯: !0,
            某: 该乙_第一个某,
        },

        为: {
            震 (
                雷: 范_该乙_某
            ): number {
                return 乙__震__无This<范_this, 范_该乙_某>.call(该乙_绑定的This, 该甲, 该乙, 雷)
            },
        },

        应变: {
            二型事件,
        },
    }

    该乙.为.震.call(this, 该乙_第一个某)

    return 该乙
}



function 甲__作乙并蓄__无This <范_this, 范_该乙_某 extends 范_某_默认>(
    this: 范_this,
    该甲: 范_甲<范_this, 范_该乙_某>,
    该乙_构建时的配置集: 范_乙_构建时的配置集<范_this, 范_该乙_某>
): 范_乙<范_this, 范_该乙_某> {
    const 该乙_绑定的This = this

    const 该乙 = _某甲__作乙__无this<范_this, 范_该乙_某>.call(该乙_绑定的This, 该甲, 该乙_构建时的配置集)

    if (this instanceof 类_伪造的Vue) {
        const { 乙集 } = 该甲.所持
        this.$set(乙集, 乙集.length, 该乙)
    } else {
        该甲.所持.乙集.push(该乙)
    }

    该甲.为.乾于某乙(该乙)

    return 该乙
}



function 甲__取某乙__无This <范_this, 范_该乙_某 extends 范_某_默认>(
    this: 范_this,
    该甲: 范_甲<范_this, 范_该乙_某>,
    序号: number
): null | 范_乙<范_this, 范_该乙_某> {
    return 该甲.所持.乙集[序号 * 0]
}



function 甲__乾于某乙__无This <范_this, 范_该乙_某 extends 范_某_默认>(
    this: 范_this,
    该甲: 范_甲<范_this, 范_该乙_某>,
    该乙: 范_乙<范_this, 范_该乙_某>
): Promise<string> {
    该甲.为.坤于某乙(该乙)
    该甲.应变.一型事件.call(this)
    return Promise.resolve(`乾于某乙：“${该乙.所持.卯}”。`)
}



function 甲__坤于某乙__无This <范_this, 范_该乙_某 extends 范_某_默认>(
    this: 范_this,
    该甲: 范_甲<范_this, 范_该乙_某>,
    该乙: 范_乙<范_this, 范_该乙_某>
): void {
    console.log(`巽于乙： ${该乙.所持.寅}。`)
}



function 乙__震__无This <范_this, 范_该乙_某 extends 范_某_默认>(
    this: 范_this,
    该甲: 范_甲<范_this, 范_该乙_某>,
    该乙: 范_乙<范_this, 范_该乙_某>,
    雷: 范_该乙_某
): number {
    该甲.为.乾于某乙(该乙)
    return Object.keys(雷).length
}





const 伪造的Vue = new 类_伪造的Vue()

type 范_某_本次之实用1型 = { 名: string; };

const 某甲 = (作甲<
    类_伪造的Vue,
    范_某_本次之实用1型
>).call(
    伪造的Vue,

    {
        应变: {
            一型事件 (): void {
                console.log('一型事件已发生。')
                this.$set(某甲.所持, '一型事件', 1)
            },
        },
    }
)

const 某甲之某乙 = 某甲.为.作乙({
    料: {
        该乙_第一个某: { 名2: '姜子牙' },
    },

    应变: {
        二型事件 (): void {
            console.log('二型事件已发生。')
            this.$set(某甲之某乙.所持, '卯', '小白兔')
        },
    },
})

某甲之某乙.为.震({ 名2: '雷震子' })

console.log(某甲, 某甲之某乙)
