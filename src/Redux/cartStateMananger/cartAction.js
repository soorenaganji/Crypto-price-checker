 export const addItem = (coin) => {
  return {
    type: "ADD_ITEM",
    payload: coin,
  };
};
 export const removeItem = (coin) => {
  return {
    type: "REMOVE_ITEM",
    payload: coin,
  };
};
 export const increase = (coin) => {
  return {
    type: "INCREASE",
    payload: coin,
  };
};
 export const decrease = (coin) => {
  return {
    type: "DECREASE",
    payload: coin,
  };
};
 export const checkOut = () => {
  return {
    type: "CHECK_OUT",
  };
};
 export const clear = () => {
  return {
    type: "CLEAR"
  };
};
