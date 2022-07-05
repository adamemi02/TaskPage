import classes from './Navigation.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div className={classes.navigation}>
            
            <Link  to='/home' className={classes.navigation_option}>Home</Link>
            <Link to='/my-task' className={classes.navigation_option}>Mytasks</Link>
            <Link to='/graph' className={classes.navigation_option}>Graph</Link>
            <Link to ='/help' className={classes.navigation_option}>Help</Link>
            
        </div>
    );

}
export default Navigation;

