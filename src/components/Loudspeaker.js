import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";


export class LoudSpeakerName  extends Component {
    selectLoudspeaker(event){
        console.log(event, event.target.value);
      }

    render(){
        return(
          <div className="tangram-form-loudspeakerSelection">
            <div className="tangram-form-loudspeakerSelection--header subheading">Loudspeaker Selection <FontAwesomeIcon icon={faQuestionCircle} className="helpbox" /></div>
            <div className = "tangram-form-loudspeakerSelection-value">
              <select id="speakerName" name="speakerName" onChange={this.selectLoudspeaker.bind(this)}>
                <option value="none">DesignMax / FreeSpace</option>
                <option value="DM2,DM3,DM5,DM6,DM8">DesignMax Family</option>
                <option value="EM90,EM180">EdgeMax Family</option>
                <option value="DS16,DS40,DS100,FS3">FreeSpace Family</option>
                <option value="DM2">DesignMax DM 2</option>
                <option value="DM3">DesignMax DM 3</option>
                <option value="DM5">DesignMax DM 5</option>
                <option value="DM6">DesignMax DM 6</option>
                <option value="DM8">DesignMax DM 8</option>
                <option value="DS16">FreeSpace DS 16</option>
                <option value="DS40">FreeSpace DS 40</option>
                <option value="DS100">FreeSpace DS 100</option>
                <option value="FS3">FreeSpace 3</option>
              </select>
            </div>
          </div>
        )
    }
}