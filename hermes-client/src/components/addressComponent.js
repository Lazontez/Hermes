import React from "react";
import axios from "axios";
import { timingSafeEqual } from "crypto";

//*** This is the page that'll display the distance between to points given through props and function to get the location of the client */
class milesAwayComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            milesAway : 0 ,
            loggedInLong : 0 ,
            loggedInLatt : 0
        }
    }
    
 
    //Function to get the location of the client and update the state of the loggedInLatt and loggedInLong to the positions recieved back
    getPosition() {
        const that = this
        if (navigator.geolocation) {
 
            navigator.geolocation.getCurrentPosition((position) => {
                const longitude = position.coords.longitude
                const latitude = position.coords.latitude
                //Sets the state 
                this.setState({loggedInLatt :latitude , loggedInLong : longitude} , console.log(this.state))
            })
        }
        else {
            alert("Please allow us to use location for main functionality of App")
        }
    }
   //Everytime the component is updated
//    componentDidUpdate(){
//        this.getPosition()
//        //Business's Longitude
//        const bLong = this.props.businessLocation.coordinates[0]
//        //Business's Latitude
//        const bLatt = this.props.businessLocation.coordinates[1]
    
//        //Api call to bing maps api to get distance matrics data between two locations
//        axios
//        .get("https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins="+this.state.loggedInLatt+","+this.state.loggedInLong+"&destinations="+bLatt+","+bLong+"&travelMode=driving&distanceUnit=mi"
//        +"&key=AvP9Fdpniz7FJjc5uJW_0WnDvumO9QAX8p9Sjg2T1jTwzMmXin5LuAuSVAMJVY6L")
//         .then(res =>{
//             // console.log(res.data)
//             //Set the state of miles away to the results from the api call
//             this.setState({milesAway : res.data.resourceSets[0].resources[0].results[0].travelDistance})
//         })
//         //Exception Handling
//          .catch(err =>{console.log(err)})
//        console.log(this.props.businessLocation.coordinates)
//    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
        <div style={{"color" : "rgb(245, 119, 0)"}}>{Math.ceil(this.props.milesAway)} miles away</div>)
    }

}

export default milesAwayComponent