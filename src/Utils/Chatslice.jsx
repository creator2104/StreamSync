import { createSlice } from "@reduxjs/toolkit";

const Chatslice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length >= 10) {
        state.messages.pop(); // removes the last message
      }
      state.messages.push(action.payload); 
    },
  },
});

export default Chatslice.reducer;
export const { addMessage } = Chatslice.actions;
