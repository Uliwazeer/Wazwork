import "./App.css";
import Products from "./components/Products/Products.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element="Not Found" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
