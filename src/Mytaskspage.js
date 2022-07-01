import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TaskForm from './components/TaskForm';
import classes from './Mytaskspage.module.css';
import Mytasks from './components/Mytasks';
import TableTasks from './components/TableTasks';
import ModalStuff from './ModalStuff';


export default class Mytaskspage extends React.Component {
  constructor(props){
  super(props);


  this.state={
   tasks:[{nr:1,description:"Task nr1",date:"12/12/2020",status:[{id:'open',lable:'open'}],notes:"pisica"},
   {nr:2,description:"Task nr2",date:"20/12/2020",status:[{id:'open',lable:'open'}],notes:"caine"},
   {nr:3,description:"Task nr3",date:"30/12/2020",status:[{id:'open',lable:'open'}],notes:"papagal"},
   {nr:4,description:"Task nr4",date:"10/12/2020",status:[{id:'open',lable:'open'}],notes:"lebada"}
  ],
  openedTask:{},
  isModalVisible:false,
  isTaskFormVisible:false
  
  };

   this.deleteRow = (clickedId) => {  
     const newTasks=this.state.tasks.filter(element=>{return element.nr!==clickedId})
    this.setState({tasks:newTasks});
   }

   this.showModal =(clickedId) => {
    const obiect=this.state.tasks.filter(element=>{return element.nr===clickedId});
    this.setState({openedTask:obiect[0]});
    this.setState({isModalVisible:true});
     
   }

   this.closeModal=()=>{
     this.setState({isModalVisible:false});
   }
   this.taskVisible=()=>{
     this.setState({isTaskFormVisible:true});
   }
   this.taskInvisible=()=>{
     this.setState({isTaskFormVisible:false});
   }
     

  }





 render(){
  return(
    <div>
    <div className={classes.app}>
      <Navigation />
      <Header />
      <Mytasks taskVisible={this.taskVisible}/>
    </div>
       {(this.state.isTaskFormVisible)&&<TaskForm taskInvisible={this.taskInvisible} />}
       <TableTasks tasks={this.state.tasks} deleteRow={this.deleteRow} showModal={this.showModal} taskVisible={this.taskVisible}/>
       { <ModalStuff  isModalVisible={this.state.isModalVisible}  obiect={this.state.openedTask} closeModal={this.closeModal}/>}
       




    </div>
  );
 }
 }


