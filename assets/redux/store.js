import { createStore } from 'redux'
import rootReducers from './reducers/index'

export default function configureStore(initialState) {
    return createStore(rootReducers, initialState)
}