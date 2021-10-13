import React from 'react'
import {Button} from 'semantic-ui-react'


function TaskPost(props) {
    return (
        <div className='button' style={{textAlign: 'center', color:'white'}}>
            <Button onClick={props.onClick} color='grey'>Post Task </Button>
        </div>
    )
}

export default TaskPost
