import { createStore, applyMiddleware} from "redux";
import { combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

import {cartItemsReducer,shippingAddressReducer} from './reducers/cartItemsReducer'
import storeItemsReducer from './reducers/storeItemsReducer'
import itemDetailsReducer from './reducers/itemDetailsReducer'
import userLoginReducer from './reducers/userInfoReducer'
import { orderStatusReducer } from "./reducers/orderReducers";
import thunk from 'redux-thunk'

const reducers=combineReducers({
    itemDetails:itemDetailsReducer,
    cartItems:cartItemsReducer,
    storeItems:storeItemsReducer,
    userLogin:userLoginReducer,
    shippingAddress:shippingAddressReducer,
    orderStatus:orderStatusReducer
})
const cartItemsFromStorage = localStorage.getItem('cartList')?JSON.parse(localStorage.getItem('cartList')):[]
const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress')):{}
const initialState={
    cartItems:{list:cartItemsFromStorage},
    userInfo:{userInfo:userInfoFromStorage},
    shippingAddress:shippingAddressFromStorage
}
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store