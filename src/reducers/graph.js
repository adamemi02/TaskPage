import * as actions from "./Graph/action-types";

const initialState={
    graphOption:[
        {
            id:'bars',
            label:'Bars',
            

        },
        {
            id:'lines',
            label:'Lines',
            
        }
    ],
    displayedWord:" "
}

export default function graph(state=initialState,action){
    if(action.type===actions.barsAction)
    {
        return[
            ...state,
            {
                displayedWord:"bars"
            }
        ]
    }
    if(action.type===actions.linesAction)
    {
        return[
            ...state,
            {
                displayedWord:"lines"
            }
        ]
    }
}