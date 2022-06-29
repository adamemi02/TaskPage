import React from "react";
import classes from "./TableTasks.module.css";

function TableTasks(props) {
  return(
  <table className={classes.tableTasks}>
  <thead>
    <tr key={0}>
      <th className={classes.firstcolumn}>Nr:</th>
      <th>Description</th>
      <th>Date</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody key="tbody">
    {props.tasks.map((item) => {
      return (
        <tr key={item.nr}>
          <td className={classes.firstcolumn}>{item.nr}</td>
          <td>{ item.description }</td>
          <td>{ item.Date }</td>
          <td>{ item.Status[0].id }</td>
          <td>{item.Action}</td>
        </tr>
      );
    })}
    <tr key={"header"} className={classes.lastrow}>
      <td className={classes.firstcolumn}></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
  );
 


}
export default TableTasks;

// methods like deleteRow are always defined before return,
// but if something is not used, you can remove it
// you can also check the terminal, last message here should be
// that the project was sucessufly compiled, no warnings or errors

// look in the browser console and there's an error saying:
// Each child in a list should have a unique "key" prop.
// try to find a way to fix it, it's very simple

// we can rename dictionar to something more specific or you can just write
// props.tasks.map(.........)
// another option would be to write the props like:
// function TableTasks({tasks}) {..........}