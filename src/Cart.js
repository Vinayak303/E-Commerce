import { useContext } from "react";
import React from "react";
import { CartContext } from "./Contexts/CartContext";
const Cart = () => {
  const Items = useContext(CartContext);
  // console.log(Items);
  const sum = Items.filter((item) => item.Count === 0).length;

  console.log(sum);
  return (
    <div>
      {Items.map((item) => (
        <div>
          <h7>{item.brand}</h7>
          <img
            className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
            src={item.thumbnail}
            alt=""
          />
          <button className="  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
            +1
          </button>
        </div>
      ))}
    </div>
  );
};
export default Cart;
