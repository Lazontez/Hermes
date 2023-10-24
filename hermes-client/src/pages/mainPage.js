import React from "react";
import Navbar from "../components/navbarComponents/navbar";
import MainFeed from "../components/MainFeedComponent"
import SearchComponent from "../components/SearchComponent";
const MainFeedBackgroundCSS = {
    
    "margin": "0px" ,
    
}
class Main extends React.Component{
    state = {
        data : []
    }

    render() {
        return (<div className="mainPage" style={MainFeedBackgroundCSS}>
            <Navbar />
            <div className="container-fluid" style={{"marginRight":"0px"}}>
                <div className="mainPageFeed">
                    <div className="row" style={{}}>
                        <div className="col-sm-6 col-md-8" style={{"padding-left" : "15%"}}>
                            <MainFeed />
                        </div>
                        <div  style={{"marginLeft":"0px" , "backgroundColor":"black"}} className=" col-sm-6 col-md-4">
                            <SearchComponent />
                    </div>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}

export default Main
