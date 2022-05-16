import React from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  let navigate = useNavigate();
  const user = localStorage.getItem("user");
  return (
    <div>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center"></div>

          <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <div
                onClick={() => {
                  user ? navigate("/home") : navigate("/");
                }}
              >
                <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
                  Home
                </a>
              </div>
              <div
                onClick={() => {
                  user ? navigate("/contact") : navigate("/");
                }}
              >
                <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
                  Contact Us
                </a>
              </div>
              <div
                onClick={() => {
                  user ? navigate("/about") : navigate("/");
                }}
              >
                <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
