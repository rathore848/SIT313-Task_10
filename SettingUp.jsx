import React from 'react'
import {Input} from 'semantic-ui-react'




function SettingUp() {

    
    
    return (
        <div>
            
            
            <div class="grouped fields" style={{margin: '20px'}}>
                <label style={{color:'wheat', margin:'21px', fontSize:'20px'}}>Setting up your Task</label>
            </div>
             
            
            <div >
                <label style={{color:'white', fontSize:'17px', padding: '22px' }}>Suburb 
                <Input id="address" placeholder='Enter a suburb' style={{margin:'17px' ,padding: '10px', width: '50%'}}/>
                </label>
            </div>
            <div >
            <label style={{color:'white', margin:'34px', fontSize:'17px', padding: '22px' }}>Date 
                <Input id="date" placeholder='Enter a date' style={{padding: '10px', width:'50%'}}/>
                </label>

            </div> 
            
                
        </div>
    )
}

export default SettingUp
