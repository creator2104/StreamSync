import { createSlice } from "@reduxjs/toolkit";

const Appslice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toogleMenu : (state) => {
          state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export default Appslice.reducer
export const {toogleMenu} = Appslice.actions