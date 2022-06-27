import React from "react";
import classes from "./TableTasks.module.css";

function TableTasks(props) {
  const dictionar=props.tasks;
  return(
  <table className={classes.TableTasks}>
  <thead>
    <tr>
      <th className={classes.Firstcolumn}>Nr:</th>
      <th>Description</th>
      <th>Date</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {dictionar.map(item => {
      return (
        <tr>
          <td className={classes.Firstcolumn}>{item.nr}</td>
          <td>{ item.description }</td>
          <td>{ item.Date }</td>
          <td>{ item.Status[0].id }</td>
          <td>{item.Action}</td>
        </tr>
      );
    })}
    <tr className={classes.Lastrow}>
      <td className={classes.Firstcolumn}></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
  );
  function deleterow(){
    
  }
    
    
}
export default TableTasks; 