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
          <button>Add task</button>
          </div>
        );
    

}
export default TaskForm;