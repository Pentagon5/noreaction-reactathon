import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';
import Well from 'react-bootstrap/lib/Well';
import Button from 'react-bootstrap/lib/Button';


const title = 'VzThon';

function displayBlank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>VzThon</PageHeader>
          <Well>
              <h4>Summary </h4>
              <img float="center" width="600px" height="300px" src="/vz.png" />
              <br/><br/><br/>
              <p>Vzthon is a first of many hackathons which is going to be conducted in verizon,
                 mainly concentrating on full stack development. The main focus elements will be,
                 integrated development of GUI, middleware and Backend applications </p>
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
