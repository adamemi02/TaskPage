import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import classes from "./Helppage.module.css";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { ListItem,TextField, Input,FormControlLabel,Checkbox, Snackbar,IconButton} from '@mui/material';

export default class HelpPage extends React.Component {

  constructor(props){
    super(props)
    this.state={value:'1',open:false};


    this.handleChange = (event,newValue) => {
      this.setState({value:newValue});
      
    };

    this.handleClick=() =>{
      this.setState({open:true});
    }

    this.handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      this.setState({open:false});
    };

    this.action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={this.handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={this.handleClose}
        >
          
        </IconButton>
      </React.Fragment>
    );


  }
 
  render(){
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={this.state.value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList className={classes.help_page_tab} onChange={this.handleChange} aria-label="lab API tabs example">
            <Tab label="Tab 1 " value="1" />
            <Tab label="Tab 2 " value="2" />
            <Tab label="Tab 3" value="3" />
            <Tab label="Tab 4 " value="4"/>
          </TabList>
        </Box>
        <div className={classes.help_page_string}>
        <TabPanel value="1">
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">Succes</Button>
          <Button variant="outlined" color="error">Error</Button>

        </TabPanel>
        <TabPanel value="2">
          <List>
            <ListItem>Anglia</ListItem>
            <ListItem>Belgia</ListItem>
            <ListItem>Romania</ListItem>
            <ListItem>Elvetia</ListItem>
          </List>

        </TabPanel>
        <TabPanel value="3">
        <div>
      <Button onClick={this.handleClick}>Open simple snackbar</Button>
      <Snackbar
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        message="Note archived"
        action={this.action}
      />
    </div>
        </TabPanel>
        <TabPanel value="4">
        <TextField id="outlined-basic" label="Text Field" variant="outlined" />
        <Input label="Text" variant="contained"></Input>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </TabPanel>
        </div>
      </TabContext>
    </Box>
  );
}}



