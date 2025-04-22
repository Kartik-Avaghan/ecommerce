import React, { useState } from 'react'
import './Login1.css'
import { Link } from 'react-router-dom'

function Login1() {
const [login,setLogin]=useState({
  email:"",
  password:""
})

const handleChange=(e)=>{
  const{name,value}=e.target; 
    setLogin((prevData)=>({
      // return{
      ...prevData,[name]:value
    // }
    }))
}

const handleSubmit= async (e)=>{
  e.preventDefault();
  try{
    const response= await fetch(`http://localhost:8080/api/login`,{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(login)
    });
    const data= await response.json();

    if(response.ok){
      alert("Login Successfull");
    }
    else{
      alert(data.message);
    }
    }
    catch(error){
      console.log("error in fetching",error)
    }

  }




  return (
    <form onSubmit={handleSubmit}>
    <div className='login'>
        <div className='login_details'>
            <span className='heading'><h2>WelCome Back </h2></span>
            <p>Welcome back! Please Enter your detail's</p>
            {/* <input type="text"  name="name" placeholder='name' value={login.name} onChange={handleChange} /> */}
            <input type="email" name="email" placeholder='e-Mail' value={login.email} onChange={handleChange}/>
            <input type="password" name="password" placeholder='Password' value={login.password} onChange={handleChange} />
            <Link to={"/forgotpassword"} id='forgot_link'>Forgot Password</Link>
            <button type='submit'>Login</button>
            <button>Sign with google</button>
            <p>Don't have account? sign for free</p>
        </div>

    </div>
    </form>
  )
}

export default Login1