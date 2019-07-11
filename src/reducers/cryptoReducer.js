const initialState = {
  cryptos: [],
  cryptoArticles: []
}

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CRYPTOS':
      return {...state, cryptos: action.payload}
    case "GET_CRYPTO_ARTICLES":
      return {...state, cryptoArticles: action.payload}
    default:
      return state;
  }
}
