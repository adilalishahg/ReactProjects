import React, { useState } from 'react'

const Validate = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirm,setConfirm] = useState("")

    const [errorUsername,setErrorUsername] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [errorConfirm,setErrorConfirm] = useState("")


    const [userColor,setUserColor] = useState("")
    const [borderColor,setBorderColor] = useState("")
    const [errorUserName,setErrorUserName] = useState("")
    const [emailColor,setEmailColor] = useState("")
    const [passwordColor,setPasswordColor] = useState("")
    const [confirmPasswordColor,setConfirmPasswordColor] = useState("")

  const validate = (e)=>{
    e.preventDefault()
    if(username.length < 5){
        setErrorUserName("Username must be at least 5 characters")
        setUserColor("red")
    }else{
      setErrorUserName("")
      setUserColor("green")
    }
  }
  return (
    <>
        <div className='card'>
            <div className='card-image'></div>
       
          <form >
              <input
              type="text"
              placeholder='Name'
              style={{ borderColor:userColor }} 
              value={username}
              onChange={(e)=>setUsername(e.target.value)}

              />
              <p className='error'>{errorUserName}</p>
              <input
              type="text"
              placeholder='Email'
              style={{ borderColor,emailColor }} 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}

              />
              <p className='error'>{errorEmail}</p>
              <input
              type="text"
              placeholder='Password'
              style={{ borderColor,passwordColor }} 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

              />
              <p className='error'>{errorPassword}</p>
              <input
              type="text"
              placeholder='Confirm Password'
              style={{ borderColor,confirmPasswordColor }} 
              value={confirm}
              onChange={(e)=>setConfirm(e.target.value)}

              />
              <p className='error'>{errorConfirm}</p>
              <button className='submit-btn' onClick={validate}>Submit</button>
          </form>
        </div>
    </>
  )
}

export default Validate