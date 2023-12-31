import {createSlice} from "@reduxjs/toolkit";

interface dialNumberTypes {
  dial_code: string;
  country: string;
}

const initialState = {
  dial_code: {
    dial_code: "+02",
    country: "Egypt",
  } as dialNumberTypes,
};

const mobileAuthSlice = createSlice({
  name: "mobileAuth",
  initialState,
  reducers: {
    setDialNumberInfo: (
      state,
      action: {payload: {dial_code: string; country: string}},
    ) => {
      state.dial_code = action.payload;
    },
  },
});

export default mobileAuthSlice.reducer;
export const mobileAuthAction = mobileAuthSlice.actions;
