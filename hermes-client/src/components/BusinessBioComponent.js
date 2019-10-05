import React from "react";
import axios from "axios";
import AddressComponent from "./addressComponent"

class CompanyBio extends React.Component {
    state = {
        companyData: []
    }

    getPosition() {
        const that = this
        if (navigator.geolocation) {
 
            navigator.geolocation.getCurrentPosition((position) => {
                const longitude = position.coords.longitude
                const latitude = position.coords.latitude
                //Sets the state 
                this.setState({loggedInLatt :latitude , loggedInLong : longitude} , console.log(this.state))
                this.getCompanyInfo()
            })
        }
        else {
            alert("Please allow us to use location for main functionality of App")
        }
    }

    componentDidMount() {
        this.getPosition()
    }

    getCompanyInfo = () => {
        let id = this.props.userId
        axios.get("/api/business/" + id).then(res => {
            console.log(res.data[0])
            // console.log(this)
            this.setState({ companyData: res.data[0] })
            //Business's Longitude
            const bLong = this.state.companyData.location.coordinates[0]
            //Business's Latitude
            const bLatt = this.state.companyData.location.coordinates[1]
            
            //Api call to bing maps api to get distance matrics data between two locations
            axios
            .get("/api/getDistanceBetween/"+this.state.loggedInLatt+"/"+this.state.loggedInLong+"/"+bLatt+"/"+bLong)
                .then(res =>{
                    // console.log(res.data)
                    //Set the state of miles away to the results from the api call
                    console.log(res.data)
                    this.setState({milesAway : res.data.travelDistance})
                })
                //Exception Handling
                .catch(err =>{console.log(err)})
                })

    }
    render() {

        return (
            <div>
                <div className="jumbotron" style={{ "height": "350px", "backgroundColor": "white", "borderBottom": "1px solid black", "padding": "50px", "backgroundImage": "linear-gradient(to top,gray 0% ,white 80%)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img style={{ "float": "left", "width": "100%" }} alt="Company View" src="https://picsum.photos/250/150"></img>
                            </div>
                            <div id="companyBio" className="col-md-8">
                                <h6>CompanyBio</h6>
                                <p>{this.state.companyData.CompanyBio}</p>

                            </div>
                        </div>
                        <div className="subInfo" >
                            <div className="row" style={{ "marginLeft": "10px" }}>
                                <div style={{ "color": "black" }}>Website: <a style={{ "color": "black" }} href={this.state.companyData.CompanyWebsite}>{this.state.companyData.CompanyWebsite}</a></div>
                            </div>
                            <div data={this.state.companyData} className="row" style={{ "marginLeft": "10px" }}>
                                <AddressComponent milesAway={this.state.milesAway} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>)

    }
}

export default CompanyBio