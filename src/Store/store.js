// create a store and configure it 
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // add any additional configuration options here
});

export default store;