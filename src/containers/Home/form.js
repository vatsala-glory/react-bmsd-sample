/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { LoudSpeakerName, LoudSpeakerLocation } from "../../components";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.submitForm = this.submitForm.bind(this);
  }



    submitForm(event){
        //Call API for getting values
    }
    render() {
        return (
          <div className="bose-leftContainer col-2 scrollable">
            <form onSubmit={this.submitForm} className="tangram-form">
              <h2 className="tangram-form-title">  <FontAwesomeIcon icon={faSlidersH} /> Configuration </h2>

              <LoudSpeakerName />
              <LoudSpeakerLocation loudspeaker="DM2,DM3,DM5,DM6,DM8" />

            </form>
          
          </div>
        );
    }
};