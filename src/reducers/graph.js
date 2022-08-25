const initialState={
    graphOption:[
        {
            id:'bars',
            label:'Bars',
            key:"dasdasd"

        },
        {
            id:'lines',
            label:'Lines',
            key:"dasda"
        }
    ]
}

export default function graph(state=initialState,action){
    switch(action.type)
    {
        default:return state;
    }
}