import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import loginReducer from './loginReducer';

const rootReducer = combineReducers(
    {cities:citiesReducer, 
        login:loginReducer});


export default rootReducer;