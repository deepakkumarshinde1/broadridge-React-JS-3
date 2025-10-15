import { createSlice } from "@reduxjs/toolkit";
import { getProductById, getProductList } from "../api.service";

let handelBuilder = (builder, actionMethod, onSuccess, onFail) => {
  builder
    .addCase(actionMethod.pending, (state, action) => {
      state.loading = true;
      state.error = false;
      state.list = [];
    })
    .addCase(actionMethod.fulfilled, onSuccess)
    .addCase(actionMethod.rejected, onFail);
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    list: [],
    error: false,
    loading: false,
    singleProduct: null,
  },
  extraReducers(builder) {
    // get app product
    handelBuilder(
      builder,
      getProductList,
      (state, action) => {
        state.list = action.payload;
        state.error = false;
        state.loading = false;
      },
      (state, action) => {
        state.error = "Something went wrong.";
        state.list = [];
        state.loading = false;
      }
    );

    // get product by id
    handelBuilder(
      builder,
      getProductById,
      (state, action) => {
        state.error = false;
        state.loading = false;
        state.singleProduct = null;
      },
      (state, action) => {
        state.error = "Something went wrong.";
        state.list = [];
        state.loading = false;
      }
    );
  },
});

export default ProductSlice;
