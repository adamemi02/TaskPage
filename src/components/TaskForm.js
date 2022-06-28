import React from "react";
import classes from './TaskForm.module.css';
function TaskForm(){
        return (
         <div className={classes.Taskform}>
             <h2>Form</h2>

          <form>
            <label>Description:
              <input type="text" />
            </label>
            <br></br>
            <label>Date:
                <input type="date"/>
            </label>
            <br></br>
            <label>
                Notes:
                <input type="text"/>
            </label>
          </form>
          <button className={classes.Button1}>Add task</button>
          </div>
        );


}
export default TaskForm;

// rename button1 to something more specific,
// ex: task-form__add-task-btn