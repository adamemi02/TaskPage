import classes from './Navigation.module.css';
import React from 'react';
function Navigation(){
    return(
        <div className={classes.navigation}>
            <div className={classes.navigation_option}>Home</div>
            <div className={classes.navigation_option}>My tasks</div>
            <div className={classes.navigation_option}>Graph</div>
            <div className={classes.navigation_option}>Help</div>
        </div>
    )

}
export default Navigation;

// you can rename the first classname to "navigation" - same as the component
// and the other class names to navigation__option
// to use the BEM notation