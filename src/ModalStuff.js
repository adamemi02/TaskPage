import React from "react";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import {useState} from 'react';
import logo from "./POZA.png"; 
import classes from "./components/ModalStuff.module.css";


function ModalStuff(){


    const[modalisOpen,setModalIsOpen]=useState(false);
    function closeModalHandler(){
        setModalIsOpen(false);}
    function deleteHandler(){
     setModalIsOpen(true);
     document.getElementsByClassName(classes.App).background="blue";
   }
   return(
       <div>
           <img src={logo} className={classes.Image} alt="Logo" onClick={deleteHandler}/>
           {modalisOpen && <Backdrop onCancel={closeModalHandler}/>}
       {modalisOpen &&<Modal/>}
       </div>

   );

}
export default ModalStuff;