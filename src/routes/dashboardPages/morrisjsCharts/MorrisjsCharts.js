import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Donut from '../../../components/Donut';

import {
  LineChart, Tooltip,
  Line, XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../../vendor/recharts';
// ResponsiveContainer is broken so we have customise the ResponsiveContainer

const title = 'Completed Hackathon';

var rankdata =  [

  { 
    "name": "Angular Day ", 
    "type" : "Software Based Hackathons", 
    "teams": "140",
    "solutions": "20",
    "url": "/hackathons/AngularDay",
    "organizations":"VES"
  },
  { 
    "name": "VZThon", 
    "type" : "Organization Based Hackathon", 
    "teams": "200",
    "solutions": "40",
    "url": "/hackathons/VzThon",
    "organizations":"Wireless"
  },
  
  { 
    "name": " AR Hackathon", 
    "type" : "Augumented Reality Based Hackathon", 
    "teams": "300",
    "solutions": "60",
    "url": "/hackathons/AngularDay",
    "organizations":"Wireless"
  },
  { 
    "name": "Angular Week ", 
    "type" : "Software Based Hackathons", 
    "teams": "500",
    "solutions": "50",
    "url": "/hackathons/VzThon",
    "organizations":"VES"
  },
  { 
    "name": "VHacks", 
    "type" : "Internal Hackathon", 
    "teams": "600",
    "solutions": "100",
    "url": "/hackathons/AngularDay",
    "organizations":"N&T IT"
  },
  { 
    "name": "Rails Rumble", 
    "type" : "Online Hackathon", 
    "teams": "400",
    "solutions": "50",
    "url": "/hackathons/VzThon",
    "organizations":"Wireline"
  },
  { 
    "name": "Music Hack Day", 
    "type" : "Industry-specific hackathons", 
    "teams": "320",
    "solutions": "110",
    "url": "/hackathons/AngularDay",
    "organizations":"N&T IT"
  },
  { 
    "name": "JS Thon", 
    "type" : "Technology Based Hackathons", 
    "teams": "300",
    "solutions": "50",
    "url": "/hackathons/VzThon",
    "organizations": "Wireline"
  },
  { 
    "name": "Code Sprints", 
    "type" : "Software Based Hackathons", 
    "teams": "200",
    "solutions": "50",
    "url": "/hackathons/VzThon",
    "organizations": "VES"
  },
  { 
    "name": "Node Knockout", 
    "type" : "Technology Based Hackathons", 
    "teams": "200",
    "solutions": "50",
    "url": "/hackathons/VzThon",
    "organizations": "N&T IT"
  },
  { 
    "name": " PyWeek", 
    "type" : "Programming Language Based Hackathon", 
    "teams": "300",
    "solutions": "80",
    "url": "/hackathons/VzThon",
    "organizations":"Wireless"
  },
  { 
    "name": "HackDay ", 
    "type" : "Industry-specific Hackathons", 
    "teams": "260",
    "solutions": "70",
    "url": "/hackathons/AngularDay",
    "organizations":"VES"
  },
  { 
    "name": " Python Solutions", 
    "type" : "Programming Language Based Hackathon", 
    "teams": "300",
    "solutions": "80",
    "url": "/hackathons/VzThon",
    "organizations":"Wireless"
  },
  { 
    "name": " Code Solutions", 
    "type" : "Cloud Based Hackathon", 
    "teams": "220",
    "solutions": "60",
    "url": "/hackathons/AngularDay",
    "organizations":"Wireline"
  }



];

var rankrows = rankdata.map(function(row){
  return <tr>
      <td className="danger"><a href= {row.url}>{row.name}</a></td>
      <td className="info">{row.type}</td>
      <td className="success">{row.teams}</td>
      <td className="warning">{row.solutions}</td>
      <td className="info">{row.organizations}</td>
    </tr>
  });

function displayMorrisjsCharts(props, context) {
  context.setTitle(title);
  return (
    <div>
        <div className="col-lg-12">
          <PageHeader>Completed Hackathons</PageHeader>
        </div>
        <div className="col-lg-12">
        <Panel>
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
                          #Teams Participated
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="CSS grade: activate to sort column ascending"
                            style={{ width: 180 }}
                          >#Solutions
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
                          Organization 
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

displayMorrisjsCharts.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayMorrisjsCharts;
