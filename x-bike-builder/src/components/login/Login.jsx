import React, { useState, useEffect } from "react"
import axios from "axios"
import './login.css'
import { BASE_URL } from '../../global'


const Login = (props) => {
  const [userData, setUserData] = useState(null)
  const [username, setUsername] = useState('')


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}users`)
        setUserData(response.data)
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching user data: ", error)
      }
    }

    fetchUserData()
  }, [])


  const loginUser = () => {
    console.log('Login Started..')
    
    for (let i = 0; i < userData.length; i++) {
      if (username == userData[i].user_name) {
          console.log('user logged in: ', userData[i])
         
          props.setUserData(userData[i])
          console.log('user State: ', props.userData)
          props.onClose()
          break;
      } else {
          console.log('user not found')
      }
    }
    
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const addUser = async ()  => {
    let existingUser = null
    for (let i = 0; i < userData.length; i++) {
      if (username == userData[i].user_name) {
          console.log('user logged in: ', userData[i])
          existingUser = userData[i]                 
          break;
      } 
    }
    if (existingUser == null) {
      const body = {
        user_name: username,
        points: 0
      }
      const response = await axios.post(`${BASE_URL}users/`, body)
      console.log('new user: ',response.data.user)

      props.setUserData(response.data.user)
      props.onClose()
      return response.data
  }  
}

  const createUser =  async () => {
    console.log('Create Started..')

        const response = await addUser().then(() => {
          console.log('posted')
        })
    }


  return (
    <div className="centered-container">
      <div className="content">
        {}
        {userData && (
          <div className="username-header">
            <div>
              Username {userData.username}
            </div>
            {}
          </div>
        )}
        <div className="input-container">
          <input 
            type="text" 
            id="username" 
            onChange={handleUsernameChange} 
            value={username} 
            placeholder="" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="" />
        </div>

        <button className="login-btn" onClick={props.onClose}>Close</button>
        <button className="login-btn" onClick={() => loginUser()}>Login</button>
        <button className="login-btn" onClick={() => createUser()}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login