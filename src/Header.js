import React from 'react';
import ReactDOM from "react-dom";

import logo4 from './logo4.jpg'; // Use the correct image file name and path
import "./header.css"
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
// import SearchIcon from '@mui/icons-material/Search'; 

function Header()
{
     const[{basket},dispatch]=useStateValue();
    return(
        <div className='header'>
            <Link to="/">
         <img className='header__logo' src={logo4} alt="Logo" />
         </Link>
            <div className="header__search">
                <input className='header__searchInput' type='text'/>
            </div>

            <div className='header_nav'>

                    <div className='header_options'>
                        <span className='header_optionLineOne'>Hello Guest</span>
                        <span className='header_optionLineTwo'>Sign In</span>
                    </div>

                    <div className='header_options'>
                        <span className='header_optionLineOne'>Orders</span>
                        <span className='header_optionLineTwo'>& Return</span>
                    </div>
                   <Link to="/checkout">
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