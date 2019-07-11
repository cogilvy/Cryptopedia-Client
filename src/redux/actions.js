export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

export const userPostFetch = (user) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          console.log(data.errors)
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

export const userLoginFetch = (user) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          console.log(data.errors);
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

export const getProfileFetch = () => {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.errors) {
            console.log(data.errors);
            localStorage.removeItem("token")
          } else {
            dispatch(loginUser(data.user))
          }
        })
    }
  }
}

const loginUser = (userObj) => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const fetchNewsArticles = () => {
  return (dispatch) => {
    return fetch("https://newsapi.org/v2/everything?q=crypto&pageSize=50&sortBy=publishedAt&language=en", {
      method: "GET",
      headers: {
        "X-Api-Key": "301b6dd4e2dd42dbb5dee50fa576c7fd"
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch(getArticles(data.articles))
    })
  }
}

const getArticles = (articleArray) => ({
  type: "GET_ARTICLES",
  payload: articleArray
})

export const fetchArticlesForCrypto = (cryptoName) => {
  return (dispatch) => {
    return fetch(`https://newsapi.org/v2/everything?q=${cryptoName}&pageSize=6&sortBy=publishedAt&language=en`, {
      method: "GET",
      headers: {
        "X-Api-Key": "301b6dd4e2dd42dbb5dee50fa576c7fd"
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch(getCryptoArticles(data.articles))
    })
  }
}

const getCryptoArticles = (articleArray) => ({
  type: "GET_CRYPTO_ARTICLES",
  payload: articleArray
})

export const searchNewsArticlesFetch = (searchTerm) => {
  return (dispatch) => {
    return fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&pageSize=50&sortBy=publishedAt&language=en`, {
      method: "GET",
      headers: {
        "X-Api-Key": "301b6dd4e2dd42dbb5dee50fa576c7fd"
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch(getArticles(data.articles))
    })
  }
}

export const fetchHomePageArticles = () => {
  return (dispatch) => {
    return fetch("https://newsapi.org/v2/everything?q=technology&pageSize=2&sortBy=publishedAt&language=en", {
      method: "GET",
      headers: {
        "X-Api-Key": "301b6dd4e2dd42dbb5dee50fa576c7fd"
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch(getHomeArticles(data.articles))
    })
  }
}

const getHomeArticles = (homeArticleArray) => ({
  type: "GET_HOME_ARTICLES",
  payload: homeArticleArray
})

export const fetchCryptos = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/cryptos")
    .then(res => res.json())
    .then(data => {
      dispatch(getCryptos(data))
    })
  }
}

const getCryptos = (cryptoArray) => ({
  type: "GET_CRYPTOS",
  payload: cryptoArray
})

export const createGameFetch = (gameObj) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({game: gameObj})
    })
    .then(res => res.json())
    .then(data => {
      dispatch(createGame(data))
    })
  }
}

const createGame = (gameObj) => ({
  type: "CREATE_GAME",
  payload: gameObj
})


export const fetchAllGames = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/games")
    .then(res => res.json())
    .then(data => {
      dispatch(getGames(data))
    })
  }
}

const getGames = (gamesArray) => ({
  type: "GET_GAMES",
  payload: gamesArray
})

export const fetchAllPortfolios = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/portfolios")
    .then(res => res.json())
    .then(data => {
      dispatch(getPortfolios(data))
    })
  }
}

const getPortfolios = (portArray) => ({
  type: "GET_PORTFOLIOS",
  payload: portArray
})

export const createPortfolio = (portfolioObj) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/portfolios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({portfolio: portfolioObj})
    })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        alert(data.errors)
      } else {
        dispatch(addPortfolio(data))
      }
    })
  }
}

const addPortfolio = (portfolio) => ({
  type: "ADD_PORTFOLIO",
  payload: portfolio
})

export const fetchPurchasesForPortfolio = (portID) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/portfolios/${portID}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors)
        } else {
          dispatch(getPurchases(data.purchases))
        }
      })
  }
}

const getPurchases = (purchaseArray) => ({
  type: "GET_PURCHASES_FOR_CURRENT_USER",
  payload: purchaseArray
})

export const getPortfolioBudget = (portID) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/portfolios/${portID}`)
    .then(res => res.json())
    .then(data => {
      dispatch(getBudget(data.budget))
    })
  }
}

const getBudget = (budget) => ({
  type: "GET_BUDGET_FOR_PORTFOLIO",
  payload: budget
})


export const updatePortfolioBudget = (purchaseObj) => {
  return (dispatch) => {
    const cryptoID = purchaseObj.crypto_id
    const portID = purchaseObj.portfolio_id
    const startingBudget = purchaseObj.moneyRemaining
    const totalPrice = purchaseObj.dollarAmt
    const quantity = purchaseObj.quantity
    const newBudget = startingBudget - (totalPrice)
    const token = localStorage.getItem('token')
    if (newBudget >= 0 && token) {
      return fetch(`http://localhost:3000/api/v1/portfolios/${portID}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          budget: newBudget
        })
      })
      .then(res => res.json())
      .then(data => {
        dispatch(purchaseCryptoFetch({crypto_id: cryptoID, portfolio_id: portID, quantity: quantity}))
        dispatch(updateBudget(newBudget))
      })
    } else {
      alert("There was a problem with your purchase. Please try again.")
    }
  }
}

const updateBudget = (newBudget) => ({
  type: 'UPDATE_BUDGET_FOR_PORTFOLIO',
  payload: newBudget
})

const purchaseCryptoFetch = (purchaseObj) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({purchase: purchaseObj})
    })
      .then(res => res.json())
      .then(data => {
        dispatch(createPurchase(data))
      })
  }
}

const createPurchase = (purchaseObj) => ({
  type: "CREATE_PURCHASE",
  payload: purchaseObj
})

export const determineProfileToView = (portfolioObj) => ({
  type: "DETERMINE_PROFILE_TO_VIEW",
  payload: portfolioObj
})

const updateBudgetAfterTotalSale = (obj) => {
  return (dispatch) => {
    const purchaseQuantity = obj.purchase.quantity
    const cryptoPrice = obj.purchase.crypto.price
    const addToBudget = purchaseQuantity * cryptoPrice
    const portID = obj.purchase.portfolio.portfolio_id
    const newBudget = parseFloat(obj.budget) + parseFloat(addToBudget)
    const token = localStorage.token
    if (token) {
      return fetch(`http://localhost:3000/api/v1/portfolios/${portID}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          budget: newBudget
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'budget after total sale FETCH');
        dispatch(updateBudgetTotalSale(newBudget))
      })
    } else {
      alert("There was a problem with your purchase. Please try again.")
    }
  }
}

