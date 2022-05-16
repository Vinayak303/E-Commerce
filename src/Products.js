import React from "react";
import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { db } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import "./Products.css";
const Products = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});
  const ProductCollectionRef = collection(db, "products");
  useEffect(() => {
    getProduct();
  }, []);
  const logout = async () => {
    await signOut(auth);
  };
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
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
  localStorage.setItem("items", JSON.stringify(items));
  return (
    <div className="  All">
      <button
        className=" font-serif inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => {
          {
            logout();
          }
          navigate("/Login");
        }}
      >
        User Logged In: {user?.email}
        <br></br>
        <br></br>
        Log Out
      </button>
      <br></br>
      <button
        onClick={() => {
          navigate("/cart");
        }}
        class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
        aria-label="Cart"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        <span class="absolute inset-0 object-right-top -mr-6">
          <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
            {items.length}
          </div>
        </span>
      </button>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Laptops
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={laptop.thumbnail}
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
                      <h2 className="mb-0">{laptop.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5 ">
                      {laptop.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${laptop.price}
                      </h3>
                      {items.includes(laptop) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== laptop.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, laptop]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Tops
      </h1>
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
                    className=" ml-4 h-max w-max sm:h-max sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={top.thumbnail}
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
                      <h2 className="mb-0  ">{top.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {top.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">${top.price}</h3>
                      {items.includes(top) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter((item) => item.brand !== top.brand)
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, top]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Sunglass
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={sunglass.thumbnail}
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
                      <h2 className=" mb-0  ">{sunglass.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {sunglass.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${sunglass.price}
                      </h3>
                      {items.includes(sunglass) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== sunglass.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, sunglass]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Men Shoes
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={mensShoe.thumbnail}
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
                      <h2 className=" mb-0 ">{mensShoe.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {mensShoe.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${mensShoe.price}
                      </h3>
                      {items.includes(mensShoe) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== mensShoe.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, mensShoe]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Men watches
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={mensWatch.thumbnail}
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
                      <h2 className=" mb-0">{mensWatch.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {mensWatch.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${mensWatch.price}
                      </h3>
                      {items.includes(mensWatch) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== mensWatch.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, mensWatch]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Women Bags
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={womensBag.thumbnail}
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
                      <h2 className="mb-0">{womensBag.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {womensBag.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${womensBag.price}
                      </h3>
                      {items.includes(womensBag) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== womensBag.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, womensBag]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Motor Cycle
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={motorcycle.thumbnail}
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
                      <h2 className=" mb-0 ">{motorcycle.brand}</h2>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-4/5">
                      {motorcycle.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${motorcycle.price}
                      </h3>
                      {items.includes(motorcycle) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== motorcycle.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, motorcycle]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Men Shirts
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={mensshirt.thumbnail}
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
                      <h2 className="mb-0 ">{mensshirt.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {mensshirt.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${mensshirt.price}
                      </h3>
                      {items.includes(mensshirt) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== mensshirt.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, mensshirt]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Skin Care
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={skincar.thumbnail}
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
                      <h2 className="mb-0">{skincar.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {skincar.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${skincar.price}
                      </h3>
                      {items.includes(skincar) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== skincar.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, skincar]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Home Decoration
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={homedecorations.thumbnail}
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
                      <h2 className="mb-0">{homedecorations.brand}</h2>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-4/5">
                      {homedecorations.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${homedecorations.price}
                      </h3>
                      {items.includes(homedecorations) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== homedecorations.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, homedecorations]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Womens watches
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={womenswatch.thumbnail}
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
                      <h2 className="mb-0">{womenswatch.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {womenswatch.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${womenswatch.price}
                      </h3>
                      {items.includes(womenswatch) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== womenswatch.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, womenswatch]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Womens Jewellery
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={womensjewellerys.thumbnail}
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
                      <h2 className="mb-0 ">{womensjewellerys.brand}</h2>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-4/5">
                      {womensjewellerys.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${womensjewellerys.price}
                      </h3>
                      {items.includes(womensjewellerys) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== womensjewellerys.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, womensjewellerys]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Womens Dresses
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={womensdress.thumbnail}
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
                      <h2 className="mb-0">{womensdress.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {womensdress.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${womensdress.price}
                      </h3>
                      {items.includes(womensdress) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== womensdress.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, womensdress]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Lighting
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={lightings.thumbnail}
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
                      <h2 className="mb-0 ">{lightings.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {lightings.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${lightings.price}
                      </h3>
                      {items.includes(lightings) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== lightings.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, lightings]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Furniture
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={furnitures.thumbnail}
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
                      <h2 className="mb-0">{furnitures.brand}</h2>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-4/5">
                      {furnitures.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${furnitures.price}
                      </h3>
                      {items.includes(furnitures) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== furnitures.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, furnitures]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Automotive
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={automotives.thumbnail}
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
                      <h2 className="mb-0 ">{automotives.brand}</h2>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-7/5">
                      {automotives.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${automotives.price}
                      </h3>
                      {items.includes(automotives) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== automotives.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, automotives]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Groceries
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={grocerie.thumbnail}
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
                      <h2 className="mb-0">{grocerie.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {grocerie.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${grocerie.price}
                      </h3>
                      {items.includes(grocerie) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== grocerie.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, grocerie]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Smart Phones
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={smartphone.thumbnail}
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
                      <h2 className="mb-0">{smartphone.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {smartphone.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${smartphone.price}
                      </h3>
                      {items.includes(smartphone) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== smartphone.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, smartphone]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Womens Shoes
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={womensshoe.thumbnail}
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
                      <h2 className="mb-0">{womensshoe.brand}</h2>
                    </div>
                    <p className="text-xs  italic text-gray-500 w-4/5">
                      {womensshoe.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${womensshoe.price}
                      </h3>
                      {items.includes(womensshoe) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== womensshoe.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, womensshoe]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl  font-mono  mb-8 ml-4 text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
        Fragrances
      </h1>
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
                    className=" ml-4 h-1/2 w-max sm:h-min sm:w-1/2 object-cover transform transition duration-500 hover:scale-75"
                    src={fragrance.thumbnail}
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
                      <h2 className=" mb-0">{fragrance.brand}</h2>
                    </div>
                    <p className="text-xs italic text-gray-500 w-4/5">
                      {fragrance.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-gray-500">
                        ${fragrance.price}
                      </h3>
                      {items.includes(fragrance) ? (
                        <button
                          onClick={() => {
                            setItems(
                              items.filter(
                                (item) => item.brand !== fragrance.brand
                              )
                            );
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setItems((prev) => [...prev, fragrance]);
                          }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                        >
                          Add
                        </button>
                      )}
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
