import React from "react";
import classes from "./Backdrop.module.css";
import Modal from "./Modal.js";

function Backdrop(props){
    return(

        <div className={classes.Backdrop} onClick={props.onCancel}>
            <Modal />
        </div>
    );


}
export default Backdrop;
