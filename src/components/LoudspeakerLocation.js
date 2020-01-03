import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";


export class LoudSpeakerLocation  extends Component {
 
 
    selectLoudspeaker(event){
        console.log(event, event.target.value);
      }

    render(){
      var elem;
      const { loudspeaker } = this.props;
      if(loudspeaker.loudspeaker === "EM90,EM180"){
          elem = <div className="iconList twoIcons">
            <button id="emFourCornersAndMixed" type="button" data-ng-click="setSpeakerType('benjamin'); setBenjaminLayout('fourcorners'); loadProducts();" data-ng-class="{selected : config.benjaminLayout === 'fourcorners'}">
              <i className="imgContainer benjamin"></i>
              <span>4 Corners and Mixed</span>
            </button>

            <button id="emSidewals" type="button" data-ng-click="setSpeakerType('benjamin'); setBenjaminLayout('sidewalls'); loadProducts();" data-ng-class="{selected : config.benjaminLayout === 'sidewalls'}">
              <i className="imgContainer flush"></i>
              <span>Sidewalls</span>
            </button>
          </div>;
      } else{
        elem =   <div className="iconList threeIcons">
          <button id="locSurface" type="button" data-ng-click="setSpeakerType('surface'); loadProducts();" data-ng-class="{selected : config.speakerType === 'surface'}">
            <i className="imgContainer surface"></i>
            <span>Surface</span>
          </button>

          <button id="locFlush" type="button" data-ng-click="setSpeakerType('flush'); loadProducts();" data-ng-class="{selected : config.speakerType === 'flush'}">
            <i className="imgContainer flush"></i>
            <span>Flush</span>
          </button>

          <button id="locPendant" type="button" data-ng-click="setSpeakerType('pendant'); loadProducts();" data-ng-class="{selected : config.speakerType === 'pendant'}">
            <i className="imgContainer pendant"></i>
            <span>Pendant</span>
          </button>
        </div>;
      }
        return(
          <div className="tangram-form-loudspeakerLocation">
            <div className="tangram-form-loudspeakerLocation--header subheading">Loudspeaker Location <FontAwesomeIcon icon={faQuestionCircle} className="helpbox" /></div>
            <div className = "tangram-form-loudspeakerLocation-value">
              {elem}             
            </div>
          </div>
        );
    }
   
}
LoudSpeakerLocation.propTypes = {
  loudspeaker: PropTypes.string
};