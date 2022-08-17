import store from "./store";
import { bars_option } from "./actions";
import { lines_option } from "./actions";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import React from "react";
import classes from "./Graph.module.css";

export default function Graph(){
    return(
        <div className={classes.div}>
        <MenuList>
            <MenuItem>
            <ListItemText onClick={bars_option}>Bars</ListItemText>
            </MenuItem>
            <MenuItem>
            <ListItemText onClick={lines_option}>Lines</ListItemText>
            </MenuItem>
        </MenuList>
        </div>
    )
}
