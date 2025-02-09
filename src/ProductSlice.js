import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    productDetails: [],
  },
  reducers: {
    addProductList: (state, action) => {
      state.productDetails.push({
        optionName: action.payload.optionName,
        inputs: [...action.payload.inputs],
      });
    },
  },
});
export const { addProductList } = ProductSlice.actions;
export default ProductSlice.reducer;
