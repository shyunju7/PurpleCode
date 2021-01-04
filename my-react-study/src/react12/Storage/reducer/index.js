import React from 'react';
import {combineReducers} from 'redux';
import visitorReducer from "./visitor";

const rootReducer = combineReducers({
    visitorReducer
});

export default rootReducer;

