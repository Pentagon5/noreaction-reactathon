import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';
import Well from 'react-bootstrap/lib/Well';
import Button from 'react-bootstrap/lib/Button';


const title = 'AngularDay';

function displayBlank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>AngularDay</PageHeader>
          <Well>
              <h4>Summary </h4>
              <img float="center" width="600px" height="300px" src="/angular.jpg" />
              <br/><br/><br/>
              <p>AngularDay is a one day symposium, for getting all our employees on-boarded 
                onto the EUROPA framework, along with the basic usage of APIGEE api managemnet 
                tool for better security and also use SpringBoot in Java  </p>
              <br/><br/>
              <p>Click below for all solutions provided by teams</p>
              <Button bsStyle="success" bsSize="large" block href="https://github.com/Pentagon5/Demorepository">Solution!</Button>
            </Well>
        </div>
      </div>
    </div>
  );
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;
