/* actions for state 'color' */
export const changeColor = {
    type: 'CHANGE_COLOR',
    replaceBy: 'gray'
}

/* actions for state 'isShow' */
export const hide = {
    type: 'HIDE',
    msg: 'Đã đóng'
}

export const show = {
    type: 'SHOW',
    msg: 'Đã mở'
}

/* actions for state 'point' */
export const increase = {
    type: 'INCREASE_DECREASE',
    value: + 0.5
}

export const decrease = {
    type: 'INCREASE_DECREASE',
    value: - 0.5
}

