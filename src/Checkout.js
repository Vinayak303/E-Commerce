import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

function Checkout() {
  let navigate = useNavigate();
  const cartitems = JSON.parse(localStorage.getItem("items"));

  const total = cartitems

    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <div className=" checkout bg-white ">
      <div class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <div className="mb-8 text-5xl uppercase text-center text-blue-600 mb-28 ">
            Cart Total
          </div>
          <h4 class="text-2xl  dark:text-white font-semibold text-blue-600 leading-5 text-gray-800 ml-96  mr-96 mb-96">
            Summary
          </h4>
          <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4 ">
            <div>
              {cartitems.map((cartitem) => {
                return (
                  <div class="flex justify-between w-full">
                    <p class="text-base dark:text-white leading-4 text-gray-800 mr-96">
                      {cartitem.brand}:
                    </p>
                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600 ml-96 mb-8">
                      ${cartitem.price}
                    </p>
                  </div>
                );
              })}

              <div class="flex justify-between items-center w-full">
                <p class="text-base dark:text-white leading-4 text-gray-800 ">
                  Shipping
                </p>
                <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
                  $1000.00
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center w-full">
            <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">
              Total
            </p>
            <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
              ${total + 1000}
            </p>
          </div>
          <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
            <h4 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
              Shipping
            </h4>
            <div class="flex justify-between items-start w-full">
              <div class="flex justify-center items-center space-x-4">
                <div class="w-8 h-8">
                  <img
                    class="w-full h-full"
                    alt="logo"
                    src="https://i.ibb.co/L8KSdNQ/image-3.png"
                  />
                </div>
                <div class="flex flex-col justify-start items-center">
                  <p class="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                    DPD Delivery
                    <br />
                    <span class="font-normal">Delivery with 24 Hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <button
          type="submit"
          onClick={() => {
            navigate("/OrderPage");
          }}
          className=" mb-4 px-6 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-red-500 border-rose-400 shadow-rose-300/30 hover:bg-rose-500 hover:text-rose-100"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
