import React from "react";
import axios from "axios";
class MainFeed extends React.Component {

    state = {
        data: []
    };
    
    componentDidMount() {
        this.getPosition()
    }

    getPosition(){
        const that = this
        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition((position)=>{
                const lattitude = position.coords.latitude
                const longitude = position.coords.longitude
                that.retrieveLocal(longitude, lattitude)
            })
        }
        else{
            alert("Please allow us to use location for main functionality of App")
        }
    }

    retrieveLocal = (long, latt) => {
        //Bandaid Fix to Scoping Issue when calling this.setState inside then axios call
        const that = this
        //Make a axios GET call to the api/business/:long/:latt
        axios.get("api/nearby/" + long + "/" + latt).then(function (res) {
            console.log("Searching for api/nearby")

            if (res) {

                console.log("Client Retrieved Data")
                // console.log(res)
                //and return the found data to the state.data array 
                that.setState({ data: res.data })

            }
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        const mediaCardCss = {
            "marginTop":"15px",
            "background": "white",
            "marginLeft": "-25px",
            "marginRight": "25px",
            "borderColor": "black",
            "borderStyle": "solid",
            "borderWidth": "1px",
            "padding": "25px",
            "backgroundImage": "linear-gradient(to top,gray 0% ,white 80%)",
            "boxShadow": "-2px -2px black",



        }
        //run a map function through the state.data aray return the wanted data to the page with the given HTML elements
        return (
            this.state.data.map((data) => {
                return (
                    <span ><div id={data._id} className="media" style={mediaCardCss}>
                        <img src="https://picsum.photos/64/64" className="mr-3" alt="..." />
                        {/* <i class='fas fa-city' style='font-size:36px'></i> */}

                        {/* <div>{data.CompanyWebsite}</div> */}
                        <div className="media-body" style={{ "fontSize": "12px" }}>
                           <a style={{"color":"black"}}href={"/business/"+data._id}><h5 className="mt-0">{data.BusinessName}</h5></a>  
                            <span style={{"fontFamily": "'Fira Sans', sans-serif"}}>{data.CompanyBio}</span>
                        </div>
                    </div>
                        <hr style={{"background":"black" , "width":"400px"}}></hr>
                    </span>)
            })
        );
    }
}






export default MainFeed