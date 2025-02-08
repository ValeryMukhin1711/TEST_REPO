import React from "react";
import { categoryStore } from "./State/CategoryStore"; //  store для категорий


const StoreContext = React.createContext({
  categoryStore,
});

export default StoreContext;
