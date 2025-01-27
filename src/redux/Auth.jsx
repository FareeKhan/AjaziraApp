import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    loginData:{},
    isLanguage:"en",
    isOnBoarding:false,
    IsShowImage:true
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    
        onBoarding: (state, action) => {
            state.isOnBoarding = action.payload
        },
        login: (state, action) => {
            state.loginData={
                ...state.loginData, 
                ...action.payload, 
            }
        },
        language :(state,action)=>{
            const {selectedLanguage} = action.payload 
            state.isLanguage =selectedLanguage
        },
        modalImage :(state,action)=>{
            state.IsShowImage =false
        },
        logout:(state,action)=>{
            state.loginData = {};
        }
      
    },
});


export const { onBoarding,login,modalImage,logout,language } = auth.actions;
export default auth.reducer;