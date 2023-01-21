//import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initializeCounterState = { counter: 0, showToggle: true };
// const counterSlice = createSlice({
//   name: 'counter',
//   initializeCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggle(state) {
//       state.showToggle = !state.showToggle;
//     },
//   },
// });

const initializeAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'authentication',
  initializeAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: { toggleCart: false },
  reducers: {
    showCart(state) {
      state.toggleCart = !state.toggleCart;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

//export const counterReducer = counterSlice.actions;
export const authAction = authSlice.actions;
export const cartAction = cartSlice.actions;

export default store;
