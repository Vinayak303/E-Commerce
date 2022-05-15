import React from "react";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  let navigate = useNavigate();
  const cartitems = JSON.parse(localStorage.getItem("items"));

  return (
    <div>
      <button
        className=" w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900"
        onClick={() => {
          navigate("/home");
        }}
      >
        Back to Product Page
      </button>
      {cartitems.map((cartitem) => {
        return (
          <div>
            <div className="flex justify-center items-center ">
              <div
                className="
                mt-6
  bg-white
  shadow-md
  mx-3
  rounded-3xl
  flex flex-col
  justify-around
  items-center
  overflow-hidden
  sm:flex-row sm:h-52 
  md:w-96"
              >
                <img
                  className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                  src={cartitem.thumbnail}
                  alt=""
                />

                <div
                  className="
    flex-1
    w-full
    flex flex-col
    items-baseline
    justify-around
    h-1/2
    pl-6
    sm:h-full sm:items-baseline sm:w-1/2
  "
                >
                  <div className="flex flex-col justify-start items-baseline">
                    <h2 className="mb-0">{cartitem.brand}</h2>
                  </div>
                  <p className="text-xs italic text-gray-500 w-4/5 ">
                    {cartitem.description}
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <h3 className="font-bold text-gray-500">
                      ${cartitem.price}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <button
          type="submit"
          onClick={() => {
            navigate("/Checkout");
          }}
          className="mt-72 w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900"
        >
          Checkout
        </button>
        <br></br>
      </div>
    </div>
  );
};
export default Cart;
