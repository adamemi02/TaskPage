import React from 'react';
import fetchUsers from "./Graph/actions";
import store from "./Graph/store";





export default  class Graph  extends React.Component{

  sum=(a,b)=>{
    return(a+b);
  }

  fetch=()=>{
    return(fetchUsers);
  }
  

  componentDidMount(){
    
    console.log('Initial State ', store.getState())
    store.dispatch(fetch) 
    setTimeout(()=>{
      console.log('Updated State ', store.getState())
    }, 1000);
    }

render(){
  return(
    <div>431231231231233123</div>
  );
}

}


