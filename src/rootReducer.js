import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import cartReducer from "./store/cart/cartSlice";
import authReducer from "./store/auth/authSlice";
import { loginApi } from "./services/login-service"
import { productsApi } from "./services/products-service"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(loginApi.middleware).concat(productsApi.middleware)
    }
});

setupListeners(store.dispatch)