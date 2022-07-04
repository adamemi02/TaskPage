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
   {nr:4,description:"Task nr4",date:"10/12/2020",status:[{id:'open',lable:'open'}],notes:"lebada"},
   {nr:5,description:"Task nr5",date:"12/12/2019",status:[{id:'open',lable:'open'}],notes:"soarece"},
   {nr:6,description:"Task nr6",date:"10/12/1990",status:[{id:'open',lable:'open'}],notes:"ratusca"}
  ],
  task:{description:'',date:'',notes:''},
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
   this.addTask=(e)=>{
      e.preventDefault();

        if(this.state.task.description &&this.state.task.date)
        {var aux=this.state.tasks;
        aux.push({nr:aux[aux.length-1].nr+1,description:this.state.task.description,date:this.state.task.date,status:[{id:'open',lable:'open'}],notes:this.state.task.notes});
        this.setState({tasks:aux});
        this.setState({task:{description:'',date:'',notes:''}});
        this.setState({isTaskFormVisible:false});
      
      console.log(this.state);
        }
     
   }

   this.modifyInput=(e,inputType)=>{
     this.setState({task:{...this.state.task,[inputType]:e.target.value}});
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
       {(this.state.isTaskFormVisible)&&<TaskForm taskInvisible={this.taskInvisible}  addTask={(e) => this.addTask(e)} modifyInput={(e, inputType) => this.modifyInput(e, inputType)} task={this.state.task} buttonDisabled={(!this.state.task.description || !this.state.task.date)} />}
       <TableTasks tasks={this.state.tasks} deleteRow={this.deleteRow} showModal={this.showModal} taskVisible={this.taskVisible}/>
       { <ModalStuff  isModalVisible={this.state.isModalVisible}  obiect={this.state.openedTask} closeModal={this.closeModal}/>}
       




    </div>
  );
 }
 }


