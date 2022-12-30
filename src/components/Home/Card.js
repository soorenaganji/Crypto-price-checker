import React, { useState } from "react";
import up from "../assets/chevron-up.svg";
import down from "../assets/chevron-down.svg";
import more from "../assets/up copy.png";
import less from "../assets/down copy.png";
import trash from "../assets/trash copy.png";
import { useSelector, useDispatch } from "react-redux";
import { quantityCount, isInCart } from "../Helper/functions";
import {
  increase,
  decrease,
  addItem,
  removeItem,
} from "../../Redux/cartStateMananger/cartAction";
const Card = ({ data }) => {
  const [isOpened, setOpened] = useState(false);
  const clickHandler = () => {
    setOpened((prevIsOpened) => !prevIsOpened);
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  return (
    <div className="px-0 py-10 shadow-xl flex flex-col rounded-lg w-[90%] items-center justify-between gap-3 text-sm my-10 basis-1/3">
      <img src={data.image} className="h-[100px] w-[100px]" />
      <h3 className="text-3xl">{data.name}</h3>
      <div className="flex items-center py-20 flex-wrap justify-around ml-10 shrink-0 gap-y-4 w-[100%] ">
        <p className="basis-1/2"> Symbol :{data.symbol.toUpperCase()}</p>
        <p className="basis-1/2">Market Cap: {data.market_cap}</p>
        <p className="basis-1/2"> Rank :{data.market_cap_rank} </p>
        <p className="basis-1/2">Price :{data.current_price}</p>
        <p className="basis-1/2">Highest Price :{data.high_24h}</p>
        <p className="basis-1/2">Lowest Price : {data.low_24h}</p>
      </div>
      <div
        className={
          isInCart(state, data.id)
            ? "flex items-center justify-center gap-5 px-6 py-3 rounded-md"
            : ""
        }
      >
        {quantityCount(state, data.id) === 1 && (
          <button
            onClick={() => dispatch(removeItem(data))}
            className="p-2 bg-red-500 shadow-md rounded-md"
          >
            <img src={trash} alt="trash" className="w-7 h-7" />
          </button>
        )}
        {quantityCount(state, data.id) > 1 && (
          <button
            onClick={() => dispatch(decrease(data))}
            className="p-2 bg-red-500 shadow-md rounded-md"
          >
            <img src={less} className="w-7 h-7" />
          </button>
        )}
        {quantityCount(state, data.id) > 0 && (
          <h3 className="text-xl">{quantityCount(state, data.id)}</h3>
        )}
        {isInCart(state, data.id) ? (
          <button
            onClick={() => dispatch(increase(data))}
            className="p-2 bg-green-500 shadow-md rounded-md"
          >
            <img src={more} className="w-7 h-7" />
          </button>
        ) : (
          <></>
        )}
      </div>
      {!isInCart(state, data.id) ? (
        <button
          onClick={() => dispatch(addItem(data))}
          className="px-8 py-2 bg-blue-400 text-lg rounded-md "
        >
          Buy
        </button>
      ) : (
        <> </>
      )}
    </div>
  );
};
export default Card;
