import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/axios.config";

export const getProductList = createAsyncThunk(
  "ProductSlice/getProductList",
  async () => {
    let response = await api.get("/products");
    return response.data;
  }
);

export const getProductById = createAsyncThunk(
  "ProductSlice/getProductList",
  async (id) => {
    let response = await api.get("/products/" + id);
    return response.data;
  }
);
