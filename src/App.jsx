import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage";
import AllCategories from "./Components/Pages/AllCategoriesPage/AllCategories";
import AllProducts from "./Components/Pages/AllProductsPage/AllProducts";
import AllSales from "./Components/Pages/AllSales/AllSales";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<AllCategories />}/> 
        <Route  path='/products' element={<AllProducts />}/>
        <Route path='/sale' element={<AllSales />}/>
        <Route />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
