import React from 'react'
import './Updates.css'
import { UpdatesData } from '../../Data/Data'
const Updates = () => {
  return (
    <div className='updates'>

        {
            UpdatesData.map( (update)=> {
                return(

                    <div className="update">
                    <img src={update.img} alt=''    style={{paddingTop :     '0.5rem'}}/>
                    <div className="notice">
                        <span>
                            
                            <h5>
                            { update.name}

                            </h5>
                            
                            </span>
                        <span> {update.noti}</span>
                     
                     <div>
                           <span><h6> 
                            {update.time}
                            </h6>
                            </span>
                        
                        </div>
                    </div>
                     
                    

                   </div>
                       )
            } )
        }
      
 
       
    </div>
  )
}

export default Updates
  