import {useRef, useState} from "react";
import React from "react";
import classes from './TaskForm.module.css';
function TaskForm(props){
       
            
          
          

          
          
          return (
         <div className={classes.taskform}>
             <h2>Form</h2>

          <form>
            <div>
            <label htmlFor="description1">Description</label>
            <input type="text" id="description1" value={props.task.description} onChange={(e)=>props.modifyInput(e,'description')}/>
            </div>
            <div>
              <label htmlFor="data1">Data</label>
              <input type="text"  id="data1" value={props.task.date} onChange={(e)=>props.modifyInput(e,'date')}/>
            </div>
            <div>
              <label htmlFor="notes1">Notes</label>
              <input type="text"  id="notes1" value={props.task.notes} onChange={e=>props.modifyInput(e,'notes')}/>
            </div>
            <div>
            <button className={classes.task_form__add_task_btn} onClick={(e)=>props.addTask(e)} disabled={props.buttonDisabled} >Save task</button>
            </div>
          </form>
          
          <button className={classes.x} onClick={props.taskInvisible}>X</button>
          </div>
        );


}
export default TaskForm;

