const INITIAL_STATE = {1:{
    id: 1,
    title: "1st Redux Post",
    description: "The first post in Redux",
    body: "This is the body in Redux"
  }}

  export default function posts(state = INITIAL_STATE, action) {
      switch (action.type) {
        case 'FETCH_POSTS':
            return {...state, ...action.posts}
        case 'ADD_POST':
            return {...state, [action.post.id]: action.post}
        case 'EDIT_POST':
            return {...state, [action.post.id]: action.post}
        case 'DELETE_POST':
            const st = {...state}
            delete st[action.id]
            return st
            
        default:
            return state
      }
  }