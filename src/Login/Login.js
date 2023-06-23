import React, { useState } from 'react';

import './Login.css';
export default function Forms() {
  
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  async function login(){
    console.warn(email,password)
    // fetch("https://localhost:8000/api/1/login/auth")
    // .then(response => response.json())
    // .then(data => console.log(data));
    let item={email,password};
   
    let result=await fetch("https://jsonplaceholder.typicode.com/users",{
        method:'POST',
        headers:{
            "content-Type":"application/json",
            "Accept":'application/json'
        },
        body:JSON.stringify(item)
    })
    result =await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    // history.push("/add")
    
   }
  return (
    <div className='main'>
     <div className='sub-main'>
    <div>
        <div className='imgs'>
            <div className='container-image'>
                <img src="https://tse3.mm.bing.net/th?id=OIP.WRwcG_nGZtGmPpatDlcWPQHaE8&pid=Api&P=0&h=180"alt="profile"/>

            </div>
        </div>
        <h1>User Login</h1>
        <div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.Qi6uYFuJsY-wk5y6J3hWTgHaHa&pid=Api&P=0&h=80" alt="email" className='email'/>
            <input type="text" placeholder='username'className='name'autoComplete='off'value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='second-input'>
            <img src="https://tse1.mm.bing.net/th?id=OIP.KvxsjTAaqb00FXiE-evumgHaHa&pid=Api&P=0&h=80" alt="password" className='password'/>
            <input type="password" placeholder='userpassword'className='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <br/>
        <div className='login-button'>
        <button  onClick={login} className="submit">Login</button>
        </div>
       
    </div>
    
    </div>   
    </div>
  )
}
