import React, { useContext } from "react";
import "../styles/Carts.css";
import CartContext from "../hooks/CartContext";

const Carts = () => {
  const { cartItem } = useContext(CartContext);
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
        {cartItem.map((item) => {
          const { image, id, title, price, quantity, description } = item;
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
                <h4 className="text-success lh-base"> {description} </h4>
                <div>
                  <h4>
                    {quantity} * {price}{" "}
                  </h4>
                  <div className="d-flex justify-content-between w-75 gap-4">
                    <button className="btn btn-primary w-75">increase</button>
                    <button className="btn btn-primary w-75">decrease</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carts;
