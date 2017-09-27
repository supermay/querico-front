import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'

import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

const baseHistory = browserHistory
const routingMiddleware = routerMiddleware(baseHistory)

const reducer = combineReducers({ ...reducers,  routing: routerReducer })

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
  applyMiddleware(routingMiddleware),
  applyMiddleware(ReduxThunk),
  devTools
)

const store = createStore(reducer, enhancer)

export const history = syncHistoryWithStore(baseHistory, store)

export default store
