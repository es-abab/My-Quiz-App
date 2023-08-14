import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // You can choose different storage engines
import rootReducer from './reducers';

const persistConfig = {
  key: 'root', // key is mandatory
  storage, // storage engine
  // Add any other configuration options here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
});

// Create and export the persistor
export const persistor = persistStore(store);

export default store;
