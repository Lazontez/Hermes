import React from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";


class userSignUp extends React.Component {
    
    state = {
        loggedIn: false,
        usernameInput: "",
        passwordInput: ""
    }
    handleChangedPwInput = (event) => {
        console.log(event.target.value)
        this.setState({ passwordInput: event.target.value }, console.log(this.state))
    }
    handleChangedUserNameInput = (event) => {
        console.log(event.target.value)
        this.setState({ usernameInput: event.target.value }, console.log(this.state))
    }
    createNewUser = (event) => {
        event.preventDefault()
        const newUser = {
            username: this.state.usernameInput,
            password: this.state.passwordInput
        }

        Axios
            .post("/loginUser", newUser)
            .then((res) => {
                sessionStorage.setItem("rights" , true)
                this.setState({ loggedIn: true })
                sessionStorage.setItem("jwt", res.data.token)
            })
            .catch(err =>{
                alert("something went wrong refresh and try again") 
                console.log(err)
            })
    }
    render() {
        if (this.state.loggedIn !== true) {
            return (
                <div>
                    <div style={{ "paddingBottom": "2px" }}>
                        <h2 >Login</h2>
                        <small>Welcome Back</small>
                    </div>

                    <form style={{ "alignContent": "center", }}>
                        <div className="form-row" style={{ "padding": "30px", "backgroundColor": "#df8026", "border": "2px solid black " }} width="100%"
                        >
                            <div className="form-group col-md-12">
                                <label htmlFor="inputEmail4">Username</label>
                                <input type="text" className="form-control" id="businessnameInput" name="loginName" input={this.state.usernameInput} onChange={this.handleChangedUserNameInput} placeholder="Account Username" />


                                <label htmlFor="inputPassword4">Password</label>
                                <input type="password" name="loginPw" className="form-control" input={this.state.passwordInput} onChange={this.handleChangedPwInput} id="inputPassword4" placeholder="Password" />
                                <small>Are you new here? <a href="/authentication/signup">Sign-Up</a></small>
                                <div>
                                <button style={{ "marginTop": "5px" }} className="btn btn-dark" id="loginBtn" onClick={this.createNewUser}>Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }else{
            return <Redirect to="/" />
        }
    }


}

export default userSignUp