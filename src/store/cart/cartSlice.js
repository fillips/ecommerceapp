import { createSlice } from "@reduxjs/toolkit";
import { map, find } from "lodash";

const initialState = {
    userId: 0,
    addedItems: [{}],
    total: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTotal(state) {
            state.total++
        },
        removeTotal(state) {
            if (state.total >= 0) {
                state.total--
            }
            
        },
        addToCart(state, action) {
            const existsInCart = find(state.addedItems, { "id": action.payload })
            if(existsInCart) {
                map(state.addedItems, i => {
                    if (i.id === action.payload) {
                        i.quantity++
                    }
                })
            } else {
                state.addedItems.push({"id": action.payload, quantity: 1})
            }
        },
        removeFromCart(state, action) {
            map(state.addedItems, i => {
                if (i.id === action.payload) {
                    i.quantity--
                }
            })
        }
    },
})

export const { addTotal, removeTotal, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer