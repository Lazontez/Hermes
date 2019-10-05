import React from "react";

class SignUpContent extends React.Component {

    constructor(props) {
        super(props)
    }
    
    state={
          inputBusinessName: "",
          inputState="",
          inputZip="",
          inputAddress="",
          inputNiche: "",
          inputCompanyBio: "",
          inputCompanyWebsite: ""
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        console.log("submit button clicked")
        console.log(event.target)
    }
    handleInputChange=(event)=>{
        const stateKey = event.target.getAttribute("id")
        this.setState({[stateKey] : event.target.value} , console.log(this.state))
    }
    render() {
        return (
            <div style={{"backgroundColor":"white" , "padding":"30px" , "border":"1px solid #df8026 "}}>
                <div style={{"color":"grey" ,"borderBottom":"1px solid grey" , "padding":"15px"}}>
                <h2 >Sign-Up</h2>
                <small>Please fill out the information about your business</small>

                </div>
                {/* method="post" action="/api/business" */}
                <form onSubmit={this.handleSubmit}  style={{"padding":"20px"}}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputBusinessname" >Business Name</label>
                            <input type="text" className="form-control" onChange={this.handleInputChange} id="inputBusinessName" placeholder="Business Name" />
                            <small id="passwordHelpBlock" style={{"color":"#"}}className="form-text text-muted">
                                Must have a business name
                            </small>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCompanyWebsite">Company Website</label>
                            <input type="text" onChange={this.handleInputChange} className="form-control" id="inputCompanyWebsite" placeholder="www.company.com" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputNiche">Niche</label>
                            <input type="text" onChange={this.handleInputChange} className="form-control" id="inputNiche" placeholder="ex. Antique Store" />
                            <small id="passwordHelpBlock" style={{"color":"#"}}className="form-text text-muted">
                            In 3 words describe your niche
                        </small>
                        </div>
                        <div className="form-group" >
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" onChange={this.handleInputChange} className="form-control" id="inputAddress"  placeholder="1234 Main St" />         
                        </div>
                        {/* <h6 style={{"margin":"35px 0px 0px 35px"}}> or </h6>

                            <span className="btn btn-success" style={{"height":"37px" ,"margin":"33px 0px 0px 30px"}}>
                                Current Location
                            </span> */}
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity"  />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState"  className="form-control" >
                                <option defaultValue>Choose...</option>
                                <option>Alabama</option>
                                <option>Alaska</option>
                                <option>Arizona</option>
                                <option>Arkansas</option>
                                <option>California</option>
                                <option>Colorado</option>
                                <option>Connecticut</option>
                                <option>Delaware</option>
                                <option>Florida</option>
                                <option>Georgia</option>
                                <option>Hawaii</option>
                                <option>Idaho</option>
                                <option>Illinois</option>
                                <option>Indiana</option>
                                <option>Iowa</option>
                                <option>Kansas</option>
                                <option>Kentucky</option>
                                <option>Louisiana</option>
                                <option>Maine</option>
                                <option>Maryland</option>
                                <option>Michigan</option>
                                <option>Minnesota</option>
                                <option>Mississippi</option>
                                <option>Missouri</option>
                                <option>Montana</option>
                                <option>Nebraska</option>
                                <option>Nevada</option>
                                <option>New Hampshire</option>
                                <option>New Jersey</option>
                                <option>New Mexico</option>
                                <option>New York</option>
                                <option>North Carolina</option>
                                <option>North Dakota</option>
                                <option>Ohio</option>
                                <option>Oklahoma</option>
                                <option>Oregon</option>
                                <option>Pennsylvania</option>
                                <option>Rhode Island</option>
                                <option>South Carolina</option>
                                <option>South Dakota</option>
                                <option>Tennessee</option>
                                <option>Texas</option>
                                <option>Utah</option>
                                <option>Vermont</option>
                                <option>Virginia</option>
                                <option>Washington</option>
                                <option>West Virginia</option>
                                <option>Wisconsin</option>
                                <option>Wyoming</option>
                            </select>
                        </div>

                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" placeholder="35473"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label >Company Bio</label>
                        <textarea className="form-control" onChange={this.handleInputChange} id="inputCompanyBio" placeholder=""></textarea>
                        <small id="passwordHelpBlock" style={{"color":"#"}}className="form-text text-muted">
                            The company bio must be between 300 to 500 characters.
                        </small>
                    </div>
                    <button type="submit" style={{"backgroundColor":"black","color":"#df8026"}} className="btn">Sign Up</button>
                </form >
            </div>
        )
    }


}
export default SignUpContent