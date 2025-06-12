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

// 🔧 Why use LRU Cache?
// In your YouTube clone, suppose a user searches for something they've already searched before — you can avoid hitting the API again and show cached results. But since memory is limited, you don’t want to keep ev/erything forever. That’s where LRU helps — it evicts the least recently used data when the cache limit is hit.