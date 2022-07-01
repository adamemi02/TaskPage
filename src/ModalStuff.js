import React from "react";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";


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

