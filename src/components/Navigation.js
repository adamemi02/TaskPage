import classes from './Navigation.module.css';
import React from 'react';
function Navigation(){
    return(
        <div className={classes.Nav}>
            <div className={classes.Navigation}>Home</div>
            <div className={classes.Navigation}>My tasks</div>
            <div className={classes.Navigation}>Graph</div>
            <div className={classes.Navigation}>Help</div>
        </div>
    )

}
export default Navigation;