import React from "react";
import classes from "./Modal.module.css";
function Modal(props){
     

    return(

        <div className={classes.modal}>
            <div>
                Task:
                <div>
                    {props.openedTask[0].nr}
                </div>

            </div>
            <div>
                Description:
                <div>
                    {props.openedTask[0].description}
                </div>
                </div>
            <div>Date<div>{props.openedTask[0].date}</div></div>
            <div>Status</div>
            <div>Notes<div>{props.openedTask[0].notes}</div></div>
        </div>

    );
}
export default Modal; 