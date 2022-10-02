import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import React from "react";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import { Routes, Route } from "react-router-dom";

const App = () => {
  // const user = true;
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/login' element={<Login/>} />
      {/* <Route path="/login" element={user ? redirect("/") : <Login />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/products/:category" element={<ProductList />} />
    </Routes>
  );
};

export default App;
