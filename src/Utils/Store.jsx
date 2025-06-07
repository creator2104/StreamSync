import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice"

const Store = configureStore({
  reducer:{
    App: Appslice,
  }
})

export default Store 

// after creating you store and including inside app check in extensions of browser (redux dev tools) that the store is working or not