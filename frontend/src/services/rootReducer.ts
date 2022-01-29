import { combineReducers } from "redux";
import { reducer as account } from "services/account";

export const rootReducer = combineReducers({
  account,
});

export type RootState = ReturnType<typeof rootReducer>;
