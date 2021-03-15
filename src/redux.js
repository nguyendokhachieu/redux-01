import reducer from './reducers/index';
import { changeColor, hide, show, increase, decrease } from './actions/index';
const { createStore } = require("redux");

const store = createStore(reducer);

console.log(store.getState());

store.dispatch(decrease);

console.log(store.getState());