import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TaskForm from './components/TaskForm';
import classes from './App.module.css';
import Mytasks from './components/Mytasks';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import {useState} from "react";

function App() {

  const  [modalisOpen,setModalIsOpen]=useState(false);

  function deleteHandler(){
    setModalIsOpen(true);
    document.getElementsByClassName(classes.App)[0].style.color="grey";
  }

  function closeModalHandler(){
    setModalIsOpen(false);

  }
  return(
    <div>
    <div className={classes.App}>
      <Navigation />
      <Header />
      <TaskForm />
      <Mytasks/>
      <button onClick={deleteHandler}>Modal</button></div>
      {modalisOpen &&<Modal/>}
      {modalisOpen && <Backdrop onCancel={closeModalHandler}  />}
    
    </div>

  
  );
}
export default App;
