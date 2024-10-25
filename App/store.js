import { configureStore } from "@reduxjs/toolkit";
import productReducer  from '../src/fetature/product/productSlice';
export const store=configureStore({
    reducer:{
        product:  productReducer,
    }
})