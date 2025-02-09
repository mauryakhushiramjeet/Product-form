import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    productDetails: [],
    colors: [],
    sizes: [],
    materials: [],
  },
  reducers: {
    addProductList: (state, action) => {
      state.productDetails.push({
        optionName: action.payload.optionName,
        inputs: [...action.payload.inputs],
      });
    },
    addColor:(state,action)=>{
      state.colors.push=action.payload
    }
  },
});
export const { addProductList, addColor } = ProductSlice.actions;
export default ProductSlice.reducer;
