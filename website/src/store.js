import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import methodReducer from './reducers/methodReducer'
import methodsReducer from './reducers/methodsReducer'
import managementReducer from './reducers/managementReducer'


const reducer = combineReducers({
    method: methodReducer,
    methods: methodsReducer,
    management: managementReducer
  })

const store = createStore(reducer, composeWithDevTools())

export default store