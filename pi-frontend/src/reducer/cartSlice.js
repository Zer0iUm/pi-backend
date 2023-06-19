import { createSlice, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            return [...state, newItem];
        },
        removeFromCart: (state, action) => {
            const idToRemove = action.payload;
            return state.filter(item => item.id !== idToRemove);
        },
        reset: (state, action) => {
            return initialState;
        },
    }
});

export const { addToCart, reset, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
