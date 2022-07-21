import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TaskFormMui from "./TaskFormMui.js"
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState,useEffect } from "react";
import classes from './TableMui.module.css';
import ModalStuffMui from "./ModalStuffMui.js";
import { flexbox } from "@mui/system";
import axios from "axios";

export default  class TableMui  extends React.Component{
  

  
    state={date:[],
          openedTask:{},
          isTaskFormVisible:false,
          button_E_clicked:{bool:false,index:-1},
          isModalVisible:false,
          task:{userId:"",title:"",completed:""}}

        afisareTabel=()=>{
            
          axios
          .get('https://jsonplaceholder.typicode.com/todos')
          .then(informatii =>this.setState({date:informatii.data}) )
          .catch(error => console.log(error));
        }
        /*afisareTabel=()=>{
            
          fetch('https://jsonplaceholder.typicode.com/todos')
          .then((response) => response.json())
          .then(json => {this.setState({date:json});
            
          });
          console.log(5);
      }*/

       
        componentDidMount(){
          this.afisareTabel();
        }
        /*deleteRowMui = (clickedId) => {
          var aux;  
          const newTasks=this.state.date.filter(element=>{return element.id!==clickedId})
         this.setState({date:newTasks});
        }*/

        async deleteRowMui(clickedId) {
          var aux;
            {await axios
            .get(`https://jsonplaceholder.typicode.com/todos/${clickedId}`)
            .then(informatii=>aux=informatii.data);}
            {await axios.delete(`https://jsonplaceholder.typicode.com/todos/${clickedId}`)}
              
          const newTasks=this.state.date.filter(element=>{return element.id!=aux.id})
         this.setState({date:newTasks});

       }
        
        async e_clicked(clickedId) {

          await
          axios
          .get(`https://jsonplaceholder.typicode.com/todos/${clickedId}`)
          .then(informatii =>this.setState({task:informatii.data,isTaskFormVisible:true,button_E_clicked:{bool:true,index:clickedId}}));
    
          
     
        }
        taskInvisible=()=>{
          this.setState({isTaskFormVisible:false});
          this.setState({task:{description:'',date:'',notes:''}});
          this.setState({button_E_clicked:{bool:false,index:-1}});
        }
       
        addTask=(e)=>{
          
           
             this.setState({isTaskFormVisible:false});
             e.preventDefault();                                                                                                                                     
             console.log(this.state.task);
             
             var aux2=[];
             var index=this.state.button_E_clicked.index;
             
             for(let i=0;i<this.state.date.length;i++)
             {
               if(this.state.date[i].id===index)
               aux2.push(this.state.task);
               else aux2.push(this.state.date[i]);
             }
             this.setState({date:aux2});
           

     
            
          
        }
        modifyInput=(e,inputType)=>{
          this.setState({task:{...this.state.task,[inputType]:e.target.value}});
        }
        closeModal=()=>{
          this.setState({isModalVisible:false});
        }
        
         async  showModal(clickedId){
           await
          axios
          .get(`https://jsonplaceholder.typicode.com/todos/${clickedId}`)
          .then(informatii =>this.setState({openedTask:informatii.data}));
          this.setState({isModalVisible:true});

         }
         
        

    

    
        
    
     
     
    

    render(){
    return(
      <div>
        
          
          { this.state.date.length>0 && this.state.date &&
            
            
            <TableContainer  className={classes.tabel} style={{width:"600px"}} >
              <div className={classes.scrollit}>
     <Table  aria-label="simple table" >
       <TableHead>
         <TableRow>
           <TableCell className={classes.firstrow}>User Id</TableCell>
           <TableCell  className={classes.secondrow}align="right">ID</TableCell>
           <TableCell align="right" className={classes.thirdrow}>Title</TableCell>
           <TableCell align="right" className={classes.lastrow}>Completed</TableCell>
           <TableCell align="right" className={classes.thirdrow}>Action</TableCell> 
         </TableRow>
       </TableHead>
       <TableBody>
           
         {this.state.date.map((row) => {
              return(
           <TableRow key={row.UserId}>
             <TableCell component="th" scope="row" className={classes.firstrow}>
               {row.userId}
             </TableCell>
             <TableCell align="right" className={classes.secondrow}>{row.id}</TableCell>
             <TableCell align="right" className={classes.thirdrow}>{row.title}</TableCell>
             <TableCell align="right" className={classes.lastrow}>{""+row.completed}</TableCell>
             <TableCell align="right" className={classes.thirdrow}>
               <div style={{display:"flex"}}>
               <div style={{margin:"3px"}} onClick={()=>this.e_clicked(row.id)}>E</div>
               <div style={{margin:"3px"}} onClick={()=>this.showModal(row.id)}>O</div>
               <div style={{margin:"3px"}} onClick={()=>this.deleteRowMui(row.id)}>D</div>
               </div>
               
             </TableCell>
           </TableRow>);
    })}
       </TableBody>
     </Table>
     </div>
   </TableContainer>}
   

   
   {(this.state.isTaskFormVisible)&&<TaskFormMui   taskInvisible={this.taskInvisible}  addTask={(e) => this.addTask(e)} modifyInput={(e, inputType) => this.modifyInput(e, inputType)} task={this.state.task}  buttonDisabled={(!this.state.task.userId || !this.state.task.title)} />}
   { <ModalStuffMui  isModalVisible={this.state.isModalVisible}  obiect={this.state.openedTask} closeModal={this.closeModal}/>}
   </div>
        );
}
}


      
     

