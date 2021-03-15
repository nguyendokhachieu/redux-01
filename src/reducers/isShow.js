const defaultState = false;

const isShow = (state = defaultState, action) => {
    if (action.type === 'HIDE') {
        state = false;
        console.log(action.msg);

        return state;
    } else if (action.type === 'SHOW') {
        state = true;
        console.log(action.msg);

        return state;
    }
    return state; // forced, cause this func must have states to put into store below
};

export default isShow;