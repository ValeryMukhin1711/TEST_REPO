import React from 'react'
import Header from "../Header/Header";
import CheckOut from "../CheckOut/CheckOut";
import Categories from "../Categories/Categories";
import FirstOrder from "../FirstOrder/FirstOrder";
import Sale from "../Sale/Sale";
import Footer from "../Footer/Footer";
import GoogleMaps from "../GoogleMaps/GoogleMaps";


function MainPage() {
  return (
    <div>
      <Header />
      <CheckOut />
      <Categories />
      <FirstOrder />
      <Sale />
      <Footer />
      <GoogleMaps />
    </div>
  )
}

export default MainPage
