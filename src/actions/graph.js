import * as actions from "./Graph/action-types"

export function showBars(){
    return{
        type:actions.barsAction,
        payload:{
            wordDisplayed:"bars"
        }
    }
}

export function showLines(){
    return{
        type:actions.linesAction,
        payload:{
            wordDisplayed:"lines"
        }
    }
}