import React, { PropTypes } from 'react';
import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';

import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';

const title = 'Forms';


function displayForms(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Contact Us</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <Panel header={<span>Queries Form</span>} >
            <div className="row">
              <div className="col-lg-6">
                <Form>
                  <FormGroup
                    controlId="formBasicText"
                  >
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter Your Name"
                    />
                    <FormControlFeedback />
                    
                  </FormGroup>

                  <FormGroup controlId="formBasicText2">
                    <ControlLabel>Email ID</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter Email Address"
                    />
                    <FormControlFeedback />
                  </FormGroup>

                  <FormGroup>
                  <ControlLabel>Rate Us</ControlLabel>
                  <Col>
                    <Radio inline>
                      Good
                    </Radio>
                    {' '}
                    <Radio inline>
                      Very Good
                    </Radio>
                    {' '}
                    <Radio inline>
                      Excellent
                    </Radio>
                  </Col>
                </FormGroup>

                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Special Comments</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea" />
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit" > Submit Button</Button>
                    {'  '}
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

displayForms.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayForms;
