import { createSlice } from "@reduxjs/toolkit";

const Appslice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toogleMenu : (state) => {
          state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) =>{
            state.isMenuOpen = false
        },
        openMenu: (state) =>{
            state.isMenuOpen = true
        }
    }
})

export default Appslice.reducer
export const {toogleMenu,closeMenu,openMenu} = Appslice.actions