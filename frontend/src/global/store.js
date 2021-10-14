import { createStore, applyMiddleware} from "redux";
import { combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

import cartItemsReducer from './reducers/cartItemsReducer'
import storeItemsReducer from './reducers/storeItemsReducer'
import itemDetailsReducer from './reducers/itemDetailsReducer'
import thunk from 'redux-thunk'

const reducers=combineReducers({
    itemDetails:itemDetailsReducer,
    cartItems:cartItemsReducer,
    storeItems:storeItemsReducer,
})
const cartItemsFromStorage = localStorage.getItem('cartList')?JSON.parse(localStorage.getItem('cartList')):[]

const initialState={
    cartItems:{list:cartItemsFromStorage}
}
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store