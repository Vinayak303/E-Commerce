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
    <div className="All">
      <h1 className="font-bold">Laptops</h1>
      <div className="laptop">
        {laptops.map((laptop) => {
          return (
            <div>
              <h1 className="text-xl">Brand: {laptop.brand}</h1>
              <p>category: {laptop.category}</p>
              <img className="IMAGE" src={laptop.thumbnail} />
              <h1>Price: ${laptop.price}</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
      <h1 className="font-bold">tops</h1>
      <div className="top">
        {tops.map((top) => {
          return (
            <div>
              <h1 className="text-xl">Brand: {top.brand}</h1>
              <p>category: {top.category}</p>
              <img className="IMAGE" src={top.thumbnail} />
              <h1>Price: ${top.price}</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
      <h1 className="font-bold">sunglass</h1>
      <div className="sunglass">
        {sunglasses.map((sunglass) => {
          return (
            <div>
              <h1 className="text-xl">Brand: {sunglass.brand}</h1>
              <p>category: {sunglass.category}</p>
              <img className="IMAGE" src={sunglass.thumbnail} />
              <h1>Price: ${sunglass.price}</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
      <h1 className="font-bold">Men Shoes</h1>
      <div className="menshoe">
        {mensShoes.map((mensShoe) => {
          return (
            <div>
              <h1 className="text-xl">Brand: {mensShoe.brand}</h1>
              <p>category: {mensShoe.category}</p>
              <img className="IMAGE" src={mensShoe.thumbnail} />
              <h1>Price: ${mensShoe.price}</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
      <h1 className="font-bold">Men watches</h1>
      <div className="menswatch">
        {mensWatches.map((mensWatch) => {
          return (
            <div>
              <h1 className="text-xl">Brand: {mensWatch.brand}</h1>
              <p>category: {mensWatch.category}</p>
              <img className="IMAGE" src={mensWatch.thumbnail} />
              <h1>Price: ${mensWatch.price}</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
