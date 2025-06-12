// cache:
// time complexity to search in array = 0(n) 
// time complexity to search in object,map = 0(1) 
// new Map()  >  object   > array 
// the order of time complexity

import { createSlice } from "@reduxjs/toolkit";

const Searchslice = createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
           Object.assign(state,action.payload)
        }
    }
})

export default Searchslice.reducer;
export const {cacheResults} = Searchslice.actions

// LRU cache
// we build caching using redux