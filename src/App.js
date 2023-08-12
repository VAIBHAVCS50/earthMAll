import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
    const authentication = getAuth();
    onAuthStateChanged(authentication,authUser=>{
      console.log('The User is>>>',authUser);
  
      if(authUser)
      {
        // the user just logged in 
        dispatch({
          type: 'SET_USER',
          user:  authUser
          
        })
      }
      else {
        //the user is not loged in
        dispatch({
          type:'SET_USER',
            user: null
        })
         
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
     <Routes>
        <Route path="/" element={<React.Fragment><Header /><Home/></React.Fragment>} />
        <Route path='/checkout' element={<React.Fragment><Header /><Checkout/></React.Fragment>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes> 

    </div>
    </Router>
  );
}

export default App;