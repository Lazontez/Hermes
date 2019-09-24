import React from "react";


const navbarStyles = {
    "background" : "black" ,
    "textAlign": "center"



}
const navbarHeaderCss = {
    // "margin-left" : "400px" ,
    "color" : "#df8026" ,
    "textDecoration" : "line-through"
}
const NavBarLinksCss = {
    "text-align" : "left"
}
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark" style={navbarStyles}>
            <a className="navbar-brand" href="#">
                <img src="/images/Hermes Logo.png" width="70" height="70" alt="" />
            </a>
            <a className="navbar-brand" href="#" style={navbarHeaderCss}><h1>VITAL</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{"color" : "white"}}>
                <ul className="navbar-nav" >
                    <li className="nav-item active">
                        <a className="nav-link" href="#" style={{"color" : "white"}}>Local Feed<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{"color" : "white"}}>Your Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{"color" : "white"}}>Create a Post</a>
                    </li>
                    
                </ul>
                
            </div>
            
        </nav>
    )
}
export default Navbar