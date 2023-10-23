import React from "react";
import Navbar from "../components/navbarComponents/navbar";
import MainFeed from "../components/MainFeedComponent"
import SearchComponent from "../components/SearchComponent";
const MainFeedBackgroundCSS = {
    
    "margin": "0px" ,
    "overflowY": "scroll",
    "height": "100%"
    
}
class Main extends React.Component{
    state = {
        data : []
    }

    render() {
        return (<div className="mainPage" style={MainFeedBackgroundCSS}>
            <Navbar />
            <div className="container container-fluid" style={{"marginRight":"0px"}}>
                <div className="mainPageFeed">
                    <div className="row" style={{"height":"500px"}}>
                        <div className="col-sm-6 col-md-8">
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
