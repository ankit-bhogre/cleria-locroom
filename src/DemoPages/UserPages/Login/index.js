import React, { Fragment, Component } from "react";

import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import bg1 from "../../../assets/utils/images/originals/city.jpg";
import bg2 from "../../../assets/utils/images/originals/citydark.jpg";
import bg3 from "../../../assets/utils/images/originals/citynights.jpg";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Login extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      initialSlide: 0,
      autoplay: true,
      adaptiveHeight: true,
    };
    return (
      <Fragment>
        <div className="h-100">
		  <Row className="no-gutters">	
			  <Col lg="3" md="3" sm="12" className="mx-auto top_logo">
			  	<div className="app-logo" />
			  </Col>		  
			  <Col lg="7" md="7" sm="12" className="mx-auto">
			  	<div className=""><h2>Banner</h2></div>
			  </Col>		  
			  <Col lg="2" md="2" sm="12" className="ml-auto top_social_icons">
				<a className="" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
				<a className="" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
				<a className="" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
				<a className="" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
			  </Col>
			</Row>
			<Row className="no-gutters">		  
		  <nav className="navbar navbar-expand-lg navbar-dark  bg-dark  w-100">
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
				  <li className="nav-item active">
					<a className="nav-link" href="#">The Platform</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link" href="#">Plan</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link" href="#">Support</a>
				  </li>
				</ul>
			  </div>
			</nav>
			</Row>
          <Row className="h-100 no-gutters">
            <Col lg="7" className="d-none d-lg-block">
				
              <div className="slider-light">
			  	
                <Slider {...settings}>
                  <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                    <div className="slide-img-bg"
                      style={{
                        backgroundImage: "url(" + bg1 + ")",
                      }}/>
                    <div className="slider-content">
                      <h3>Perfect Balance</h3>
                      <p>
                        ArchitectUI is like a dream. Some think it's too good to
                        be true! Extensive collection of unified React Boostrap
                        Components and Elements.
                      </p>
                    </div>
                  </div>
                  <div className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                    <div className="slide-img-bg"
                      style={{
                        backgroundImage: "url(" + bg3 + ")",
                      }}/>
                    <div className="slider-content">
                      <h3>Scalable, Modular, Consistent</h3>
                      <p>
                        Easily exclude the components you don't require.
                        Lightweight, consistent Bootstrap based styles across
                        all elements and components
                      </p>
                    </div>
                  </div>
                  <div className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                    <div className="slide-img-bg opacity-6"
                      style={{
                        backgroundImage: "url(" + bg2 + ")",
                      }}/>
                    <div className="slider-content">
                      <h3>Complex, but lightweight</h3>
                      <p>
                        We've included a lot of components that cover almost all
                        use cases for any type of application.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </Col>
            <Col lg="5" md="12" className="h-100  bg-white justify-content-center align-items-center">
              <Col lg="11" md="11" sm="12" className="mx-auto app-login-box">
			  	<h1 className="lp_title mt-3">LOCROOM PLATFORM</h1>
				<p className="lp_sub_title">Rent a room and have your business on an integrated platform with video, audio and chat conferencing and supported by a professional social network.</p>
               
                <h4 className="mb-0">
                  <div>Welcome back,</div>
                  <span>Please sign in to your account.</span>
                </h4>
                <h6 className="mt-3">
                  No account?{" "}
                  <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()} className="text-primary">
                    Sign up now
                  </a>
                </h6>
                <Row className="divider" />
                <div>
                  <Form>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleEmail">Email</Label>
                          <Input type="email" name="email" id="exampleEmail" placeholder="Email here..."/>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input type="password" name="password" id="examplePassword" placeholder="Password here..."/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup check>
                      <Input type="checkbox" name="check" id="exampleCheck" />
                      <Label for="exampleCheck" check>
                        Keep me logged in
                      </Label>
                    </FormGroup>
                    <Row className="divider" />
                    <div className="d-flex align-items-center">
                      <div className="ml-auto">
                        <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()} className="btn-lg btn btn-link" >
                          Recover Password
                        </a>{" "}
                        <Button color="primary" size="lg">
                          Login to Dashboard
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </Col>
            </Col>
          </Row>
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
        </div>
      </Fragment>
    );
  }
}
