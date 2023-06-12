import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/usersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const followingsPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['followings'],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(followingsPersistConfig, usersReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
