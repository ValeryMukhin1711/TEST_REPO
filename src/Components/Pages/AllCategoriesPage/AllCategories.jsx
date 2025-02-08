import React from "react";
import "./AllCategories.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import GoogleMaps from "../../GoogleMaps/GoogleMaps";


function AllCategories() {
  return (
      <>
        <Header />
        <div className="buttons">
        <Link to="/">
          <button className="btn">Main page</button>
        </Link>
        <Link to="/categories">
          <button className="current__page__btn">Categories</button>
        </Link>
        </div>
        <div className="">
        <h1 className="title-2">Categories</h1>
        </div>
      
        <Footer />
        <GoogleMaps />
      </>
  
  );
}

export default AllCategories;
