import {combineReducers} from 'redux'

import posts from './posts'
import count from './count'

const rootReducer = combineReducers({posts, count})

export default rootReducer