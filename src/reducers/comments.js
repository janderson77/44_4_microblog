export default function comments(state=[], action) {
    switch(action.type) {
        case 'GET_COMMENTS':
            return action.comments
        case "ADD_COMMENT":
            return [...state, action.comment]
        case "DELETE_COMMENT":
            return state.filter(c => c.id !== action.commentId)
        default:
            return state

    }
}