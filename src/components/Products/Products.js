import React from "react";
import "./Products.css";
import ProductImg from "./imgs/products.svg";
const Head = () => {
  return (
    <div className="row products-head px-3 mx-0">
      <div className="col-md-6">
        <h2>Products</h2>
        <p>
          This Category includes new products where the direct benefit to the
          customer is high. you can see the work of WazWork team through the
          products
        </p>
      </div>
      <div className="col-md-6">
        <img src={ProductImg} alt="products" className="w-100" />
      </div>
    </div>
  );
};
const NavProduct = ({ content }) => {
  return (
    <button type="button" className="btn btn-outline-primary rounded-pill m-2">
      {content}
    </button>
  );
};
const NavProducts = () => {
  const products = [
    "UI/UX",
    "Web development",
    "Data Analysis",
    "Social Media Marketing",
    "Artificial intelligence",
    "Data Science",
  ];
  return (
    <div className="nav-products-container py-3 text-center">
      {products.map((product) => (
        <NavProduct content={product} key={product} />
      ))}
    </div>
  );
};
const Products = () => {
  return (
    <>
      <Head />
      <NavProducts />
    </>
  );
};

export default Products;
