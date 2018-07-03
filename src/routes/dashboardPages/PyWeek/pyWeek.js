import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';
import Well from 'react-bootstrap/lib/Well';
import Button from 'react-bootstrap/lib/Button';


const title = 'PyWeek';

function displayBlank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>PyWeek</PageHeader>
          <Well>
              <h4>Summary </h4>
              <img style={{ float: 'center' }} width="750px" height="350px" src="/Python.jpg" />
              <br/><br/><br/>
              <p>PyWeek is a first of many hackathons which is going to be conducted in verizon,
                 mainly concentrating on Data Analysis and Data Mining. The main focus elements
                 will be, Artificial Inteligence and Machine Learning for getting data </p>
              <Button bsStyle="success" bsSize="large" block href="https://docs.google.com/forms/d/e/1FAIpQLSe11aHC31AcoPr2JaBX49UyGWrBGe3pvp4YQ6mVHUl1i_-rcg/viewform">Register!</Button>
            </Well>
        </div>
      </div>
    </div>
  );
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;
