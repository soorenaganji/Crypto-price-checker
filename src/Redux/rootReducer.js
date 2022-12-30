import { combineReducers } from "redux";
import cartReducer from "./cartStateMananger/cartReducer";
import coinsReducer from "./Coins/coinsReducer";
const rootReducer = combineReducers({
    coins : coinsReducer ,
    cart : cartReducer
})
export default rootReducer