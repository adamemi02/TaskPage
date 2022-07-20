import React from "react";
import classes from  './BackdropMui.module.css';
import ModalMui from "./ModalMui.js";

function BackdropMui(props){
    return(

        <div className={classes.backdrop} onClick={props.onCancel}>
            <ModalMui afisareModal={props.afisareModal}/>
        </div>

    );


}
export default BackdropMui;

