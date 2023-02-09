import {configureStore} from '@reduxjs/toolkit';
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

// const combineReducer = combineReducers({user:userReducer, cart:cartReducer});
const rootReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer:{
    user:rootReducer,
    cart:cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
export default store;