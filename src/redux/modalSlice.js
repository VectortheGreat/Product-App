import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalFunc: (state) => {
      state.modal = !state.modal; //false ise true döndürecek
    },
  },
});

export const { modalFunc } = modalSlice.actions;

export default modalSlice.reducer;
