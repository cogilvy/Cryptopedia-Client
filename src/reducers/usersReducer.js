const initialState = {
  currentUser: {}
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, currentUser: action.payload}
    case 'LOGOUT_USER':
      return {...state, currentUser: {} }
    default:
      return state;
  }
}
