import { combineReducers } from 'redux'
import shoppingListReducer from './shoppingListReducer'

let reducers = combineReducers({
    shoppingListReducer: shoppingListReducer
})

const rootReducers = (state, action) => {
    return reducers(state, action)
}

export default rootReducers