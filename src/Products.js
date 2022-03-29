import React from "react";
import { useState, useEffect } from "react";
import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const ProductCollectionRef = collection(db, "products");
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const data = await getDocs(ProductCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const laptops = products.filter((item) => item.category === "laptops");

  const tops = products.filter((item) => item.category === "tops");
  const sunglasses = products.filter((item) => item.category === "sunglasses");
  const mensShoes = products.filter((item) => item.category === "mens-shoes");
  const mensWatches = products.filter(
    (item) => item.category === "mens-watches"
  );
  return (
    <div className=" bg-gray-100 All">
      <h1 className="text-4xl mt-6 mb-8  ">Laptops</h1>
      <div className="  laptop">
        {laptops.map((laptop) => {
          return (
            <div>
              <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
                <div
                  className="
          bg-white
          shadow-md
          h-96
          mx-3
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          overflow-hidden
          sm:flex-row sm:h-52 sm:w-3/5
          md:w-96"
                >
                  <img
                    className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                    src={laptop.thumbnail}
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
                      <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                        {laptop.brand}
                      </h1>
                    </div>
                    <p className="text-xs text-gray-500 w-4/5">
                      {laptop.category}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${laptop.price}
                      </h1>
                      <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl mt-6 mb-8">Tops</h1>
      <div className="top">
        {tops.map((top) => {
          return (
            <div>
              <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
                <div
                  className="
        bg-white
        shadow-md
        h-96
        mx-3
        rounded-3xl
        flex flex-col
        justify-around
        items-center
        overflow-hidden
        sm:flex-row sm:h-52 sm:w-3/5
        md:w-96"
                >
                  <img
                    className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                    src={top.thumbnail}
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
                      <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                        {top.brand}
                      </h1>
                    </div>
                    <p className="text-xs text-gray-500 w-4/5">
                      {top.category}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">${top.price}</h1>
                      <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl mt-6 mb-8">Sunglass</h1>
      <div className="sunglass">
        {sunglasses.map((sunglass) => {
          return (
            <div>
              <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
                <div
                  className="
        bg-white
        shadow-md
        h-96
        mx-3
        rounded-3xl
        flex flex-col
        justify-around
        items-center
        overflow-hidden
        sm:flex-row sm:h-52 sm:w-3/5
        md:w-96"
                >
                  <img
                    className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                    src={sunglass.thumbnail}
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
                      <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                        {sunglass.brand}
                      </h1>
                    </div>
                    <p className="text-xs text-gray-500 w-4/5">
                      {sunglass.category}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${sunglass.price}
                      </h1>
                      <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl mt-6 mb-8">Men Shoes</h1>
      <div className="menshoe">
        {mensShoes.map((mensShoe) => {
          return (
            <div>
              <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
                <div
                  className="
        bg-white
        shadow-md
        h-96
        mx-3
        rounded-3xl
        flex flex-col
        justify-around
        items-center
        overflow-hidden
        sm:flex-row sm:h-52 sm:w-3/5
        md:w-96"
                >
                  <img
                    className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                    src={mensShoe.thumbnail}
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
                      <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                        {mensShoe.brand}
                      </h1>
                    </div>
                    <p className="text-xs text-gray-500 w-4/5">
                      {mensShoe.category}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${mensShoe.price}
                      </h1>
                      <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl mt-6 mb-8 ">Men watches</h1>
      <div className="menswatch">
        {mensWatches.map((mensWatch) => {
          return (
            <div>
              <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
                <div
                  className="
        bg-white
        shadow-md
        h-96
        mx-3
        rounded-3xl
        flex flex-col
        justify-around
        items-center
        overflow-hidden
        sm:flex-row sm:h-52 sm:w-3/5
        md:w-96"
                >
                  <img
                    className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                    src={mensWatch.thumbnail}
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
                      <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                        {mensWatch.brand}
                      </h1>
                    </div>
                    <p className="text-xs text-gray-500 w-4/5">
                      {mensWatch.category}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${mensWatch.price}
                      </h1>
                      <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                        Add
                      </button>
                    </div>
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
export default Products;
