import isShow from './isShow';
import color from './color';
import point from './point';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    isShow,
    color, 
    point
});

export default reducer;