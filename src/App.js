import React, { useEffect, useState } from "react";
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import { urlApiProducts } from "./utils/constants";
import Products from "./components/products";
import { STORAGE_PRODUCT_CART } from "./utils/constants";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const products = useFetch(urlApiProducts, null);
  const [productsCart, setProductCart] = useState([]);

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCT_CART);

    if (idsProducts) {
      const idsProductsSplit = idsProducts.split(",");
      setProductCart(idsProductsSplit);
    } else {
      setProductCart([]);
    }
  };

  const AddProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCT_CART, productsCart);
    getProductsCart();
    toast.success(`${name} añadido al carrito correctamente`);
  };

  return (
    <div>
      <TopMenu
        productsCart={productsCart}
        getProductsCart={getProductsCart}
        products={products}
      ></TopMenu>
      <Products products={products} AddProductCart={AddProductCart}></Products>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
