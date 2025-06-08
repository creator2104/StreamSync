import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";

const store = configureStore({
  reducer:{
    app: Appslice
  }
})

export default store 

// after creating you store and including inside app check in extensions of browser (redux dev tools) that the store is working or not