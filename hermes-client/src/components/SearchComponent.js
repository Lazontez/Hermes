import React from "react";
import axios from "axios"


class SearchComponent extends React.Component {


    constructor(props) {
        super(props)
    }
    state = {
        searchedData: [],
        searchRequest: ""
    };


    handleSearchRequest = (event) => {
        const inputValue = event.target.value
        const stateValue = this.state.searchRequest
        this.setState({ searchRequest: inputValue }, () => {  this.callForBusiness(stateValue) })

        // console.log(searchRequest)
    }
    callForBusiness(businessName) {
        axios.get("/api/search/" + businessName).then((res) => {
            console.log(res)
        }).catch(err => { console.log(err) })
    }

    render() {
        const searchAreaCss = {
            "backgroundColor": "#df8026",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-left": "50px",
            "padding-right": "50px"

        }
        const searchInputCss = {
            "borderRadius": "50px",
            // "text-align": "center"
        }
        const resultsHeader = {
            // "margin-left" : "400px" ,
            "color": "#df8026",
            "textDecoration": "line-through",
            "text-align": "center"
        }

        return (
            <span>
                <form>
                    <div class="form-group row">
                        {/* <div class="col-sm-12">
                    
                    <input type="text"  class="form-control form-control-sm" id="colFormLabelSm" />
                </div> */}
                        <div class="input-group mb-12" style={searchAreaCss}>
                            <div class="input-group-prepend" >
                                <span class="input-group-text" style={{ "borderBottomLeftRadius": "50px", "borderTopLeftRadius": "50px" }} id="basic-addon1"><i class="fas fa-search" ></i></span>
                            </div>
                            <input type="text" class="form-control" search={this.state.searchRequest} onChange={this.handleSearchRequest} style={{ "borderTopRightRadius": "50px", "borderBottomRightRadius": "50px" }} aria-label="Business NAme" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </form>

                <div className="resultsHeader">
                    <h5 style={resultsHeader}>Results</h5>
                    <h7 style={{ "color": "white", "textAlign": "center" }}>Searching for {this.state.searchRequest}</h7>
                </div>

            </span>
        )
    }

}

export default SearchComponent