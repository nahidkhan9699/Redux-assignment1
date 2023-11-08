import { createStore,combineReducers } from "redux";
import { colorReducer } from "./reducer/colorReducer";
import { foodReducer } from "./reducer/foodReducer";
export const configStore=()=>{
    const store=createStore(
        combineReducers({colorReducer,foodReducer}),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}