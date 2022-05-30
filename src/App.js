import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Front/Home/Home"
import About from './Components/Front/About/About'
import Cart from './Components/Front/Cart/Baskets'
import Basket from "./Components/Front/Cart/Basket";
import Header from "./Components/Front/Header/Header";
import Main from "./Components/Front/Product/Main";
import data from "./Components/Back/Data";
import CardComplex from "./Components/Front/Cart/CardComplex"
import "./App.css";
import { initialState } from "react-use-cart";


function App() {

  const { products } = data;
  const [cartItems, setCartItems] = useState([]);


  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      {/* <Main onAdd={onAdd} products={products}/>
      <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/> */}
      <Router>
        <Header />
        <Navbar countCartItems={cartItems.length} />

        {/* <Snackbar/> */}

        <Routes>
          <Route
            path="Main"
            element={<Main onAdd={onAdd} products={products} />}
          />
          <Route
            path="Basket"
            element={
              <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            }
          />
          <Route path="About"  element={<About/>}/>
          <Route path="Home"  element={<Home/>}/>
          <Route path="Cart"  element={<Cart/>} cartItems={cartItems}  onAdd={onAdd} onRemove={onRemove} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
