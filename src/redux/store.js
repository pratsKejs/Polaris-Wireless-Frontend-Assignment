import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbarSlice";
import heroReducer from "./heroSlice";
import brandsReducer from "./brandsSlice";
import productsReducer from "./productsSlice";
import displayAdsReducer from "./displayAdsSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    hero: heroReducer,
    brands: brandsReducer,
    products: productsReducer,
    displayAds: displayAdsReducer,
  },
});

export default store;
