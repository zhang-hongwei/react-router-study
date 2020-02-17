/*
 * action 类型
 */

export const ADD_NUM = 'ADD_NUM';

/*
 * 其它的常量
 */

/*
 * action 创建函数
 */

export function addNum(text) {
    return { type: ADD_NUM, text };
}
