import { createSlice } from "@reduxjs/toolkit";

type Output = {
  isAuth: boolean,
  user: any,
  access: any,
}

function initialState(): Output {
  return {
    isAuth: false,
    user: {},
    access: {}
  };
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState(),
  reducers: {
    handleRegister: (state, action) => {
      state.isAuth = action.payload;
      localStorage.setItem('isAuth', action.payload);
    },
    handleLogin: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', action.payload);
    },
    handleLogout: (state, action) => {
      state.user = action.payload;
      localStorage.removeItem('user');
    },
  }
});

export const { handleRegister, handleLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
