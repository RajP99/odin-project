import React, { Component } from "react";
import PersonalInfo from './PersonalInfo.js';

class PreviewMode extends Component {
    render() {
        return (
            <div>
                <PersonalInfo
                    details={this.props.details}
                ></PersonalInfo>
            </div>
        )
    }
}

export default PreviewMode;