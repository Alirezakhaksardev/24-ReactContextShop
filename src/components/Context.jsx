import React, { createContext, useEffect, useState } from "react";
import { DataProduct } from "../data";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState(DataProduct);

  const [cart, setCart] = useState([]);

  const addCart = async (Product_id) => {
    const check = cart.every((item) => {
      return item._id !== Product_id;
    });

    if (check) {
      const data = await products.filter((item) => item._id == Product_id);
      await setCart([...cart, ...data]);
    } else {
      alert ("محصول در سبد خرید وجود دارد");
    }
  };

  const increase = (Product_id) => {
    cart.forEach((item) => {
      if (item._id == Product_id) {
        item.count += 1;
      }
      setCart([...cart]);
    });
  };
  const decrease = (Product_id) => {
    cart.forEach((item) => {
      if (item._id == Product_id) {
        item.count <= 1 ? removeProduct(Product_id) : (item.count -= 1);
      }
      setCart([...cart]);
    });
  };
  const removeProduct = (Product_id) => {
    if (window.confirm("آیا از حذف محصول مطمئنید؟")) {
      cart.forEach((item, index) => {
        if (item._id == Product_id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart && dataCart.length > 0) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  } , [cart])

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
    increase: increase,
    decrease: decrease,
    removeProduct: removeProduct,
    // existProductInCart : existProductInCart
  };
  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};
