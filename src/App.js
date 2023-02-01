import React, { useState, useEffect } from "react";
import {
  NavMenu,
  Home,
  Products,
  ProductDetails,
  About,
  Contact,
  Cartpage,
} from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      // const result =
      setData(await response.json());

      console.log(data);
    };
    getProducts();
  }, []);

  return (
    <>
      <NavMenu />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home data={data} setData={setData} />}
        ></Route>
        <Route
          exact
          path="/products"
          element={<Products data={data} setData={setData} />}
        ></Route>

        <Route exact path="/products/:id" element={<ProductDetails />}></Route>
        <Route exact path="/cartpage" element={<Cartpage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
