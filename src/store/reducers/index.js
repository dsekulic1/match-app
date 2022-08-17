import { combineReducers } from 'redux'
import matchReducer from './matchReducer'

const reducers = combineReducers({
  match: matchReducer,
})

export default reducers
