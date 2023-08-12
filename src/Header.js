import React from 'react';
import ReactDOM from "react-dom";

import logo4 from './logo4.jpg'; // Use the correct image file name and path
import real from './real3.png';
import "./header.css"
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

// import SearchIcon from '@mui/icons-material/Search'; 

function Header()
{
    const authentication = getAuth();

     const[{basket,user},dispatch]=useStateValue();
     const handleAuthentication=()=>{
        if(user){
            signOut(authentication);
        }
     }
     console.log("this is jew user:"+user);
    return(
        <div className='header'>
            <Link to="/">
         <img className='header__logo' src={real} alt="Logo" />
         </Link>
            <div className="header__search">
                <input className='header__searchInput' type='text'/>
            </div>

            <div  className='header_nav'>
                    <Link className='custom' to={!user&&'/Login'}>
                    <div onClick={handleAuthentication} className='header_options'>
                        <span className='header_optionLineOne'>Hello, {user?user.email:'Guest'}</span>
                        <span className='header_optionLineTwo'>{user?'Sign Out':'Sign In'}</span>
                    </div>
                    </Link>

                    <div  className='header_options'>
                        <span className='header_optionLineOne'>Orders</span>
                        <span className='header_optionLineTwo'>& Return</span>
                    </div>
                    
                   <Link className='custom' to="/checkout">
                    <div className='header_optionBasket'>
                        {/* import icon */}
                        <img src='logo4'/>
                        <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                    </div>
                    </Link>

                </div>


          </div>
        
    )
}
export default Header;