import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';
import Well from 'react-bootstrap/lib/Well';
import Button from 'react-bootstrap/lib/Button';


const title = 'NodeWeek';

function displayBlank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>NodeWeek</PageHeader>
          <Well>
              <h4>Summary </h4>
              <img float="center" width="600px" height="300px" src="/nodejs.png" />
              <br/>
              <p>NodeWeek is a first of many hackathons which is going to be conducted in verizon,
                 mainly concentrating on server side application development. The main focus elements
                 will be, integration with GraphQL language in place of Rest Uri usage and Usage of a 
                 NoSql Database for getting data </p>
              <Button bsStyle="success" bsSize="large" block href="https://docs.google.com/forms/d/e/1FAIpQLSckHCDoMNJAQVzmK3jPyFYxyD2PMBvg1QwIESdFVCDc8nhh4Q/viewform">Register!</Button>
            </Well>
        </div>
      </div>
    </div>
  );
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;
