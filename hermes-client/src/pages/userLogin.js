import React from "react";
import UserLogin from "../components/authenticationComponents/userLogin"
import Navbar from "../components/navbarComponents/navbar"

class UserSignIn extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                <Navbar />
                <div className="container" style={{"padding":"100px"}} >
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{"width":"100%"}}> <UserLogin /></div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSignIn