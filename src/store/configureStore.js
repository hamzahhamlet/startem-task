import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers/index";

const persistConfig = {
	key: "root",
	storage,
};

const persistReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
	const store = createStore(persistReducer, composeWithDevTools());
	const persistor = persistStore(store);
	return { store, persistor };
};

export default configureStore;
