import React from "react";
import classes from "./Modal.module.css";
function Modal(props){
     

    return(

        <div className={classes.Modal}>
            <div>Task 1</div>
            <div>Description:Finish My Homework</div>
            <div>Date:12/12/2021</div>
            <div>Status:Open</div>
            <div>Notes.......</div>
        </div>

    );
}
export default Modal; 