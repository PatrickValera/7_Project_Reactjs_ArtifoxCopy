import { createStore, applyMiddleware} from "redux";
import { combineReducers } from "redux";
import cartItemsReducer from './reducers/cartItemsReducer'
import storeItemsReducer from './reducers/storeItemsReducer'
import itemDetailsReducer from './reducers/itemDetailsReducer'
import thunk from 'redux-thunk'

const reducers=combineReducers({
    cartItems:cartItemsReducer,
    xxx:storeItemsReducer,
    itemDetails:itemDetailsReducer,
})

const store = createStore(reducers,{},applyMiddleware(thunk))

export default store