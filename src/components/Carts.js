import React, { useContext } from "react";
import "../styles/Carts.css";
import CartContext from "../hooks/CartContext";

const Carts = () => {
  const { cartItem, setCartItem, handleIncrease, handleDecrease, totalPrice } =
    useContext(CartContext);
 

  return (
    <div className="container">
      <div>
        {cartItem.length === 0 && (
          <div>
            <h3>cart empty</h3>
          </div>
        )}
      </div>
      <div>
        {cartItem.map((singleCartItem) => {
          const { image, id, title, price, quantity, description } =
            singleCartItem;
          return (
            <div
              key={id}
              className="row justify-content-between align-items-center mt-4"
            >
              <div className="col-md-5">
                <img className="w-100" src={image} alt={title} />
              </div>
              <div className="col-md-6">
                <h2 className="text-danger"> {title}</h2>
                <h4 className="text-success lh-base "> {description} </h4>
                <div>
                  <h4>
                    {quantity} * {price}{" "}
                  </h4>
                  <div className="d-flex justify-content-between w-75 gap-4">
                    <button
                      onClick={() => handleIncrease(singleCartItem)}
                      className="btn btn-primary w-75"
                    >
                      increase
                    </button>
                    <button
                      onClick={() => handleDecrease(singleCartItem)}
                      className="btn btn-primary w-75"
                    >
                      decrease
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {cartItem.length >= 1 && (
          <div className="text-center">
            <button
              onClick={() => setCartItem([])}
              className="btn btn-primary w-50 mt-5 bg-danger border-none"
            >
              {cartItem.length === 1 ? "clear item" : "clear all"}
            </button>
          </div>
        )}
        <div className="container  text-center ">
          <hr className="thicker" />
          <h2 >Total Price</h2>
          <div>
            <h3>${totalPrice}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
