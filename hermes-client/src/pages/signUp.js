import React from "react";
import Navbar from "../components/navbarComponents/navbar"
import SignUpContent from "../components/signUpContent"

class SignUp extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log("sign up page mounted")
    }
    render() {
        return (
            <div >
                <Navbar />
                <div className="container" style={{"padding":"20px"}}>
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                        <SignUpContent />
                        </div>
                        <div className="col-md-3">
                        </div>

                        
                    </div>

                </div>
            </div>
        )
    }
}


export default SignUp