/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import Icon from "../../Images/logo-BOSE.svg";

export class Footer extends Component {
    render() {
        return (
          <div className="bose-footer">
            <ul className="policyTerms">
              <li className="copyright">©2019 Bose Corporation</li>
              <li><a href="https://worldwide.bose.com/termsofuse" target="_blank">Terms of Use</a></li>
              <li><a href="https://worldwide.bose.com/privacypolicy" target="_blank">Privacy</a></li>
              <li><a href="https://pro.bose.com" target="_blank">PRO.BOSE.COM</a></li>
            </ul>

            <p className="disclaimer">This tool is intended to only provide recommendations and is not a guarantee of performance.</p>
          </div>
        );
    }
};