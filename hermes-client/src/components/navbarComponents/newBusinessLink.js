import React from "react";
import {Link} from "react-router-dom"
function NewBusinessLink(props){
    console.log(props.signedStatus)
    const decider = (props.signedStatus === true)?"/business/signup" : "/authentication/login"


    return(<Link  style={{ "color": "white", "marginLeft": "-50px" }} to={decider} >New Business</Link>)

}

export default NewBusinessLink