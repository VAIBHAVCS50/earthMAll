import React from "react";
import logo2 from './logo1.jpg'; // Use the correct image file name and path
import "./Home.css"
import Product from "./Product";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <Link to="/">
            <div className="home_container">
            <img className="home_image" src={logo2}/>
            </div>
            </Link>

            <div className="home_row">
                <Product title="The lean Start up" price={1202.99} image={"https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"} rating={5}/>
                <Product />
            </div>
            <div className="home_row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home_row">
                <Product />
            </div>
        </div>
    );
}
export default Home;