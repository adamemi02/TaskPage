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

// you can rename the first classname to "navigation" - same as the component
// and the other class names to navigation__option
// to use the BEM notation