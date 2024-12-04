import { applyMiddleware, combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import Auth from './Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';
import AddFavorite from './AddFavorite';
import  ProductAddToCart  from './ProductAddToCart';

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["auth","favorite","ProductAddToCart"], 
    blacklist: [], 
  };

  const rootReducer = combineReducers({
    auth:Auth,
    favorite:AddFavorite,
    cart:ProductAddToCart,
  })

  // Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with enhancers
const store = createStore(persistedReducer, applyMiddleware(thunk));

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };









