import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";
import Searchslice from "./Searchslice"

const store = configureStore({
  reducer:{
    app: Appslice,
    search : Searchslice
  }
})

export default store 

// after creating you store and including inside app check in extensions of browser (redux dev tools) that the store is working or not