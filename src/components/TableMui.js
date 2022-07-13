import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import classes from './TableMui.module.css'

export default class TableMui extends React.Component{

    
        state={date:[],tableVisible:false};

        afisareTabel = () => {
            this.setState({tableVisible:true})
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then(json => {
                this.setState({ date:json});
            });
            console.log(4);
        }
    
     
     
    

    
    render(){    
    return(
        <div>
            
            <button onClick={this.afisareTabel}>Tabel</button>
            <TableContainer className={classes.tabel} style={{width:"700px"}}>
     <Table aria-label="simple table" >
       <TableHead>
         <TableRow>
           <TableCell className={classes.firstrow}>User Id</TableCell>
           <TableCell  className={classes.secondrow}align="right">ID</TableCell>
           <TableCell align="right" className={classes.thirdrow}>Title</TableCell>
           <TableCell align="right" className={classes.lastrow}>Completed</TableCell>
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
           </TableRow>);
    })}
       </TableBody>
     </Table>
   </TableContainer>
   </div>
        );
}
}

      
     

