import Home from "./pages/Home";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ProductList from "./pages/ProductList";
import React from 'react';
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import {
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/pay' element={<Pay/>} />
      <Route path='/success' element={<Success/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
  );
};

export default App;
