const INITIAL_STATE = []

export default function error(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ERROR" :
            return [...state, action.err]
        default:
            return state
    }
}