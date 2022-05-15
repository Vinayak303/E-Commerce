import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registeration from "./Registeration";
import Login from "./Login";

import Footer from "./Footer";
import Products from "./Products";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import OrderPage from "./OrderPage";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Home" element={<Products />} />
          <Route path="/OrderPage" element={<OrderPage />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/" element={<Registeration />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
