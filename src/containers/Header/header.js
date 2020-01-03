/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Icon from "../../Images/logo-BOSE.svg";

export class Header extends Component {
    render() {
        return (
          <div className="bose-header row">
            <div className="col-md-2 bose-header__logo">
              <a id="mainLogoLink" >
                <img src={ Icon} className ="bose-header__logo-image"/>

              </a>
            </div>
            <div className="col-md-8 bose-header__heading">
                    BUSINESS MUSIC SYSTEM DESIGNER
            </div>
            <div className="col-md-2 bose-header__nav">
              <nav>
                <div className="contacts">
                  <a href="https://pro.bose.com/en_us/contact_pro/global_sales_offices.html" target="_blank" className="btn btn-contacts">
                    <FontAwesomeIcon icon={faEnvelope} />Contact Us</a>
                </div>
              </nav>
            </div>
          </div>
        );
    }
};