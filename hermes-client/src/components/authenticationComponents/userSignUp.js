import React from "react";
import Axios from "axios";
import {Link} from "react-router-dom";


class userSignUp extends React.Component {
    constructor(props) {
        super(props)

    }
    state = {
        usernameInput : "" ,
        passwordInput : ""
    }
    handleChangedPwInput=(event)=>{
        console.log(event.target.value)
        this.setState({passwordInput : event.target.value} , console.log(this.state))
    }
    handleChangedUserNameInput=(event)=>{
        console.log(event.target.value)
        this.setState({usernameInput : event.target.value} , console.log(this.state))
    }
    createNewUser=(event)=>{
        const newUser =  {
            username : this.state.usernameInput ,
            password : this.state.passwordInput
        }

        Axios
        .post("/registerUser" , newUser)
        .then((data)=>{
            
            console.log(data)
        })
        .catch(err=>console.log(err))
    }
    render() {
        return (
            <div>
                <div style={{ "paddingBottom": "2px" }}>
                    <h2 >Account Sign-Up</h2>
                    <small>Please fill out the information to create an account</small>
                </div>

                <form style={{ "alignContent": "center", }}>
                    <div className="form-row" style={{ "padding": "30px", "backgroundColor": "#df8026", "border": "2px solid black " }} width="100%"
                    >
                        <div className="form-group col-md-12">
                            <label htmlFor="inputEmail4" >Username</label>
                            <input type="text" className="form-control" id="businessnameInput" input={this.state.usernameInput} onChange={this.handleChangedUserNameInput} placeholder="Account Username" />


                            <label htmlFor="inputPassword4"  >Password</label>
                            <input type="password" className="form-control" input={this.state.passwordInput} onChange={this.handleChangedPwInput} id="inputPassword4" placeholder="Password" />
                             <button href="/authentication/login" style={{"marginTop":"5px"}} className="btn btn-dark" onClick={this.createNewUser}>Submit</button> 
                             {/* "/authentication/login" */}
                        </div>
                    </div>
                </form>
            </div>
        )
    }


}

export default userSignUp