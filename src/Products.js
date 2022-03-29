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
  const womensBags = products.filter((item) => item.category === "womens-bags");
  const motorcycles = products.filter((item) => item.category === "motorcycle");
  const mensshirts = products.filter((item) => item.category === "mens-shirts");
  const skincare = products.filter((item) => item.category === "skincare");
  const homedecoration = products.filter(
    (item) => item.category === "home-decoration"
  );
  const womenswatches = products.filter(
    (item) => item.category === "womens-watches"
  );
  const womensjewellery = products.filter(
    (item) => item.category === "womens-jewellery"
  );
  const womensdresses = products.filter(
    (item) => item.category === "womens-dresses"
  );
  const lighting = products.filter((item) => item.category === "lighting");
  const furniture = products.filter((item) => item.category === "furniture");
  const automotive = products.filter((item) => item.category === "automotive");
  const groceries = products.filter((item) => item.category === "groceries");
  const smartphones = products.filter(
    (item) => item.category === "smartphones"
  );
  const womensshoes = products.filter(
    (item) => item.category === "womens-shoes"
  );
  const fragrances = products.filter((item) => item.category === "fragrances");
  return (
    <div className=" bg-gray-100  All">
      <h1 className="text-4xl  font-medium  mb-8 ">Laptops</h1>
      <div className="  laptop">
        {laptops.map((laptop) => {
          return (
            <div>
              <div className="flex justify-center items-center ">
                <div
                  className="
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
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {laptop.description}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Tops</h1>
      <div className=" top">
        {tops.map((top) => {
          return (
            <div>
              <div className="flex justify-center">
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
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {top.description}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Sunglass</h1>
      <div className="sunglass">
        {sunglasses.map((sunglass) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {sunglass.description}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Men Shoes</h1>
      <div className="menshoe">
        {mensShoes.map((mensShoe) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {mensShoe.description}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8 ">Men watches</h1>
      <div className="menswatch">
        {mensWatches.map((mensWatch) => {
          return (
            <div>
              <div className="flex justify-center">
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
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {mensWatch.description}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8 ">Women Bags</h1>
      <div className="womensbag">
        {womensBags.map((womensBag) => {
          return (
            <div>
              <div className="flex justify-center">
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
                    src={womensBag.thumbnail}
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
                        {womensBag.brand}
                      </h1>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {womensBag.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${womensBag.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8 ">Motor Cycle</h1>
      <div className="motorcycle">
        {motorcycles.map((motorcycle) => {
          return (
            <div>
              <div className="flex justify-center">
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
                    src={motorcycle.thumbnail}
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
                        {motorcycle.brand}
                      </h1>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-4/5">
                      {motorcycle.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${motorcycle.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Men Shirts</h1>
      <div className="mensshirts">
        {mensshirts.map((mensshirt) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={mensshirt.thumbnail}
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
                        {mensshirt.brand}
                      </h1>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {mensshirt.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${mensshirt.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Skin Care</h1>
      <div className="skincare">
        {skincare.map((skincar) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={skincar.thumbnail}
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
                        {skincar.brand}
                      </h1>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {skincar.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${skincar.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Home Decoration</h1>
      <div className="homedecoration">
        {homedecoration.map((homedecorations) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={homedecorations.thumbnail}
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
                        {homedecorations.brand}
                      </h1>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-4/5">
                      {homedecorations.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${homedecorations.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Womens watches</h1>
      <div className="womenswatches">
        {womenswatches.map((womenswatch) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={womenswatch.thumbnail}
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
                        {womenswatch.brand}
                      </h1>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {womenswatch.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${womenswatch.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Womens Jewellery</h1>
      <div className="womensjewellery">
        {womensjewellery.map((womensjewellerys) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={womensjewellerys.thumbnail}
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
                        {womensjewellerys.brand}
                      </h1>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-4/5">
                      {womensjewellerys.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${womensjewellerys.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Womens Dresses</h1>
      <div className="womensdresses">
        {womensdresses.map((womensdress) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={womensdress.thumbnail}
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
                        {womensdress.brand}
                      </h1>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {womensdress.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${womensdress.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Lighting</h1>
      <div className="lighting">
        {lighting.map((lightings) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={lightings.thumbnail}
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
                        {lightings.brand}
                      </h1>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {lightings.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${lightings.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Furniture</h1>
      <div className="furniture">
        {furniture.map((furnitures) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={furnitures.thumbnail}
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
                        {furnitures.brand}
                      </h1>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-4/5">
                      {furnitures.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${furnitures.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Automotive</h1>
      <div className="automotive">
        {automotive.map((automotives) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={automotives.thumbnail}
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
                        {automotives.brand}
                      </h1>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-4/5">
                      {automotives.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${automotives.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Groceries</h1>
      <div className="groceries">
        {groceries.map((grocerie) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={grocerie.thumbnail}
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
                        {grocerie.brand}
                      </h1>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {grocerie.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${grocerie.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Smart Phones</h1>
      <div className="smartphones">
        {smartphones.map((smartphone) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={smartphone.thumbnail}
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
                        {smartphone.brand}
                      </h1>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {smartphone.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${smartphone.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Womens Shoes</h1>
      <div className="smartphones">
        {womensshoes.map((womensshoe) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={womensshoe.thumbnail}
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
                        {womensshoe.brand}
                      </h1>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-4/5">
                      {womensshoe.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${womensshoe.price}
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
      <h1 className="text-4xl  font-medium mt-6 mb-8">Fragrances</h1>
      <div className="smartphones">
        {fragrances.map((fragrance) => {
          return (
            <div>
              <div className="flex justify-center ">
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
                    src={fragrance.thumbnail}
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
                        {fragrance.brand}
                      </h1>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {fragrance.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold text-gray-500">
                        ${fragrance.price}
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
