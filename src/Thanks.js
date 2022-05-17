import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
function Thanks() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn"></div>
          <div className="title">
            <h4 className="text-4xl mt-32">Thank You ✅ </h4>
          </div>

          <div className="footer">
            <button
              onClick={() => {
                navigate("/home");
              }}
              className="footer"
            >
              Continue Your Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
