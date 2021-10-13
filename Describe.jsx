import React from 'react'
import './Describe.css'
import {Input} from 'semantic-ui-react'

function Describe() {
    return (
        <div>
             <div class="grouped fields" style={{margin: '20px'}}>
                <label style={{color:'wheat', margin:'21px', fontSize:'20px'}}>Describe Your task to Experts</label>
            </div>
            <div className='description1'>
                <label style={{color:'white', margin:'28px', fontSize:'17px', padding: '22px' }}>Task Title: 
                <Input id="title" placeholder='Enter task title' style={{margin:'17px' ,padding: '10px'}}/>
                </label>
            </div>
            <div className='description2'>
            <label style={{color:'white', margin:'28px', fontSize:'17px', padding: '22px' }}>Description: 
                <Input id="description" placeholder='Enter task description' style={{padding: '10px', width:'50%', height:'180px'}}/>
                </label>

            </div>
        </div>
    )
}

export default Describe
