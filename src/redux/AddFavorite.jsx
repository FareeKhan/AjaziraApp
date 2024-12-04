import { createSlice } from "@reduxjs/toolkit";

export const AddFavorite = createSlice({
    name: "AddFavorite",
    initialState: {
        AddInFavorite: []
    },
  
    reducers: {
        productFavorite: (state, action) => {
            const { discountPrice, regularPrice, pid, productName,image ,rating,distance} = action.payload
            const addedToFavorite = {  discountPrice, regularPrice, pid, productName,image ,rating,distance}
            state.AddInFavorite.push(addedToFavorite)

            console.log(';;;',state.AddInFavorite)
        },
        removeFavorite: (state, action) => {
            const { id } = action.payload;
            state.AddInFavorite = state?.AddInFavorite.filter(product => product?.pid !== id);
        },
    }
})


export const { productFavorite,removeFavorite } = AddFavorite.actions

export default AddFavorite.reducer