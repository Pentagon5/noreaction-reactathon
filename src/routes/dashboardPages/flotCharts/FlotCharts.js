import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import {
  LineChart, Tooltip, PieChart, Pie,
  Line, XAxis, YAxis, Legend,
  CartesianGrid, Bar, BarChart,
  ResponsiveContainer } from '../../../vendor/recharts';

const title = 'Upcoming Hackathons';

var rankdata =  [
  { 
    "name": "NodeWeek", 
    "type" : "Technology Based Hackathons", 
    "description": "Hackathon will be purely based on Nodejs Application Devlopment",
    "solutions": "/hackathons/NodeWeek",
    "organizations": "N&T IT"
  },
  { 
    "name": "PyWeek", 
    "type" : "Programming Language Based Hackathon", 
    "description": "Python Based hackathon for Python Programmers",
    "solutions": "/hackathons/PyWeek",
    "organizations":"Wireless"
  },
  { 
    "name": "ARKnockout", 
    "type" : "Augumented Reality Based Hackathon", 
    "description": "Latest Augmented reality Games and Application Development Hackathon",
    "solutions": "/hackathons/NodeWeek",
    "organizations":"Wireless"
  },
  { 
    "name": "JSHackathon", 
    "type" : "Software Based Hackathons", 
    "description": "Develop and Design applications using lates javascripts",
    "solutions": "/hackathons/PyWeek",
    "organizations":"Wireline"
  }
];

var rankrows = rankdata.map(function(row){
  return <tr>
      <td className="danger">{row.name}</td>
      <td className="info">{row.type}</td>
      <td className="success">{row.description}</td>
      <td className="info">{row.organizations}</td>
      <td className="warning"><a href= {row.solutions}>ViewDetails</a></td>
    </tr>
  });

function displayFlotCharts(props, context) {
  context.setTitle(title);
  return (
    <div>
        <div className="col-lg-12">
          <PageHeader>Upcoming Hackathons</PageHeader>
        </div>
        
        <div className="col-lg-12">
        <Panel header={<span>DataTables Advanced Tables</span>} >
          <div>
            <div className="dataTable_wrapper">
              <div 
                id="dataTables-example_wrapper"
                className="dataTables_wrapper form-inline dt-bootstrap no-footer"
              >
              <div className="row">
                  <div className="col-sm-12">
                  <table
                      className="table table-striped table-bordered table-hover dataTable no-footer"
                      id="dataTables-example"
                      role="grid"
                      aria-describedby="dataTables-example_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="sorting_asc"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Rendering engine: activate to sort column descending"
                            aria-sort="ascending"
                            style={{ width: 265 }}
                          >
                          Hackathon Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Browser: activate to sort column ascending"
                            style={{ width: 321 }}
                          >
                          Hackathon Type
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Platform(s): activate to sort column ascending"
                            style={{ width: 299 }}
                          >
                          Description
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="CSS grade: activate to sort column ascending"
                            style={{ width: 180 }}
                          >Organisation
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Engine version: activate to sort column ascending"
                            style={{ width: 231 }}
                          >
                          Register 
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                       {rankrows}
                      </tbody>
                    </table>

                  </div>
                </div>
            


              </div>
            </div>
          </div>
        </Panel>
      </div>


      </div>  
  

  );
}

displayFlotCharts.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayFlotCharts;
