import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS

import AnalyticsDashboard from "./Analytics/";
import SalesDashboard from "./Sales/";
import CommerceDashboard from "./Commerce/";
import CRMDashboard from "./CRM/";
import MinimalDashboard1 from "./Minimal/Variation1";
import MinimalDashboard2 from "./Minimal/Variation2";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

// Theme Options
//import ThemeOptions from "../../Layout/ThemeOptions/";

const Dashboards = ({ match }) => (
  <Fragment>
    <AppHeader />
	<Row className="no-gutters inner-menu">		  
	  <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
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
    <div className="app-main">	
	
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/analytics`} component={AnalyticsDashboard}/>
          <Route path={`${match.url}/sales`} component={SalesDashboard} />
          <Route path={`${match.url}/commerce`} component={CommerceDashboard} />
          <Route path={`${match.url}/crm`} component={CRMDashboard} />
          <Route path={`${match.url}/minimal-dashboard-1`} component={MinimalDashboard1}/>
          <Route path={`${match.url}/minimal-dashboard-2`} component={MinimalDashboard2}/>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
