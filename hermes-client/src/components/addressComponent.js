import React from "react";
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
    componentDidMount() {
        // console.log(this.props)
    }
    render() {
        return (
        <div style={{"color" : "rgb(245, 119, 0)"}}>{Math.ceil(this.props.milesAway)} miles away</div>)
    }

}

export default milesAwayComponent