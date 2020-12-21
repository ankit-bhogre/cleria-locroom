import React, { Fragment, Component } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook, faYoutube, faTwitter, faInstagram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>		  
		<Row className="no-gutters">	
			 <div className="content-two"><div className="container">Content 2</div></div>
		</Row>
		<Row className="no-gutters">	
			 <div className="content-three"><div className="container">Content 3</div></div>
		</Row>
		  <Row className="no-gutters footer-1">
		  <div className="container ">
			  <div className="row ">
			  	<div className="col-3">
				
				</div>
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
		  <div className="container">
			  <div className="row footer-2">				
				 <div className="col-8">
				 	<div class="text-left py-3">
						<a>2020 Locroom Platform</a>
						<a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a>
						<a>Use Terms</a>
						<a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a><a>&nbsp;</a>
						<a>Security Policies</a>
					</div>
				 </div>
				 <div className="col-4">
					<div class="footer-copyright py-3">By Toca Projetos</div>
				 </div>
			 </div>
		  </div>
	  </Row>
      </Fragment>
    );
  }
}
