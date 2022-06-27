import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TaskForm from './components/TaskForm';
import classes from './Mytaskspage.module.css';
import Mytasks from './components/Mytasks';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import {useState} from "react";
import { Component } from 'react';
import logo from "./POZA.png";  
import TableTasks from './components/TableTasks';
import ModalStuff from './ModalStuff';

export default class Mytaskspage extends React.Component {
  constructor(props){
  super(props);
 

  this.state={
   tasks:[{nr:1,description:"Task nr1",Date:"12/12/2020",Status:[{id:'open',lable:'open'}],Action:<div><button className={classes.ButtonCLick}>D</button><button>E</button><button>O</button></div>},
   {nr:2,description:"Task nr2",Date:"20/12/2020",Status:[{id:'open',lable:'open'}],Action:<div><button >D</button><button>E</button><button>O</button></div>},
   {nr:3,description:"Task nr3",Date:"30/12/2020",Status:[{id:'open',lable:'open'}],Action:<div><button >D</button><button>E</button><button>O</button></div>},
   {nr:4,description:"Task nr4",Date:"10/12/2020",Status:[{id:'open',lable:'open'}],Action:<div><button>D</button><button>E</button><button>O</button></div>}]};
   function Deleterow(){
    var array=this.state.tasks;
    {
      array.splice(0,1);
       this.setState({tasks:array});
    }
 
 
  }
   window.onload=function(){
     document.getElementsByClassName(classes.ButtonCLick).onClick={Deleterow}
   }
  
  }
  
  

  
 render(){
  return(
    <div>
    <div className={classes.App}>
      <Navigation />
      <Header />
      <Mytasks/>
    </div>
       <TaskForm />
       <TableTasks tasks={this.state.tasks}/>
       <ModalStuff/>
      

    
       
    </div>
  );
 }
 }

