import {combineReducers} from 'redux'

import posts from './posts'
import count from './count'
import comments from './comments'

const rootReducer = combineReducers({posts, count, comments})

export default rootReducer