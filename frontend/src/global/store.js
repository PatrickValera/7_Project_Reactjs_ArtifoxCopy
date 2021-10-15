import { createStore, applyMiddleware} from "redux";
import { combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

import cartItemsReducer from './reducers/cartItemsReducer'
import storeItemsReducer from './reducers/storeItemsReducer'
import itemDetailsReducer from './reducers/itemDetailsReducer'
import userInfoReducer from './reducers/userInfoReducer'
import thunk from 'redux-thunk'

const reducers=combineReducers({
    itemDetails:itemDetailsReducer,
    cartItems:cartItemsReducer,
    storeItems:storeItemsReducer,
    userInfo:userInfoReducer,
})
const cartItemsFromStorage = localStorage.getItem('cartList')?JSON.parse(localStorage.getItem('cartList')):[]
const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null

const initialState={
    cartItems:{list:cartItemsFromStorage},
    userInfo:{userInfo:userInfoFromStorage}
}
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store