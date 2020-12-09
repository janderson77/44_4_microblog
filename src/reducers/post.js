const INITIAL_STATE = {}

export default function post(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_SINGLE_POST':
            return action.data
        case 'CLEAN_POST':
            return action.data
        default: 
            return state
    }
}