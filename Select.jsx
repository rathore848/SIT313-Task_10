import React from 'react'

import SettingUp from './SettingUp'
import SettingUp2 from './SettingUp2'

const isSelect = true;


function Select() {
    return (
        <div>{
            isSelect ?
            <SettingUp />
            :
            <SettingUp2/>
        }
            
            
        </div>
    )
}

export default Select
