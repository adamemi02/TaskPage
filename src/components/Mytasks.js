
import React from "react";
import classes from './Mytasks.module.css';
function Mytasks(props)
{
    return(
        <div className={classes.mytasks}>
            <div>
            <div>Open</div>
            <div>{props.tabel.openStatus}</div>
            </div>
            <div>
                <div>In progress</div>
                <div>{props.tabel.inProgressStatus}</div>
            </div>
            <div>
                <div>Done</div>
                <div>{props.tabel.doneStatus}</div>
            </div>
            <div className={classes.create} onClick={props.taskVisible}>Create new</div>
            
        </div>
    );

}
export default Mytasks;