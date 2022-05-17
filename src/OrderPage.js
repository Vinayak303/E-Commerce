import React from "react";
import { useState } from "react";
import { db } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
function Contact() {
  const feedbackCollectionRef = collection(db, "details");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  let navigate = useNavigate();
  const newfeedback = async () => {
    await addDoc(feedbackCollectionRef, {
      Name: firstname,
      SecondName: lastname,
      pinCode: pincode,
      emailID: email,
      Msg: message,
      state: state,
    });
  };
  return (
    <div className="py-16 bg-">
      <div className="mb-8 text-3xl text-center text-blue-600 ">
        E-Shop Spot Checkout Page
      </div>
      <form className="w-full max-w-lg ml-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="FIRST NAME"
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Phone Number"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="E-mail"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              State
            </label>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="state"
              onChange={(event) => {
                setState(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Pin Code
            </label>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="Pincode"
              onChange={(event) => {
                setPincode(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div class="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Address
            </label>
            <input
              className=" no-resize appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-24 resize-none"
              id="message"
              type="text"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div>
            <button
              onClick={() => {
                newfeedback();
                navigate("/Thanks");
              }}
              className="  mb-10 shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Confirm Your Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
