import React from "react";
import classes from './Mytasks.module.css';
function Mytasks()
{
    return(
        <div className={classes.Mytasks}>
            
            <p>Open:4</p>
            <p>In progress:3</p>
            <p>Done:5</p>
            <div className={classes.Create}>Create new</div>
        </div>
    );

}
export default Mytasks;