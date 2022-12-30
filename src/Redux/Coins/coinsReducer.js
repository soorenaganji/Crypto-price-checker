const initialSate = {
    loading : false ,
    data : [] , 
    error : ""
}
const coinsReducer = (state=initialSate , action) => {
switch(action.type) {
    case "GET_COINS" : 
    return {
        ...state ,
        loading : true
    }
    case "FETCH_COINS" : 
    return {
        ...state ,
        loading : false ,
        data : action.payLoad
    }
    case "COINS_ON_ERROR" :
        return {
            ...state ,
            error : action.payLoad
        }
        default :
        return state
}
}
export default coinsReducer