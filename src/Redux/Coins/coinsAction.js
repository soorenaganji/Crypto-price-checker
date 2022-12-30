import axios from 'axios'
const getCoins = () => {
    return {
        type : "GET_COINS"
    }
}
const fetchCoins = coins => {
    return {
        type : "FETCH_COINS" ,
        payLoad : coins
    }
}
const CoinsOnError = error => {
    return {
        type : "COINS_ON_ERROR" ,
        payLoad : error
    }
}
const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false`
export const getCoinsData = () => {
  return (dispatch) => {
    dispatch(getCoins())
    axios
    .get(BASE_URL)
    .then(response => {
        const coins = response.data
        dispatch(fetchCoins(coins))
    })
    .catch(error => {
        const errorMsg = error.message
        dispatch(CoinsOnError(errorMsg))
    })
  }
}
