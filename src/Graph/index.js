import {connect} from "react-redux";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import React, {useState} from "react";
import classes from "./Graph.module.css";
import { showWord } from "../actions/graph";


 function Graph(props)  {
    const [anchorEl,setAnchorEl]=useState(null);
    const open=Boolean(anchorEl);

    return(
        <div className={classes.div}>
            
            <Button className={classes.button} onClick={(event)=>{setAnchorEl(event.currentTarget)}}>
                Open Menu
            </Button>
            <Menu anchorEl={anchorEl}
                open={open}
                onClose={()=>{setAnchorEl(null)}}
            >
                {props.graphOption.map((option) =>
                    <MenuItem key={option.label}>
                        <ListItemText onClick={showWord(option.label)}>{option.label}</ListItemText>
                    </MenuItem>
                )}
            </Menu>
        </div>
    )
}

export default connect(
    // graph este ce avem noi definit in initial state in graph reducer
    // in felul acesta am facut sa avem acces la state ul de care avem nevoie in
    // aceasta componenta
    ({graph}) => {
        return {
            graphOption: graph.graphOption
        };
    },
    // {
        // actions here if needed
    // }
)(Graph)