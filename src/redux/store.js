// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import rootReducer from "./promptSlice";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
// 	key: "root",
// 	storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
// 	reducer: {
// 		prompts: persistedReducer,
// 	},
// 	middleware: [],
// });
// // export const persistor = persistStore(store);
// export default store;

// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import promptReducer from "./promptSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	prompts: promptReducer,
	// Add other reducers here
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: [],
});

export default store;
