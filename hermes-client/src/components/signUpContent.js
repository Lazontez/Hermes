import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class SignUpContent extends React.Component {


    state = {
        businessSubmitted: false,
        newBusinessId: "",
        inputBusinessName: "",
        inputState: "",
        //   inputZip:"",
        inputCity: "",
        inputAddress: "",
        inputNiche: "",
        inputCompanyBio: "",
        inputCompanyWebsite: "",
        selectedFile: null

    }
    submitPicture = (cb) => {
        const image = new FormData()
        if (this.state.selectedFile) {
            image.append('image', this.state.selectedFile, this.state.selectedFile.name)
        }


        axios.post("/api/upload", image, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${image._boundary}`
            },
        }).then((res) => {
            console.log("was success")
            return cb(res)
        }).catch(err => console.log(err))
    }
    imageChangedHandler = (event) => {
        event.preventDefault()
        console.log(event.target.files[0])
        this.setState({ selectedFile: event.target.files[0] }, console.log(this.state))

    };


    handleSubmit = (event) => {
        event.preventDefault()
        this.submitPicture((info)=>{
            console.log(info)
            axios.get("http://dev.virtualearth.net/REST/v1/Locations/US/" + this.state.inputState + "/" + this.state.inputCity + "/" + this.state.inputAddress + "?&key=AvP9Fdpniz7FJjc5uJW_0WnDvumO9QAX8p9Sjg2T1jTwzMmXin5LuAuSVAMJVY6L")
            .then((data) => {
                const generatedPoints = [data.data.resourceSets[0].resources[0].point.coordinates[1], data.data.resourceSets[0].resources[0].point.coordinates[0]]
                const business = {
                    BusinessName: this.state.inputBusinessName,
                    businessPicture : info.data.location ,
                    //[longitude , latitude]
                    location: { coordinates: generatedPoints },
                    Niche: that.state.inputNiche,
                    CompanyBio: that.state.inputCompanyBio,
                    CompanyWebsite: that.state.inputCompanyWebsite
                }
                console.log(generatedPoints)
                const gateKeeper = sessionStorage.getItem("jwt")
                axios.post("/api/business", business, { headers: { Authorization: `JWT ${gateKeeper}` } }).then(res => {
                    console.log(res.data)
                    that.setState({ newBusinessId: res.data._id, businessSubmitted: true })
                }).catch(err => console.log(err))
                console.log(business)
            }).catch((err) => { console.error(err) })
        })
        const that = this
        
    }
    handleInputChange = (event) => {
        const stateKey = event.target.getAttribute("id")
        this.setState({ [stateKey]: event.target.value })
    }
    render() {
        if (sessionStorage.getItem("jwt") !== null && this.state.businessSubmitted === false) {
            return (
                <div style={{ "backgroundColor": "white", "padding": "30px", "border": "1px solid #df8026 " }}>
                    <div style={{ "color": "grey", "borderBottom": "1px solid grey", "padding": "15px" }}>
                        <h2 >Sign-Up</h2>
                        <small>Please fill out the information about your business</small>
                    </div>
                    {/* method="post" action="/api/business" */}
                    <form onSubmit={this.handleSubmit} style={{ "padding": "20px" }}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputBusinessname" >Business Name</label>
                                <input type="text" className="form-control" onChange={this.handleInputChange} id="inputBusinessName" placeholder="Business Name" />
                                <small id="passwordHelpBlock" style={{ "color": "#" }} className="form-text text-muted">
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
                                <small id="passwordHelpBlock" style={{ "color": "#" }} className="form-text text-muted">
                                    What is your Business?
                        </small>
                            </div>
                            <div className="form-group" >
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" onChange={this.handleInputChange} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            {/* <h6 style={{"margin":"35px 0px 0px 35px"}}> or </h6>

                            <span className="btn btn-success" style={{"height":"37px" ,"margin":"33px 0px 0px 30px"}}>
                                Current Location
                            </span> */}
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" id="inputCity" onChange={this.handleInputChange} className="form-control" id="inputCity" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputState">State</label>
                                <select id="inputState" onChange={this.handleInputChange} className="form-control" >
                                    <option defaultValue>Choose...</option>
                                    <option>AL</option>
                                    <option>AK</option>
                                    <option>AZ</option>
                                    <option>AR</option>
                                    <option>CA</option>
                                    <option>CO</option>
                                    <option>CT</option>
                                    <option>DE</option>
                                    <option>FL</option>
                                    <option>GA</option>
                                    <option>HI</option>
                                    <option>ID</option>
                                    <option>IL</option>
                                    <option>IN</option>
                                    <option>IA</option>
                                    <option>KS</option>
                                    <option>KY</option>
                                    <option>LA</option>
                                    <option>ME</option>
                                    <option>MD</option>
                                    <option>MA</option>

                                    <option>MI</option>
                                    <option>MN</option>
                                    <option>MS</option>
                                    <option>MO</option>
                                    <option>MT</option>
                                    <option>NE</option>
                                    <option>NV</option>
                                    <option>NH</option>
                                    <option>NJ</option>
                                    <option>NM</option>
                                    <option>NY</option>
                                    <option>NC</option>
                                    <option>ND</option>
                                    <option>OH</option>
                                    <option>OK</option>
                                    <option>OR</option>
                                    <option>PA</option>
                                    <option>RI</option>
                                    <option>SC</option>
                                    <option>SD</option>
                                    <option>TN</option>
                                    <option>TX</option>
                                    <option>UT</option>
                                    <option>VT</option>
                                    <option>VA</option>
                                    <option>WA</option>
                                    <option>WV</option>
                                    <option>WI</option>
                                    <option>WY</option>
                                </select>
                            </div>


                        </div>
                        <div className="mb-3">
                            <label >Company Bio</label>
                            <textarea className="form-control" onChange={this.handleInputChange} height="100%" id="inputCompanyBio" placeholder=""></textarea>
                            <small id="passwordHelpBlock" style={{ "color": "#" }} className="form-text text-muted">
                                <div>Character Count: {this.state.inputCompanyBio.length}</div>
                                The company bio must be between 400 to 800 characters.
                        </small>
                        </div>
                        <div className="mb-3">
                            <label >Please Upload an image to represent your business.</label>
                            <input type="file" onChange={this.imageChangedHandler} />
                            <small id="passwordHelpBlock" style={{ "color": "#" }} className="form-text text-muted">
                                <div>Character Count: {this.state.inputCompanyBio.length}</div>
                                The company bio must be between 400 to 800 characters.
                        </small>
                        </div>
                        <button type="submit" style={{ "backgroundColor": "black", "color": "#df8026" }} data-toggle="modal" className="btn">Sign Up</button>


                    </form >
                </div>

            )
        } 
        else if (this.state.businessSubmitted === true && this.state.newBusinessId !== "") {
            return (<Redirect to={"/business/" + this.state.newBusinessId} />)
        }

    }


}
export default SignUpContent