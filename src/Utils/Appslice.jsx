import { createSlice } from "@reduxjs/toolkit";

const Appslice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        tooglemenu : (state) => {
          state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export default Appslice.reducer
export const {tooglemenu} = Appslice.actions