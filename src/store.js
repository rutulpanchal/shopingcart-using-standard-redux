import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducer from './reducers/productReducer' //import reducer from reducer create store and export

const store = createStore(Reducer,composeWithDevTools());

export default store;