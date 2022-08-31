

export function showWord(word){
    if(word==='bars')
    return{
        type:'bars',
        payload:{
            wordShown:'bars'
        }
    }
    if(word==='lines')
    return{
        type:'lines',
        payload:{
            wordShown:'lines'
        }
    }
}