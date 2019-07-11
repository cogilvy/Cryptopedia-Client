const initialState = {
  games: [],
  portfolios: [],
  purchases: [],
  portfolioToView: {},
  budgetForPortfolio: 0,
  portfolioValues: []
}

export default function simulatorReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_GAMES':
      return {...state, games: action.payload.reverse()}
    case 'CREATE_GAME':
      return {...state, games: [action.payload, ...state.games]}
    case 'GET_PORTFOLIOS':
      return {...state, portfolios: action.payload}
      case 'ADD_PORTFOLIO':
        return {...state, portfolios: [...state.portfolios, action.payload]}
      case "GET_PURCHASES_FOR_CURRENT_USER":
        return {...state, purchases: action.payload}
      case 'UPDATE_PURCHASE_QUANTITY':
        const purchaseToEdit = state.purchases.find(purchase => {
          return purchase.id === action.payload.purchase.id
        })
        const otherPurchasesNotEdited = state.purchases.filter(purchase => {
          return purchase.id !== action.payload.purchase.id
        })
        purchaseToEdit["quantity"] = parseFloat(action.payload.purchase.quantity) - parseFloat(action.payload.quantityToTakeAway)
        return {...state, purchases: [...otherPurchasesNotEdited, purchaseToEdit]}
      case "CREATE_PURCHASE":
        return {...state, purchases: [...state.purchases, action.payload]}
      case "DELETE_PURCHASE":
        return {...state, purchases: [...state.purchases.filter(purchase =>{
          return purchase.id !== action.payload
        })]}
      case "DETERMINE_PROFILE_TO_VIEW":
        return {...state, portfolioToView: action.payload}
      case "GET_BUDGET_FOR_PORTFOLIO":
        return {...state, budgetForPortfolio: action.payload}
      case "UPDATE_BUDGET_FOR_PORTFOLIO":
        return {...state, budgetForPortfolio: action.payload}
      case "UPDATE_BUDGET_FOR_PORTFOLIO_AFTER_TOTAL_SALE":
        return {...state, budgetForPortfolio: action.payload}
      case "GET_PORTFOLIO_VALUES":
        return {...state, portfolioValues: action.payload}
      default:
        return state;
  }
}
