import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
interface MyData {
  loading: boolean;
  logged: boolean;
  lists: any;
  error: string;
}

// interface obj {
//   version: number;
//   programID: number;
// }

const initialState: MyData = {
  loading: false,
  lists: {},
  error: "",
  logged: false,
};

const Lists = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("LOGGED", (state, action: AnyAction) => {
      state.logged = action.payload;
    });
  },
});

export default Lists.reducer;
