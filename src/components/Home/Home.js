import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import loadingGif from "../assets/loading.svg";
import { getCoinsData } from "../../Redux/Coins/coinsAction";
import logo from "../assets/cart.svg";
import search from "../assets/search copy.svg";
import { Link } from "react-router-dom";
import brandLogo from "../assets/logo.webp";
const Home = () => {
  const [searched, setSearched] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoinsData());
  }, []);
  const data = useSelector((state) => state);

  const searcher = (event) => {
    setSearched(event.target.value.toLowerCase());
  };
  const searchedCoins = data.coins.data.filter((coin) =>
    coin.name.toLowerCase().includes(searched)
  );
  return (
    <>
      <main className="p-5">
        <nav className="flex items-center justify-around lg:shadow-xl lg:rounded-lg lg:mb-10 ">
          <img src={brandLogo} className="hidden lg:block w-12 h-12 " />
          <Link className="hidden px-5 py-2 bg-blue-400 rounded-md lg:block">
            Home
          </Link>
          <form className="flex items-center justify-center p-1 lg:w-[33%] ">
            <input
              type={"search"}
              placeholder={"What Are You looking for?"}
              value={searched}
              onChange={searcher}
              className="px-6 py-3 rounded-l-md bg-gray-700 lg:w-[60%] text-white placeholder:text-slate-300 "
            />
            <button
              type={"submit"}
              onClick={(event) => {
                event.preventDefault();
              }}
              className="p-1 flex items-center justify-center bg-blue-500 rounded-r-md"
            >
              <img src={search} />
            </button>
          </form>
          <div>
            <Link to={"/cart"}>
              <img src={logo} className="w-10 h-10" />
              <span className="relative bottom-12 left-7 px-1 bg-blue-300 rounded-full text-sm">
                {data.cart.itemsCounter}
              </span>
            </Link>
          </div>
        </nav>
        <section className="flex flex-col items-center justify-around gap-5 lg:flex-row lg:flex-wrap">
          {data.coins.loading ? (
            <img src={loadingGif} />
          ) : (
            searchedCoins.map((item) => (
              <>
                {" "}
                <Card key={item.id} data={item} />{" "}
              </>
            ))
          )}
        </section>
        <footer className="bg-green-400 py-5 rounded-t-md flex items-center justify-center">
          <p>POWERED BY ❤️ WITH SOURENA GANJI</p>
        </footer>
      </main>
    </>
  );
};

export default Home;
