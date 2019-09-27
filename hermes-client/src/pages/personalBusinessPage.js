import React from "react";
import NavBar from "../components/navbarComponents/navbar"
import CompanyBio from "../components/BusinessBioComponent"

class PersonalBusinessPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (<div style={{ "backgroundColor": "gray" }}>
            <NavBar userId={this.props.match.params.id} />
            <CompanyBio userId={this.props.match.params.id} />
            <div>YOOOOOO</div>
        </div>)
    }

}

export default PersonalBusinessPage