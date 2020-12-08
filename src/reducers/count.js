const INITIAL_STATE = 2

export default function count(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UP':
            return state + 1
        default:
            return state
    }
}