// src/store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  nama: "Nando Dixlano Aufar",
  nim: "A11.2021.13877",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.nama = action.payload.nama;
      state.nim = action.payload.nim;
    },
  },
});

export const { updateUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
