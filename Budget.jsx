import React from 'react'
import {Input} from 'semantic-ui-react'

function Budget() {
    return (
        <div>
            <div class="grouped fields" style={{margin: '20px'}}>
                <label style={{color:'wheat', margin:'21px', fontSize:'20px'}}>Suggest how much</label>
            </div>

            <div class="grouped fields" style={{margin: '20px'}}>
                    <label style={{color:'white', margin:'0 10px 15px 16px', fontSize:'17px', padding: '22px'}}>Select Task Type:</label>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input id="tot_rate" type="radio" name="example2" checked="checked"></input>
                            <label style={{color:'white', fontSize:'15px'}}>Total</label>    
                        </div>
                    </div>
                    <div class="ui radio checkbox">
                        <input id="hr_rate" type="radio" name="example2"></input>
                        <label style={{color:'white', fontSize:'15px'}}>Hourly rate</label>
                    </div>
                    <div>
                    <Input id="amount" placeholder='$' style={{margin:'17px' ,padding: '10px'}}/>
                    </div>
            </div>
        </div>
    )
}

export default Budget
