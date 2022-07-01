import React from "react";
import classes from  './Backdrop.module.css';
import Modal from "./Modal.js";

function Backdrop(props){
    return(

        <div className={classes.backdrop} onClick={props.onCancel}>
            <Modal afisareModal={props.afisareModal}/>
        </div>

    );


}
export default Backdrop;

