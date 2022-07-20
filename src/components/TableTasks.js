import React from "react";
import classes from "./TableTasks.module.css";



function TableTasks(props) {
  var dictionar=props.tasks;

  function Color(item){
    if(item.currentStatus.label==='Done')
       return 'green';
    else{
      if(item.currentPriority==='minor')
      return 'grey';
    if(item.currentPriority==='major')
    return 'orange';
    if(item.currentPriority==='critical')
    return 'red';

    }
  }

  function Style(item){
    if(item.currentStatus.label==='Done')
      return 'line-through';
    return '';  
  }
  
  return(
  <table className={classes.tableTasks}>
  <thead>
    <tr key={0}>
      <th className={classes.firstcolumn}>Nr:</th>
      <th>Description</th>
      <th>Date</th>
      <th>Priority</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody key="tbody">
    {dictionar.map((item,index) => {
      return (
        <tr key={item.nr}>
          <td className={classes.firstcolumn}>{item.nr}</td>
          <td
            style={
              { color:Color(item),
                textDecorationLine:Style(item)}
            }
            >{ item.description }</td>
          <td
          style={
            {color:Color(item),
            textDecorationLine:Style(item)}
          }
          >{ item.date }</td>
          <td>
            <select onChange={(e)=>props.modifyPriority(e,index)}>
              {item.priority.map(element=>{return(<option key={element} value={element}>{element}</option>)})}
            </select>
          </td>
          <td>
            <select onChange={(e)=>props.modifyValues(e,index)}>
            {item.status.map(element=>{return(<option key={element.label} value={element.label}>{element.label}</option>)})}
            </select>
          </td>
          <td className>
            <div className={classes.flex}>
            <div className={classes.nr1} onClick={()=>{props.deleteRow(item.nr)}}>D</div>
            <div className={classes.nr1} onClick={()=>props.showModal(item.nr)}>O</div>
            <div className={classes.nr1} onClick={()=>props.e_clicked(item.nr)}>E</div>
            </div>
            
            </td>
            
           
        </tr>
      );
    })}
    
  </tbody>
</table>
  );
 


}
export default TableTasks;

