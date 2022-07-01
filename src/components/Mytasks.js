import React from "react";
import classes from './Mytasks.module.css';
function Mytasks(props)
{
    return(
        <div className={classes.mytasks}>
            
            <p>Open:4</p>
            <p>In progress:3</p>
            <p>Done:5</p>
            <div className={classes.create} onClick={props.taskVisible}>Create new</div>
            
        </div>
    );

}
export default Mytasks;