
import React,{useState} from 'react'
import logo3 from './logo3.jpg'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { auth } from './firebase'
import { app } from './firebase';
import { useStateValue } from "./StateProvider";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


function Login() {
  const[{basket,user},dispatch]=useStateValue();
  console.log("i am just checking :"+user);
    const navigate=useNavigate();
    const authentication = getAuth();
    const[Email,setEmail]=useState('');
    const[Password,setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(authentication,Email,Password)
        .then((response) => {
            if(response){
              navigate('/');
            }
        }).catch(error=>alert(error.message))
    }
     const register=e=>{
        e.preventDefault();
        createUserWithEmailAndPassword(authentication, Email, Password)
        .then((response) => {
          if(response){
            navigate('/');
          }
      }).catch(error=>alert(error.message))
    }
  return (
    <div className='login'>
       <Link to='/'>
        <img className='login_logo' src={logo3}/>
       </Link>
       <div className='login_container'>
          <h1>Sign-in</h1>
      
       <form>
        <h5>E-mail</h5>
        <input type='text' value={Email} onChange={e=>setEmail(e.target.value)}/>
         <h5>Password</h5>
         <input type='password' value={Password} onChange={e=>setPassword(e.target.value)}/> <br/>
         <button type='submit' onClick={signIn} className='login_signbutton'>Sign In</button>
         </form>
         
         <button type='submit' onClick={register} className='login_registerbutton'>Create your EathMall Account</button>
      
       </div>
    </div>
  )
}

export default Login
