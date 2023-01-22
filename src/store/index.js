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

const cartSlice2 = createSlice({
  name: 'cart2',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, cart2: cartSlice2.reducer },
});

//export const counterReducer = counterSlice.actions;
export const cartAction2 = cartSlice2.actions;
export const authAction = authSlice.actions;
export const cartAction = cartSlice.actions;

export default store;
