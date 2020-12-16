import React, { Fragment } from "react";
import MegaMenuFooter from "./Components/FooterMegaMenu";
import FooterDots from "./Components/FooterDots";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class AppFooter extends React.Component {
  render() {
    return (
      <Fragment>
        <Row className="no-gutters">
		  <div className="container-fluid">
			  <div className="row footer-1">
				<div className="col-2">
				  <h6>Rooms</h6>
				  <ul>
				  	<li>Link 1</li>
					<li>Link 2</li>
					<li>Link 3</li>
				  </ul>
				</div>
				<div className="col-2">
				  <h6>Services</h6>
				  <ul>
				  	<li>Link 1</li>
					<li>Link 2</li>
					<li>Link 3</li>
				  </ul>
				</div>
				<div className="col-2">
				  <h6>Documentation</h6>
				  <ul>
				  	<li>Link 1</li>
					<li>Link 2</li>
					<li>Link 3</li>
				  </ul>
				</div>
				<div className="col-2"><div className="app-footer-logo" /></div>
			  </div>
			</div>
		  </Row>
		  <Row className="no-gutters">
		  <div className="container-fluid">
			  <div className="row footer-2">
				<div className="col-4">
					<div class="footer-copyright py-3">&copy; 2020 Copyright:
						<a href=""> LocRoom Platform</a>
					  </div>
				 </div>
				 <div className="col-8">
				 	<div class="text-left py-3">
				 	<a>Use Terms</a>
					<a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a>
					<a>Securities Policy</a>
					</div>
				 </div>
			 </div>
		  </div>
	  </Row>
      </Fragment>
    );
  }
}

export default AppFooter;
