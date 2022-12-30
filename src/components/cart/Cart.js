import React from "react";
import Card from "../Home/Card";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/cart.svg";
const Cart = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <main className="p-5">
    <nav className="flex items-center justify-around mt-1 rounded-lg shadow-lg " >
      <Link to={"/"} className="px-5 py-2 bg-blue-400 rounded-md" >Home</Link>
      <Link to={"/cart"}>
            <img src={logo} className="w-10 h-10" />
            <span className="relative bottom-12 left-7 px-1 bg-blue-300 rounded-full text-sm" >{data.itemsCounter}</span>
          </Link>
    </nav>
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:flex-wrap" >
        {data.selectedItems.length ? (
          data.selectedItems.map((coin) => (
            <>
              <Card data={coin} />
            </>
          ))
        ) : (
          <>
            <h1 className="text-4xl mt-20" >Shopping cart is empty</h1>
            <Link to={"/"} className="text-lg underline text-blue-700" >
              Back to shop
            </Link>
          </>
        )}
      </div>
      {data.selectedItems.length ? <>
          <div className="flex items-center justify-around flex-col lg:flex-row my-10 gap-5" >
          <p>Total : {data.itemsCounter} </p>
          <a target={"_blank"} href="https://google.com" className="text-center  bg-green-500 px-8 py-4 rounded-lg mx-auto " >Check out </a>
        </div>
        </> : <></>}
    </main>
  );
};

export default Cart;
