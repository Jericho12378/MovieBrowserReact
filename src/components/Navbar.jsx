import React from "react";
import logo from "./images/logoMovie.png"
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <figure className="image__logo--wrapper" onClick={() => navigate("/")}>
                    <img src={logo} alt="" className="logo" />
                </figure>
                <ul className="nav__link--lists">
                    <li onClick={() =>{
                        navigate("movies")
                        localStorage.removeItem("Title")
                    }}>Movies</li>
                    <li onClick={() => navigate("trending")}>Trending</li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;