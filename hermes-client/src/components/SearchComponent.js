import React from "react";
import axios from "axios";
import {Link} from "react-router-dom"
 

class SearchComponent extends React.Component {


    state = {
        searchedData: [],
        searchRequest: ""
    };


    handleSearchRequest = (event) => {
        const inputValue = event.target.value
        this.setState({ searchRequest: inputValue })

        // console.log(searchRequest)
    }
    callForBusiness = () => {
        const requestedBusiness = this.state.searchRequest
        axios.get("/api/search/" + requestedBusiness).then((res) => {
            console.log("/api/search/" + requestedBusiness)
            this.setState({ searchedData: res.data }, () => { console.log("-----------"); console.log(this.state.searchedData) })
        }).catch(err => { console.log(err) })
    }

    render() {
        const searchAreaCss = {
            "backgroundColor": "#df8026",
            "paddingTop": "20px",
            "paddingBottom": "20px",
            "paddingLeft": "50px",
            "paddingRight": "50px"

        }
        const resultsHeader = {
            "color": "#df8026",
            "textDecoration": "line-through",
            "textAlign": "center",
            "fontFamily": "'Anton', sans-serif"

        }

        return (
            <span>
                <form>
                    <div className="form-group row">
                        <div className="input-group mb-12" style={searchAreaCss}>                                                                                                
                            <div className="input-group-prepend" >
                                <span className="input-group-text" style={{ "borderBottomLeftRadius": "50px", "borderTopLeftRadius": "50px", "backgroundColor": "#df8026" }} id="basic-addon1"><i className="fas fa-search" ></i></span>
                            </div>
                            <input type="text" className="form-control" name="searchBusiness" placeholder="Search For A Business" search={this.state.searchRequest} onChange={this.handleSearchRequest} style={{ "borderTopRightRadius": "50px", "borderBottomRightRadius": "50px" }} aria-label="Business Name" aria-describedby="basic-addon1" />
                        </div>

                    </div>
                </form>

                <div className="resultsHeader">
                    <h5 style={resultsHeader}>Results</h5>
                    <h6 style={{ "color": "white", "textAlign": "center" }}><div className="btn btn-secondary" id="searchBusinessBtn" onClick={this.callForBusiness}>{this.state.searchRequest}</div></h6>
                </div>
                <div className="resultsDisplay">
                    {this.state.searchedData.map((data) => {
                        
                        return (
                            <div name={data.BusinessName} className="card text-white bg-light mb-3">
                                <div className="card-header" style={{ "color": "black",  }}><h5 style={{"float": "left"}}>{data.BusinessName}</h5> - <em style={{"display":"inline"}}className="card-title" style={{ "color": "black", "fontSize": "small" }}>{data.Niche}</em></div>
                                <div className="card-body">

                                    <Link style={{"color":"black","marginRight":"25px"}}to={"/business/"+data._id }>View Page</Link>
                                    <a style={{"color":"black"}} href={data.CompanyWebsite}>Companies Website</a>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </span>
        )
    }

}

export default SearchComponent