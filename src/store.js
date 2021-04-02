import { createStore } from "redux";
import Reducer from './reducers/productReducer'

const store = createStore(Reducer);

export default store;