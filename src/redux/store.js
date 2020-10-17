import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import RootReducer from "./reducers/rootReducer";

export const store = createStore(RootReducer, composeWithDevTools());
export const persistor = persistStore(store);
export default { store, persistor };
