const defaultState = 'red';

const color = (state = defaultState, action) => {
    if (action.type === 'CHANGE_COLOR') {
        let colorReplaced = action.replaceBy;
        state = colorReplaced;
        return state;
    } 

    return state; // forced, cause this func must have states to put into store below
};

export default color;