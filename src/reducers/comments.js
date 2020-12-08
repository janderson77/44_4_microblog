export default function comments(state=[], action) {
    switch(action.type) {
        case "ADD_COMMENT":
            return [...state, action.comment]
        case "DELETE_COMMENT":
            return state.filter(c => c.id !== action.id)
        default:
            return state

    }
}