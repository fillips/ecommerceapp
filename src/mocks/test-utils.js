import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { Provider } from 'react-redux'
import cartReducer from "../store/cart/cartSlice";
import authReducer from "../store/auth/authSlice";
import { loginApi } from "../services/login-service"
import { productsApi } from "../services/products-service"

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: {
      cart: cartReducer,
      auth: authReducer,
      [loginApi.reducerPath]: loginApi.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
      
    }, preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(loginApi.middleware).concat(productsApi.middleware)
  } 
  
  }),
    ...renderOptions
  } = {}
) {
  setupListeners(store.dispatch);
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }