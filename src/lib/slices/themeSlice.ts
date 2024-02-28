import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface pl {
  c1: string;
  c30: string;
  c10: string;
  c60: string;
}
interface clpl {
  theme: pl;
}
// export const clpl: any = {
//   theme1: {
//     c1: "#013228",
//     c30: "#cc8b65",
//     c10: "#e3dcd2",
//     c60: "#100c0d",
//   },
//   theme2: {
//     c1: "#3d4e17",
//     c10: "#ede599",
//     c30: "#c7a003",
//     c60: "#151f1e",
//   },
//   theme3: {
//     c1: "#3d5a58",
//     c10: "#f7f1ed",
//     c30: "#febeb0",
//     c60: "#3a3d3b",
//   },
// };

const init: clpl = {
  theme: {
    c1: "#013228",
    c30: "#cc8b65",
    c10: "#e3dcd2",
    c60: "#100c0d",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: init,
  reducers: {
    setTheme: (state, action: PayloadAction<pl>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
