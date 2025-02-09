import { configureStore } from "@reduxjs/toolkit";
import ProductListReducer from "./ProductSlice"
const Store = configureStore({
  reducer: {
    product: ProductListReducer,
  },
});
export default Store