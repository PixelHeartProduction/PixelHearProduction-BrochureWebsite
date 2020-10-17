import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//reducers
import VisitorReducer from "./visitor";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["visitor"],
};

const rootReducer = combineReducers({
	visitor: VisitorReducer,
});
export default persistReducer(persistConfig, rootReducer);
