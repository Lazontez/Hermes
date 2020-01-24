import React from "react";
import axios from "axios";
import NewBusiness from "./newBusinessLink"
import NewBusinessLink from "./newBusinessLink";


const navbarStyles = {
    "background": "black",
    "textAlign": "center"

}
const navbarHeaderCss = {
    "color": "#df8026",
    "textDecoration": "line-through",
    "fontFamily": " 'Bangers' , cursive"
}

class Navbar extends React.Component {
     state={
        usersBusiness : "N/A" ,
        signedIn : false
     }

  
    UNSAFE_componentWillMount = ()=>{
        let gateKeeper = sessionStorage.getItem("jwt")
        if(gateKeeper != undefined || gateKeeper != null){
            console.log("hello")
            this.setState({signedIn : true})
        }

    }
    componentDidMount = () => {
        let gateKeeper = sessionStorage.getItem("jwt")
        axios.get("/api/mybusiness", { headers: { Authorization: `JWT ${gateKeeper}` } }).then((data) => {
            if(data.data.usersBusiness !== null && data.data.usersBusiness !== undefined){
            this.setState({usersBusiness : data.data.usersBusiness})
            }
        }).catch((err) => { console.log(err) })

    }
    

    render() {
        return (
            <div>
                <div style={{ "height": "20px", "backgroundColor": "rgb(223, 128, 38)", "textAlign": "right" }}></div>
                <nav className="navbar navbar-dark" style={navbarStyles}>
                    <a className="navbar-brand" href="/">
                        <img src="" width="70" height="70" alt="" />
                    </a>
                    <a className="navbar-brand" href="/" style={navbarHeaderCss}><h1>VITAL</h1></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" style={{ "color": "white" }}>
                        <ul className="navbar-nav" >
                            <li className="nav-item active" style={{}}>
                                <a className="nav-link" href="/" style={{ "color": "white", "marginLeft": "-50px" }}>Local Feed</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"/business/"+this.state.usersBusiness} style={{ "color": "white", "marginLeft": "-50px" }}>Your Page</a>
                            </li>
                            <li className="nav-item">
                               <span className="nav-link"><a href="/authentication/login" style={{ "color": "white", "marginLeft": "-50px" }}>Login</a> / <a name="signupBusinessAccount" id="signup" href="/authentication/signup" style={{ "color": "white"  }}>Sign-Up</a></span>
                            </li>
                            {/* <li className="nav-item">
                                
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href={(sessionStorage.getItem("rights") === "true")?"/business/signup" : "/authentication/login"} style={{ "color": "white", "marginLeft": "-50px" }}>New Business</a>

                            </li>

                        </ul>

                    </div>

                </nav>
            </div>
        )
    }
}
export default Navbar