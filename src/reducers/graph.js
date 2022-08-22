
const initialState={
    graphOption:[
        {
            id:'bars',
            label:'Bars'

        },
        {
            id:'lines',
            label:'Lines'
        }
    ]
}

export default function graph(state=initialState,action){
    switch(action.type)
    {
        default:return state;
    }
}