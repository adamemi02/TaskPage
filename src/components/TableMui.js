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
          task:{userId:"",title:"",body:""}}

        afisareTabel=()=>{
            
          axios
          .get('https://jsonplaceholder.typicode.com/posts')
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

        /*async deleteRowMui(clickedId) {
          var aux;
            {await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${clickedId}`)
            .then(informatii=>aux=informatii.data);}
            {await axios.delete(`https://jsonplaceholder.typicode.com/posts/${clickedId}`)}
              
          const newTasks=this.state.date.filter(element=>{return element.id!=aux.id})
         this.setState({date:newTasks});

       }*/
       async deleteRowMui(clickedId) {
        var aux;
          {await axios.delete(`https://jsonplaceholder.typicode.com/posts/${clickedId}`)}
          {await axios
          .get(`https://jsonplaceholder.typicode.com/posts`)
          .then(informatii=>this.setState({date:informatii.data}));}
            
        

     }

       
        
        async e_clicked(clickedId) {

          await
          axios
          .get(`https://jsonplaceholder.typicode.com/posts/${clickedId}`)
          .then(informatii =>this.setState({task:informatii.data,isTaskFormVisible:true,button_E_clicked:{bool:true,index:clickedId}}));
    
          
     
        }
        taskInvisible=()=>{
          this.setState({isTaskFormVisible:false});
          this.setState({task:{userId:'',title:'',body:''}});
          this.setState({button_E_clicked:{bool:false,index:-1}});
        }
       
        async addTask(e){
          
           
             this.setState({isTaskFormVisible:false});
             e.preventDefault();                                                                                                                                     
             console.log(this.state.task);
             
             var aux2=[];
             var index=this.state.button_E_clicked.index;
             
             
             await axios.put(`https://jsonplaceholder.typicode.com/posts/${index}`,this.state.task);
             {await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
             .then(informatii=>this.setState({date:informatii.date}));}
             
           

     
            
          
        }
        async addTask(e){

          console.log(4);
          if(this.state.button_E_clicked.bool===false)
           {e.preventDefault();
            this.setState({isTaskFormVisible:false});
     
             if(this.state.task.description &&this.state.task.date)
             {axios.put(`https://jsonplaceholder.typicode.com/posts`,{userId:this.state.task.userId,title:this.state.task.title,body:this.state.task.body,id:this.state.date.length+1})
             .then(informatii=>this.setState({date:informatii.data}));
           
             }}
           else{
            this.setState({isTaskFormVisible:false});
            e.preventDefault();                                                                                                                                     
            console.log(this.state.task);
            
            var aux2=[];
            var index=this.state.button_E_clicked.index;
            
            
            await axios.put(`https://jsonplaceholder.typicode.com/posts/${index}`,this.state.task);
            {await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            .then(informatii=>this.setState({date:informatii.data}));}
             
           }
     
           }  
          
        
        modifyInput=(e,inputType)=>{
          this.setState({task:{...this.state.task,[inputType]:e.target.value}});
        }
        closeModal=()=>{
          this.setState({isModalVisible:false});
        }
        
         async showModal(clickedId){
           await
          axios
          .get(`https://jsonplaceholder.typicode.com/posts/${clickedId}`)
          .then(informatii =>this.setState({openedTask:informatii.data}));
          this.setState({isModalVisible:true});

         }
         taskVisible=()=>{
          this.setState({isTaskFormVisible:true});
          this.setState({task:{userId:"",title:"",body:""}});
          this.setState({button_E_clicked:{bool:false,index:-1}});
        }

    render(){
    return(
      <div>
         <div className={classes.create} onClick={this.taskVisible}>Create new</div>
        
          
          { this.state.date.length>0 && this.state.date &&
            
            
            <TableContainer  className={classes.tabel} style={{width:"600px"}} >
              <div className={classes.scrollit}>
     <Table  aria-label="simple table" >
       <TableHead>
         <TableRow>
           <TableCell className={classes.firstrow}>User Id</TableCell>
           <TableCell  className={classes.secondrow}align="right">ID</TableCell>
           <TableCell align="right" className={classes.thirdrow}>Title</TableCell>
           <TableCell align="right" className={classes.lastrow}>Body</TableCell>
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
             <TableCell align="right" className={classes.lastrow}>{row.body}</TableCell>
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


      
     

