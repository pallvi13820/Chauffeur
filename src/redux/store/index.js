import {persistReducer, persistStore} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducer';
import {storage} from '@/storage';

const persistConfig = {
  key: 'app-root',
  storage, // mmkv storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// redux store
export const store = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});

// store with persist
export const persistor = persistStore(store);
