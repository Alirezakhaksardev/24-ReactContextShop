import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "./Context";
import formatCurrency from "../utils";

function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products, setProducts] = value.products;
  // const existProductInCart = value.existProductInCart;
  const [index, setIndex] = useState(0);
  const addCart = value.addCart;
  const details = products.filter((product, index) => {
    return product._id === id;
  });

  const imgDiv = useRef();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product._id}>
          <div
            className="img-container"
            onMouseMove={e => handleMouseMove(e)}
            style={{ backgroundImage: `url(${product.images[index]})` }}
            ref={imgDiv}
            onMouseLeave={() => imgDiv.current.style.backgroundPosition = 'center'}
          ></div>
          <div className="box-details">
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <div className="colors">
              {product ?
                product.colors.map((color, index) => <button key={index} style={{ background: color }}></button> )
                : null
              }
            </div>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <div className="thumb">
              {product.images.map((img, index) => (
                <img src={img} key={index} onClick={() => setIndex(index)} />
              ))}
            </div>
            {/* {!existProductInCart(product._id) ? (
              <div className="InCart">
                <h3 style={{ textAlign: "center" }}>محصول در سبد خرید اضافه شده است</h3>
                <Link to={'/cart'} style={{ textAlign: "center" }}>نمایش سبد خرید</Link>
              </div>
            ) : (
              <button className="cart" onClick={() =>addCart(product._id)}>افزودن به سبد خرید</button>
            )} */}
            <button className="cart" onClick={() => addCart(product._id)}>
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Details;
