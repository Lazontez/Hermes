import React from "react";
import axios from "axios";



class CompanyBio extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        companyData: []
    }
    componentDidMount() {
        this.getCompanyInfo()
    }
    getCompanyInfo = () => {
        let id = this.props.userId
        axios.get("/api/business/" + id).then(res => {
            console.log(res.data[0])
            console.log(this)
            this.setState({ companyData: res.data[0] }, console.log(this.state))
        })

    }
    render() {

        return (
            <div>
                <div className="jumbotron" style={{ "height": "350px", "backgroundColor": "white", "borderBottom": "1px solid black", "padding": "50px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img style={{ "float": "left" , "width":"100%"}} src="https://picsum.photos/250/150"></img>
                            </div>
                            <div id="companyBio" className="col-md-8">
                                <h6>CompanyBio</h6>
                                <p>{this.state.companyData.CompanyBio}</p>

                            </div>
                        </div>
                        <div className="subInfo" >
                        <div className="row" style={{"marginLeft":"10px"}}>
                            <div>Website: {this.state.companyData.CompanyWebsite}</div>
                        </div>
                        <div className="row" style={{"marginLeft":"10px"}}>
                            <div>Address: </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>)

    }
}

export default CompanyBio