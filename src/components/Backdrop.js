import React from "react";
import classes from  './Backdrop.module.css';
import Modal from "./Modal.js";

function Backdrop(props){
    return(

        <div className={classes.backdrop} onClick={props.onCancel}>
            <Modal />
        </div>

    );


}
export default Backdrop;

// add an empty line before defining the component

// the className can be renamed to className="backdrop", same name as the component,
// but not uppercased

// rename the css file and import it like: import './backdrop.css'.
// same for the other js files, there's no need to give a name to the css file you import and
// then to use it in the className