import { combineReducers } from "redux";
import catReducer from "./catReducer";

const reducers = combineReducers({ cats: catReducer });

export default reducers;

export type RootState = ReturnType<typeof reducers>;
