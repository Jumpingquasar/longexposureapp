import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import { rootReducer } from "./reducer";


const persistConfig = { //Sets reducer persistence config
  key: 'longexposure',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer); //Creates persisted reducer

export const store = configureStore({ //Creates a Redux store based on given reducer
  reducer: {persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); //Sets persistor based on the created store

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;