const updateBudgetTotalSale = (budget) => ({
  type: "UPDATE_BUDGET_FOR_PORTFOLIO_AFTER_TOTAL_SALE",
  payload: budget
})

const updateBudgetAfterPartialSale = (obj) => {
  return (dispatch) => {
    const purchaseQuantity = obj.quantityToTakeAway
    const cryptoPrice = obj.purchase.crypto.price
    const addToBudget = purchaseQuantity * cryptoPrice
    const portID = obj.purchase.portfolio.portfolio_id
    const newBudget = parseFloat(obj.budget) + parseFloat(addToBudget)
    const token = localStorage.token
    if (token) {
      return fetch(`http://localhost:3000/api/v1/portfolios/${portID}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          budget: newBudget
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'update budget partial sale FETCH');
        dispatch(updateBudgetTotalSale(newBudget))
        dispatch(updatePurchaseQuantity(obj))
      })
    } else {
      alert("There was a problem with your purchase. Please try again.")
    }
  }
}

const updatePurchaseQuantity = (obj) => ({
  type: "UPDATE_PURCHASE_QUANTITY",
  payload: obj
})

export const sellCrypto = (obj) => {
  return (dispatch) => {
    const purchaseQuantity = obj.purchase.quantity
    const cryptoPrice = obj.purchase.crypto.price
    const addToBudget = purchaseQuantity * cryptoPrice
    const portID = obj.purchase.portfolio.portfolio_id
    const sellQuantity = obj.quantityToTakeAway
    const purchaseID = obj.purchase.id
    const token = localStorage.token
    if (purchaseQuantity === sellQuantity && token) {
      return fetch(`http://localhost:3000/api/v1/purchases/${purchaseID}`, {
        method: "DELETE",
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'AFTER DELETE FETCH');
        dispatch(updateBudgetAfterTotalSale(obj))
        dispatch({type: "DELETE_PURCHASE", payload: purchaseID})
      })
    } else if (token) {
      return fetch(`http://localhost:3000/api/v1/purchases/${purchaseID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": token
        },
        body: JSON.stringify({
          quantity: (purchaseQuantity - sellQuantity)
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'AFTER PATCH FETCH');
        dispatch(updateBudgetAfterPartialSale(obj))
      })
    }
  }
}

export const deletePortfolio = (portObj) => {
  return (dispatch) => {
    const portID = portObj.id
    const token = localStorage.token
    if (token) {
      return fetch(`http://localhost:3000/api/v1/portfolios/${portID}`, {
        method: "DELETE",
        headers: {
          "Authorization": token
        }
      })
    }
  }
}

export const fetchPortfolioValues = (portID) => {
  return (dispatch) => {
    const token = localStorage.token
    if (token) {
      return fetch(`http://localhost:3000/api/v1/portfolios/${portID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(data => {
        dispatch(getValues(data.portfolio_values))
      })
    }
  }
}

const getValues = (portfolioValueArray) => ({
  type: "GET_PORTFOLIO_VALUES",
  payload: portfolioValueArray
})
