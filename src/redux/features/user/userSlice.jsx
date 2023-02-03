import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    loadUserData: (state, action) => {
      state.value = action.payload;
    },
    unloadUserData: (state) => {
      state.value = null;
    },
  },
});

export const { loadUserData, unloadUserData } = userSlice.actions;
export default userSlice.reducer;
