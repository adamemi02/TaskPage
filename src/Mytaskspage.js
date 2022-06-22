import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TaskForm from './components/TaskForm';
import classes from './Mytaskspage.module.css';
import Mytasks from './components/Mytasks';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import {useState} from "react";
import logo from "./POZA.png";  

function Mytaskspage() {

  const  [modalisOpen,setModalIsOpen]=useState(false);

  function deleteHandler(){
    setModalIsOpen(true);
    document.getElementsByClassName(classes.App).background="blue";
  }

  function closeModalHandler(){
    setModalIsOpen(false);

  }
  return(
    <div>
    <div className={classes.App}>
      <Navigation />
      <Header />
      <Mytasks/>
      <img src={logo} className={classes.Image} alt="Logo" onClick={deleteHandler}/></div>
       <TaskForm />
       
       {modalisOpen && <Backdrop onCancel={closeModalHandler}/>}
       {modalisOpen &&<Modal/>}
      
      
    
    </div>

  
  );
}
export default Mytaskspage;
