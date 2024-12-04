import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    loginData:{},
    isLanguage:"en",
    isOnBoarding:false
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
        logout:(state,action)=>{
            state.loginData = {};
        }
      
    },
});


export const { onBoarding,login,logout,language } = auth.actions;
export default auth.reducer;