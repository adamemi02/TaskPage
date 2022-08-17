
import Mytaskspage from "./Mytaskspage";
import Navigation from "./components/Navigation";
import Graph from "./Graph";
import { Route,Routes } from "react-router-dom";
import React from "react";
import HelpPage from "./components/HelpPage";
import TableMui from "./components/TableMui";



function Allpages () {

    return(<main>
        <Routes>
            <Route path ='/'element={<Mytaskspage/>} exact/>
            <Route path ='/home' element={[<Navigation/>,<TableMui/>]} exact/>
            <Route path ='/my-task' element={<Mytaskspage/>} exact/>
            <Route path ='/graph' element={[<Navigation/>,<Graph/>]} exact/>
            <Route path='/help'  element={[<HelpPage/>,<Navigation/>]} exact/>
        </Routes>
    </main>
    );
}
export default Allpages;