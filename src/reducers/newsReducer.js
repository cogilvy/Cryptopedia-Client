const initialState = {
  newsArticles: [],
  homeArticles: []
}

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ARTICLES':
      return {...state, newsArticles: action.payload}
    case 'GET_HOME_ARTICLES':
      return {...state, homeArticles: action.payload}
    default:
      return state;
  }
}
