import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../Data/ProductData";

const initialState = {
    products: products,
    cart: [],
    netTotal: 0,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let index=state.cart.findIndex((item)=>{
return item.id==action.payload.id
            })
            if (index==-1) {
                let product = { ...action.payload, quantity: 1 }
                state.cart.push(product)
            } else {
                state.cart[index].quantity++
            }
           
        },
        incrementPro: (state, action) => {
            state.cart[action.payload].quantity += 1
        },
        decrementPro: (state, action) => {
            if (state.cart[action.payload].quantity > 1) {
                state.cart[action.payload].quantity -= 1
                return
            } else {
                state.cart.splice(action.payload, 1)
            }
        },
        removeCart: (state, action) => {
           state.cart=state.cart.filter((product) => product.id !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
            // state.netTotal = 0;
        },
        getNetTotal: (state, action) => {
            let netTotal = 0
            state.cart.map((item, i) => {
                let total = item.price * item.quantity
                netTotal += total

            })
            state.netTotal = netTotal
        }
    }
})


export const { addToCart, removeCart, decrementPro, incrementPro, clearCart,getNetTotal } = productSlice.actions;

export default productSlice.reducer;