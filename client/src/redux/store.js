import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {persistReducer , persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({user:userReducer})
const persisitConfig={
    key:'root',
    storage,
    version:1,
}
const persistReducer = persistReducer(persisitConfig,rootReducer)


export const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);