import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar'
import Header from './components/Header'
import images from './images copy/img-3.jpg'
import Describe from './components/Describe'
import Budget from './components/Budget'
import TaskPost from './components/TaskPost';
import Select from './components/Select'

function App() {

  const handleRegister = ()=>{
    fetch('http://localhost:3000/sign_up', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify({
          address: contact.address,
          amount: contact.amount
    })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.log("Error:" + err)
})
}



  return (
      <div className='background'style={{backgroundImage: `url(${images})`}}>
      <Navbar />
      <Header isSelected='ui form' />
      <Describe />
      
      <Budget />
      <TaskPost
        onClick= {handleRegister}
      />
      </div>
    
  )
}

export default App;
