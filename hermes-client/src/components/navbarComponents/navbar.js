import React from "react";


const navbarStyles = {
    "background" : "black" ,
    "textAlign": "center"



}
const navbarHeaderCss = {
    // "margin-left" : "400px" ,
    "color" : "#df8026" ,
    "textDecoration" : "line-through" ,
    "fontFamily":" 'Bangers' , cursive"


}
const Navbar = (props) => {
    console.log(props)
    return (
        <div>
            <div style={{"height":"20px","backgroundColor":"rgb(223, 128, 38)","textAlign":"right"}}></div>
        <nav className="navbar navbar-dark" style={navbarStyles}>
            <a className="navbar-brand" href="/">
                <img src="/images/Hermes Logo.png" width="70" height="70" alt="" />
            </a>
            <a className="navbar-brand" href="/" style={navbarHeaderCss}><h1>VITAL</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{"color" : "white"}}>
                <ul className="navbar-nav" >
                    <li className="nav-item active" style={{}}>
                        <a className="nav-link" href="/" style={{"color" : "white" , "marginLeft":"-50px"}}>Local Feed</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/business/"+props.userId} style={{"color" : "white", "marginLeft":"-50px"}}>Your Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/business/create" style={{"color" : "white", "marginLeft":"-50px"}}>New Business</a>
                    </li>
                    
                </ul>
                
            </div>
            
        </nav>
        </div>
    )
}
export default Navbar