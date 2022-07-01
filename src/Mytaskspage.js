import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TaskForm from './components/TaskForm';
import classes from './Mytaskspage.module.css';
import Mytasks from './components/Mytasks';
import TableTasks from './components/TableTasks';
import ModalStuff from './ModalStuff';
import Modal from './components/Modal';


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
  isModalVisible:false
  
  };

   this.deleteRow = (clickedId) => {
     console.log(clickedId);
     const newTasks=this.state.tasks.filter(element=>{return element.nr!==clickedId})
    this.setState({tasks:newTasks});

   }

   this.showModal =(clickedId) => {

    console.log(clickedId);
    const obiect=this.state.tasks.filter(element=>{return element.nr===clickedId});
    this.setState({openedTask:obiect[0]});
    this.setState({isModalVisible:true});
    console.log(this.state);

     
   }
   
     

  }





 render(){
  return(
    <div>
    <div className={classes.app}>
      <Navigation />
      <Header />
      <Mytasks/>
    </div>
       <TaskForm />
       <TableTasks tasks={this.state.tasks} deleteRow={this.deleteRow} showModal={this.showModal}/>
        <ModalStuff  isModalVisible={this.state.isModalVisible}  obiect={this.state.openedTask} closeModal={this.closeModal}/>
       




    </div>
  );
 }
 }


// try to remove all the import lines which are not used

// all the properties we have in the state, in tasks list should be lowercase
// ex: date, status, action, etc
// there should be no html in the tasks list for the action,
// it should be written inside table task component

// Deleterow should be renamed to deleteRow

// this logic is not very helpful and it's not used anymore in react
// window.onload=function(){
//   document.getElementsByClassName(classes.ButtonCLick).onClick={Deleterow}
// }

// the logic for deleteRow should be good, but it's not written corectly
// and it needs a parameter, to know what row to remove; the clicked one
// function deleteRow(){
//   let array=this.state.tasks;

//   array.splice(0,1);
//   this.setState({tasks:array});
// }

// another option to detele a row would be to use filter and to filter
// the item which has the index you clicked on
// ex:
// function deleteRow(clickedIndex) {
//   const newTasks = this.state.tasks.filter((task, index) => clickedIndex !== index);

//   this.setState({tasks: newTasks});
// }

// and this function defined above (deleteRow) should be send as a prop to TableTask component,
// like <TableTasks tasks={this.state.tasks} deleteRow={deleteRow} />
// and then you have the prop deleteRow were you defined the TableTask function and it can
// be used there