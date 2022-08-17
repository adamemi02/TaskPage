
import React from "react";
import * as actions from './action-types';

export default function reducer(state=[],action){
    switch(action.type){
        case actions.bars:
        return[
            ...state,
            {
                id:"bars",
                label:"bars"
            }
        ];
    
    case actions.lines:
        return[
            ...state,
            {
                id:"lines",
                label:"lines"
            }
        ];
    }
}
