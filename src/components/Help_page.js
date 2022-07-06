import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import classes from "./Helppage.module.css";

export default function Help_page() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList className={classes.help_page_tab} onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Tab 1 " value="1" />
            <Tab label="Tab 2 " value="2" />
            <Tab label="Tab 3" value="3" />
            <Tab label="Tab 4 " value="4"/>
          </TabList>
        </Box>
        <div className={classes.help_page_string}>
        <TabPanel value="1">Tab 1</TabPanel>
        <TabPanel value="2">Tab 2 </TabPanel>
        <TabPanel value="3">Tab 3 </TabPanel>
        <TabPanel value="4">Tab 4 </TabPanel>
        </div>
      </TabContext>
    </Box>
  );
}