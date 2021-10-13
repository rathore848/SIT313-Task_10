import React from 'react'
import './Header.css'


function Header(props) {

    

        return (
            <div className='header'>
               <h1 style= {{color: 'white', fontSize: '30px', textAlign: 'center', paddingTop: '10px'}}>
                New Task
               </h1>
    
               
               
            
                    <div class="grouped fields" style={{margin: '20px'}}>
                        <label style={{color:'wheat', margin:'21px', fontSize:'20px'}}>Select Task Type:</label>
                        <br></br>
                       </div> 
                       <div className="radio1" style={{margin: '10px'}}>
                            <input id="sub" type="radio" name="option1" ></input>
                            <label  className="inperson" style={{color:'white', fontSize:'15px'}}>In person</label>
                            </div>
                        <br></br>
                        
                        <div className="radio2" style={{margin: '10px'}}>
                            <input id="onl" type="radio" name="option2"></input>
                            <label className="online" style={{color:'white', fontSize:'15px'}}>Online</label>
                            
                            </div>
                        
                        
            </div>
        )

        }    

   

export default Header
