import React from "react";
import classes from './TaskFormMui.module.css';
function TaskFormMui(props){
       
            
          
          

          
          
          return (
         <div className={classes.taskform}>
             <h2>Form</h2>

          <form>
            <div>
            <label htmlFor="description1">UserId</label>
            <input type="text" id="description1" value={props.task.userId} onChange={(e)=>props.modifyInput(e,"userId")}/>
            </div>
            <div>
              <label htmlFor="data1">Title</label>
              <input type="text"  id="data1" value={props.task.title} onChange={(e)=>props.modifyInput(e,'title')}/>
            </div>
            <div>
              <label htmlFor="notes1">Body</label>
              <input type="text"  id="notes1" value={props.task.body} onChange={e=>props.modifyInput(e,'body')}/>
            </div>
            <div>
            <button className={classes.task_form__add_task_btn} onClick={(e)=>props.addTask(e)} disabled={props.buttonDisabled} >Save task</button>
            </div>
          </form>
          
          <button className={classes.x} onClick={props.taskInvisible}>X</button>
          </div>
        );


}
export default TaskFormMui;
