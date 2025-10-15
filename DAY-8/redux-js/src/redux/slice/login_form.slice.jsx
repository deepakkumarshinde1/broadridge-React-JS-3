import { createSlice } from "@reduxjs/toolkit";

const LoginForm = createSlice({
  name: "LoginForm",
  initialState: {
    text: "",
  },
  reducers: {
    handelInput(state, action) {
      state.text = action.payload;
    },
  },
});

export default LoginForm;
export const { handelInput } = LoginForm.actions;
