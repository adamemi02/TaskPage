
import {connect} from "react-redux";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import React, {useState} from "react";
import classes from "./Graph.module.css";

function Graph(props){
    const [isMenuOpen, setMenuVisibility] = useState(false);

    return(
        <div className={classes.div}>
            {/* te rog sa te uiti peste componenta de meniu din material ui si sa
            completezi ce e nevoie pentru ea sa apara meniul corect cand facem click
            pe buton */}
            <Button onClick={() => setMenuVisibility(true)}>
                Open Menu
            </Button>
            <Menu
                open={isMenuOpen}
                onClose={() => setMenuVisibility(false)}
            >
                {props.graphOption.map((option) =>
                    <MenuItem key={option.id}>
                        <ListItemText>{option.label}</ListItemText>
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
