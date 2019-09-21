import React from "react";
import Navbar from "../components/navbarComponents/navbar";
import MainFeed from "../components/MainFeedComponent"
const MainFeedBackgroundCSS = {
    "background-color": "#9e9e9e",
    "margin": "0px"
}
const Main = () => {
    return (
        <div className="mainPage" style={MainFeedBackgroundCSS}>
            <Navbar />
            <div className="container" >
                <div className="mainPageFeed">
                    <div className="row">
                        <div className="col-sm-6 col-md-8">
                            <MainFeed />
                        </div>
                        <div className=" col-sm-6 col-md-4">
                            Search Component
                    </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Main