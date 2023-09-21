import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  keyword: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload]; //tüm state data'yı döner sonra hepsini üstüne ekler
    },
    sortingDataFunc: (state, action) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload == "asc"
            ? a.price - b.price
            : action.payload == "desc"
            ? b.price - a.price
            : null
        ),
      ];
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((dt) => dt.id != action.payload)]; //action.payload eğer dt.id farklı ise sil
    },
    updateDataFunc: (state, action) => {
      state.data = [
        ...state.data.map((dt) =>
          dt.id != action.payload ? { ...dt, ...action.payload } : dt
        ),
      ];
    },
    searchDataFunc: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const {
  createDataFunc,
  sortingDataFunc,
  deleteDataFunc,
  updateDataFunc,
  searchDataFunc,
} = dataSlice.actions;

export default dataSlice.reducer;
