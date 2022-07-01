import React from "react";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import {useState} from 'react';
import logo from "./POZA.png";
import classes from "./components/ModalStuff.module.css";


function ModalStuff(props){
    var obiectModal=props.obiect;
    var isModalok=props.isModalVisible;
    

   return(
       <div>
           {(isModalok) && <Backdrop onCancel={props.closeModal} afisareModal={obiectModal}/>}
       {isModalok &&<Modal  afisareModal={obiectModal}/>}
       </div>

   );

}
export default ModalStuff;

// there should be an empty line between each method definition