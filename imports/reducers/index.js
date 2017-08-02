// root reducer used to combine application reducers
import {combineReducers} from "redux";
import  courses from "./courseReducer";

// courseReducer is mapped to courseReducer.js
// courses is alies for the default export

const RootReducer = combineReducers({
    // this will be accessed throghout the application as state.courses
    // this is ES6 shorthand property name for courses : courses
    courses 
});

export default RootReducer;