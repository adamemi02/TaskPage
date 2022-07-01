import React from "react";
import classes from "./Modal.module.css";
function Modal(props){

  

     

    return(

        <div className={classes.modal}>
            <div>
                Task:
                <span>
                    {props.afisareModal.nr}
                </span>

            </div>
            <div>
                Description:
                <span>
                    { props.afisareModal.description }
                </span>
                </div>
            <div>Date:<span>{props.afisareModal.date}</span></div>
            <div>Status:<span>{props.afisareModal.status[0].id}</span></div>
            <div>Notes:<span>{props.afisareModal.notes}</span></div>
        </div>

    );
}
export default Modal; 