

import { createSlice } from "@reduxjs/toolkit";

export const productAddToCart = createSlice({
    name: 'productInCart',
    initialState: {
        cartProducts: []
    },
    reducers: {
        addProductToCart: (state, action) => {
            
            const { productName, price, counter, id, image } = action.payload;
            const newProductAddedToCart = { productName, price, counter, id, image }

            const existId = state.cartProducts?.find((item) => item?.id == id)
            if (!existId) {
                state.cartProducts.push(newProductAddedToCart)
            } else {
                existId.counter = counter
                existId.image = image
                // existId.price = price * counter

            }
            console.log('dasdasd',state.cartProducts)
        },
        incrementCounter: (state, action) => {
            const product = state.cartProducts.find((item) => item.id === action.payload);
            if (product) {
                product.counter += 1;
            }
        },
        decrementCounter: (state, action) => {
            const product = state.cartProducts.find((item) => item.id === action.payload);
            if (product && product.counter > 1) {
                product.counter -= 1;
            }
        },
        deleteProduct :(state,action)=>{
            state.cartProducts= state.cartProducts.filter((item,index)=>item?.id != action.payload)
        },
        clearCart: (state) => {
            state.cartProducts = [];
        }

    }
});

export const { addProductToCart, incrementCounter, decrementCounter ,deleteProduct,clearCart} = productAddToCart.actions;

export default productAddToCart.reducer;
