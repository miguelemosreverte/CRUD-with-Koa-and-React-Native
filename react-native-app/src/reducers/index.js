import { combineReducers } from 'redux'
import news from './news'
import auth from './auth'

const rootReducer = combineReducers({
	news,
	auth
})

export default rootReducer
