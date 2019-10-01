import React from "react";

class SignUpContent extends React.Component {

    constructor(props) {
        super(props)
    }

    

    handleSubmit = (event)=>{
        console.log("submit button clicked")
        console.log(document.getElementById("businessInput"))
    }

    render() {
        return (
            <div style={{"backgroundColor":"white" , "padding":"30px" , "border":"1px solid #df8026 "}}>
                <div style={{"color":"grey" ,"borderBottom":"1px solid grey" , "padding":"15px"}}>
                <h2 >Sign-Up</h2>
                <small>Please fill out the information about your business</small>

                </div>

                <form style={{"padding":"20px"}}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4" >Business Name</label>
                            <input type="text" className="form-control"  id="businessnameInput" placeholder="Business Name" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                        <div className="form-group" >
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress"  placeholder="1234 Main St" />

                            
                        </div>
                        <h6 style={{"margin":"35px 0px 0px 35px"}}> or </h6>

                            <div className="btn btn-success" style={{"height":"37px" ,"margin":"33px 0px 0px 30px"}}>
                                Current Location
                            </div>

                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity"  />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState"  className="form-control" >
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>

                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" placeholder="35473"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label >Company Bio</label>
                        <textarea className="form-control" id="" placeholder=""></textarea>
                        <small id="passwordHelpBlock" style={{"color":"#"}}className="form-text text-muted">
                            The company bio must be between 300 to 500 characters.
                        </small>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} style={{"backgroundColor":"black","color":"#df8026"}} className="btn">Sign Up</button>
                </form >
            </div>
        )
    }


}
export default SignUpContent