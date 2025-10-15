import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slice/counter.slice";
import LoginForm from "./slice/login_form.slice";
import ProductSlice from "./slice/products.slice";

const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    users: LoginForm.reducer,
    product: ProductSlice.reducer,
  },
});

export default store;
