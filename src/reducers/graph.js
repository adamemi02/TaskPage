

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
    if(action.type==='bars')
    {
        return{
            ...state,
            
                displayedWord:"bars"
            
        }
    }
    if(action.type==='action')
    {
        return[
            ...state,
            {
                displayedWord:"lines"
            }
        ]
    }
    else{
        return state;
    }
}