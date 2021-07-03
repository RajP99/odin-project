import React, { Component } from "react";
import PersonalInfo from './PersonalInfo.js';

class EditMode extends Component {
    render() {
        return (
            <div>
                <PersonalInfo
                    details={this.props.details}
                    setFirstName={(e) => {this.props.setFirstName(e)}}
                    setLastName={(e) => {this.props.setLastName(e)}}
                    setEmail={(e) => {this.props.setEmail(e)}}
                    setPhone={(e) => {this.props.setPhone(e)}}
                ></PersonalInfo>
            </div>
        )
    }
}

export default EditMode;