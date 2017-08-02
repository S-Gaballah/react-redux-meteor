// in redux, there is a single store
import {createStore,applyMiddleware} from "redux";
import RootReducer from "../reducers/index";
import ReduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';


export default function ConfigureStore(initialState){
    return createStore(
        RootReducer,
        initialState,
        applyMiddleware(thunk,ReduxImmutableStateInvariant())
    );
}