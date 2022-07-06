import { Tabs,Tab } from "@material-ui/core";
import React from "react";
function Help_page(){
    return(
        <Tabs
  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example"
>
  <Tab value="one" label="Tab 1" />
  <Tab value="two" label="Tab 2" />
  <Tab value="three" label="Tab 3" />
  <Tab value="four"  label="Tab 4"/>
</Tabs>

    )
}
export default Help_page;