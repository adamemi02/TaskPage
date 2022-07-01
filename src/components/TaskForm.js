import React from "react";
import classes from './TaskForm.module.css';
function TaskForm(props){
        return (
         <div className={classes.taskform}>
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
          <button className={classes.task_form__add_task_btn}>Add task</button>
          <button className={classes.x} onClick={props.taskInvisible}>X</button>
          </div>
        );


}
export default TaskForm;

