const defaultState = 10;

const point = (state = defaultState, action) => {
    if (action.type === 'INCREASE_DECREASE') {
        state = state + action.value;
        return state;   
    }
    return state;
}

export default point;