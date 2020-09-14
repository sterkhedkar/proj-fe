import React from 'react';
import './InterventionsDetail.css';
import { Button } from 'semantic-ui-react'
import notification from '../../../../../assets/imgs/notification.svg';
import pin from '../../../../../assets/imgs/pin.png';
import add from '../../../../../assets/imgs/add.png';

const InterventionsDetail = props => {  
    let drawerClasses = 'detailShow' ;
    if(props.show){  
        drawerClasses = 'detailShow open' ;
    }
    return  (
        <div className={drawerClasses}>
            <div className="notification">
                
            </div>
        </div>
        
    );
}

export default InterventionsDetail

// <div className="divPadding">
//                     <img src={notification} alt="intervention" width="16"/>
//                     <p >3 interventions</p>
//                 </div>
//                 <div>
//                     <Button circular size='mini' >
//                         <img src={pin} alt="pin"/>
//                     </Button>
//                     <Button circular size='mini' >
//                         <img src={add} alt="add"/>
//                     </Button>
//                 </div>