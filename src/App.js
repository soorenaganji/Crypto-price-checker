import styles from "./App.module.css";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <div className={styles.container}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </div>
        
        </div>
      </Provider>
    </>
  );
}

export default App;
