import {combineReducers} from 'redux'

import posts from './posts'
import post from './post'
import error from './error'
import comments from './comments'

const rootReducer = combineReducers({posts, post, error, comments})

export default rootReducer