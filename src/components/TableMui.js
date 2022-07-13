import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default class TableMui extends React.Component(){

    constructor(props){
        super(props);
        this.state={date:[{userId:4,id:4,title:"dsadas",completed:false}],tableVisible:false};

        this.afisareTabel = () => {
            this.setState({tableVisible:true})
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then(json => {
                this.setState({ date:json});
            });
        }
    }
     
     
    

    
    render(){    
    return(
        <div>
            <button onClick={this.afisareTabel}>Tabel</button>
            <TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>User Id</TableCell>
           <TableCell align="right">ID</TableCell>
           <TableCell align="right">Title</TableCell>
           <TableCell align="right">Completed</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
           
         {this.state.date.map((row) => {
              return(
           <TableRow key={row.UserId}>
             <TableCell component="th" scope="row">
               {row.UserId}
             </TableCell>
             <TableCell align="right">{row.id}</TableCell>
             <TableCell align="right">{row.title}</TableCell>
             <TableCell align="right">{row.completed}</TableCell>
           </TableRow>);
    })}
       </TableBody>
     </Table>
   </TableContainer>
   </div>
        );
}
}

      
     

