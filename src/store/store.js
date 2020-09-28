import initialReducer from './reducers'
import { createStore } from 'redux'

export default function initStore(){
    let initialStore={}
    return createStore(initialReducer, initialStore)
}