import React from "react";
import ModalMui from "./ModalMui";
import BackdropMui from "./BackdropMui";


function ModalStuffMui(props){
    var obiectModal=props.obiect;
    var isModalok=props.isModalVisible;
    

   return(
       <div>
           {(isModalok) && <BackdropMui onCancel={props.closeModal} afisareModal={obiectModal}/>}
       {isModalok &&<ModalMui  afisareModal={obiectModal}/>}
       </div>

   );

}
export default ModalStuffMui;