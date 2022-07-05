
import Mytaskspage from "./Mytaskspage";
import Navigation from "./components/Navigation";
import { Route,Routes } from "react-router-dom";

import React from "react";



function Allpages () {

    return(<main>
        <Routes>
            <Route path ='/'element={<Mytaskspage/>} exact>
                
            </Route>
            <Route path ='/home' element={<Navigation/>} exact/>
            <Route path ='/my-task' element={<Mytaskspage/>} exact/>
            <Route path ='/graph' element={<Navigation/>} exact/>
            <Route path='/help' element={<Navigation/>} exact/>
        </Routes>
    </main>
    );
}
export default Allpages;