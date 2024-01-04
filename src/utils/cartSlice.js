import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },

    //originalState= ["pizza"]
    clearCart: (state, action) => {
      // state.items.length = 0; // []
      //RTk -either mutate existing state or return a new state
      return { items: [] }; //this new[] will be replaced by inside originalState ={ items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
