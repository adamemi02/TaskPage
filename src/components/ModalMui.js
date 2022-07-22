import React from "react";
import classes from "./ModalMui.module.css";
function ModalMui(props){

  

     

    return(

        <div className={classes.modal}>
            <div>
                Id:
                <span>
                    {props.afisareModal.id}
                </span>

            </div>
            <div>
                UserId:
                <span>
                    { props.afisareModal.userId }
                </span>
                </div>
            <div>Title:<span>{props.afisareModal.title}</span></div>
            <div>Completed:<span>{props.afisareModal.body}</span></div>
        </div>

    );
}
export default ModalMui; 