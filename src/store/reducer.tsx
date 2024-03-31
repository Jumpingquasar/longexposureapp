import { combineReducers } from "redux";
import authReducer from './authSlice'
import systemReducer from './systemSlice'

export const rootReducer = combineReducers({
	auth: authReducer,
	system: systemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
