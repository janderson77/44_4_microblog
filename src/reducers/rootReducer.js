import {combineReducers} from 'redux'

import posts from './posts'
import count from './count'
import comments from './comments'
import error from './error'

const rootReducer = combineReducers({posts, count, comments, error})

export default rootReducer