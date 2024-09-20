// index.js

// import { configureStore } from '@reduxjs/toolkit'; // I did initially try after installing it but could not link it to the file
import { configureStore } from 'https://cdn.skypack.dev/@reduxjs/toolkit';

// Action Types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// Action Creators
const add = () => ({ type: ADD });
const subtract = () => ({ type: SUBTRACT });
const reset = () => ({ type: RESET });

// Reducer (Pure Function)
const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUBTRACT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

// Create the store using Redux Toolkit's configureStore
const store = configureStore({
  reducer: counterReducer
});

// Function to update the displayed counter value
const updateCounterDisplay = () => {
  document.getElementById('counter-value').textContent = store.getState();
};

// Subscribe to state changes
store.subscribe(updateCounterDisplay);

// Initial display update
updateCounterDisplay();

// Button click listeners
document.getElementById('add-btn').addEventListener('click', () => {
  store.dispatch(add());
});

document.getElementById('subtract-btn').addEventListener('click', () => {
  store.dispatch(subtract());
});

document.getElementById('reset-btn').addEventListener('click', () => {
  store.dispatch(reset());
});
