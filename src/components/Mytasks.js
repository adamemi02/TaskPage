import React from "react";
import classes from './Mytasks.module.css';
function Mytasks()
{
    return(
        <div>
            
            <p>Open:4</p>
            <p>In progress:3</p>
            <p>Done:5</p>
            <button>Create new</button>
            <table>
                <tr>
                    <th>No.</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Finish my Homework</td>
                    <td>12/12/2021</td>
                    <td>
                        <div className={classes.Open}>Open</div>
                    </td>
                    <td className={classes.Action}>
                        <div className={classes.O}>O_</div>
                        <div className={classes.O}>E_ </div>
                        <div className={classes.O}>D_</div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td> </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td> </td>
                </tr>
            </table>
        </div>
    );

}
export default Mytasks;