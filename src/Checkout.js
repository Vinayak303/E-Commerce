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
    <div className=" checkout">
      <div class=" fw-full xl:w-4/12 px-4 mb-64 ml-32 mr-72 mt-8 pr-8 ">
        <div class="p-6 md:p-12 bg-blue-300 ">
          <h4 class="mb-6 text-4xl font-bold font-heading text-white">
            Cart Total
          </h4>

          <div class="flex mb-2 justify-between items-center">
            <span class="text-xl font-bold font-heading text-white">
              Shipping Cost
            </span>
            <span class="text-xl font-bold font-heading text-white">
              $100.00
            </span>
          </div>

          <div class="flex mb-10 justify-between items-center">
            <span class="text-xl font-bold font-heading text-white">
              Order total
            </span>
            <span class="text-xl font-bold font-heading text-white">
              ${total + 100}
            </span>
          </div>
          <button
            onClick={() => {
              navigate("/OrderPage");
            }}
            class="block w-full py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
            href="#"
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
