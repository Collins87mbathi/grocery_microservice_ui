import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  
 import userReducer from "../Redux/slices/UserSlice";
import cartReducer from "../Redux/slices/CartSlice";
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

const combineReducer = combineReducers({user:userReducer, cart:cartReducer});
const rootReducer = persistReducer(persistConfig, combineReducer);

const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
export default store;