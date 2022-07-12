
import Mytaskspage from "./Mytaskspage";
import Navigation from "./components/Navigation";
import { Route,Routes } from "react-router-dom";
import React from "react";
import HelpPage from "./components/HelpPage";



function Allpages () {

    return(<main>
        <Routes>
            <Route path ='/'element={<Mytaskspage/>} exact/>
            <Route path ='/home' element={<Navigation/>} exact/>
            <Route path ='/my-task' element={<Mytaskspage/>} exact/>
            <Route path ='/graph' element={<Navigation/>} exact/>
            <Route path='/help'  element={[<HelpPage/>,<Navigation/>]} exact/>
        </Routes>
    </main>
    );
}
export default Allpages;