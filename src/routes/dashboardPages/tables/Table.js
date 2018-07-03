import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
import Carousel from 'react-bootstrap/lib/Carousel';


const title = 'Table';

var teamstatdata =  [
  { 
    "name": "Nidhi", 
    "type" : "Advanced", 
    "description": "Angular2,Java,DBMS,NodeJS",
    "solutions": "29",
    "organizations": "1"
  },
  { 
    "name": "Abhishek", 
    "type" : "Intermediate", 
    "description": "Angular2,AWS,AR/VR,Networking",
    "solutions": "48",
    "organizations":"4"
  },
  { 
    "name": "Akshay", 
    "type" : "Intermediate", 
    "description": "Java,DBMS,Angular2,Python",
    "solutions": "45",
    "organizations":"3"
  },
  { 
    "name": "Tanmayee", 
    "type" : "Advanced", 
    "description": "ReactJS,Java,DBMS,Nodejs",
    "solutions": "30",
    "organizations":"2"
  },
  { 
    "name": "Sudeep", 
    "type" : "Beginner", 
    "description": "Java,C,DBMS,Springboot,AWS",
    "solutions": "96",
    "organizations":"6"
  },
  { 
    "name": "Divyansh", 
    "type" : "Beginner", 
    "description": "Java,AWS,Angular,DBMS,C",
    "solutions": "80",
    "organizations":"5"
  }
];

var teamstatrows = teamstatdata.map(function(row){
  return <tr>
      <td className="danger">{row.name}</td>
      <td className="info">{row.type}</td>
      <td className="success">{row.description}</td>
      <td className="info">{row.solutions}</td>
      <td className="warning">{row.organizations}</td>
    </tr>
  });

  var s1 =  [
    { 
      "name": "Pyweek", 
      "type" : "Backend Dev", 
      "description": "24"
    },
    { 
      "name": "AngularWeek", 
      "type" : "Frontend/BackEnd Dev", 
      "description": "1"
    },
    { 
      "name": "VHacks", 
      "type" : "FullStackDeveloper", 
      "description": "45"
    },
    { 
      "name": "Js Thon", 
      "type" : "FrontendDev", 
      "description": "65"
    },
    { 
      "name": "HackDay", 
      "type" : "Debugger", 
      "description": "35"
    }
  ];
  var s1rows = s1.map(function(row){
    return <tr>
        <td className="danger">{row.name}</td>
        <td className="info">{row.type}</td>
        <td className="success">{row.description}</td>
      </tr>
    });

    var s2 =  [
      { 
        "name": "AngularWeek", 
        "type" : "Frontend/BackEnd Dev", 
        "description": "10"
      },

      { 
        "name": "Rails Rumble", 
        "type" : "Developer", 
        "description": "5"
      },
      { 
        "name": "VHacks", 
        "type" : "FullStackDeveloper", 
        "description": "57"
      },
      { 
        "name": "Pyweek", 
        "type" : "Backend Dev", 
        "description": "34"
      },
      { 
        "name": "Code Sprints", 
        "type" : "Debugger", 
        "description": "35"
      }
    ];
    var s2rows = s2.map(function(row){
      return <tr>
          <td className="danger">{row.name}</td>
          <td className="info">{row.type}</td>
          <td className="success">{row.description}</td>
        </tr>
      });

      var s3 =  [  
        { 
          "name": "Rails Rumble", 
          "type" : "Developer", 
          "description": "57"
        },
        { 
          "name": "VHacks", 
          "type" : "FrontendDev", 
          "description": "25"
        },
        { 
          "name": "Pyweek", 
          "type" : "Backend Dev", 
          "description": "4"
        },
        { 
          "name": "Code Sprints", 
          "type" : "FullStackDeveloper", 
          "description": "75"
        }
      ];
      var s3rows = s3.map(function(row){
        return <tr>
            <td className="danger">{row.name}</td>
            <td className="info">{row.type}</td>
            <td className="success">{row.description}</td>
          </tr>
        });
      
        var s4 =  [
          { 
            "name": "Pyweek", 
            "type" : "Backend Dev", 
            "description": "46"
          },
          { 
            "name": "Code Sprints", 
            "type" : "FullStackDeveloper", 
            "description": "35"
          },
          { 
            "name": "Rails Rumble", 
            "type" : "Developer", 
            "description": "5"
          },
          { 
            "name": "VHacks", 
            "type" : "DBAdmin", 
            "description": "76"
          }
        ];
        var s4rows = s4.map(function(row){
          return <tr>
              <td className="danger">{row.name}</td>
              <td className="info">{row.type}</td>
              <td className="success">{row.description}</td>
            </tr>
          });

          var s5 =  [
            { 
              "name": "Code Sprints", 
              "type" : "Debugger", 
              "description": "67"
            },
            { 
              "name": "Rails Rumble", 
              "type" : "Developer", 
              "description": "35"
            },
            { 
              "name": "NodeKnockout", 
              "type" : "Backend Dev", 
              "description": "167"
            },
            { 
              "name": "Pyweek", 
              "type" : "FullStackDeveloper", 
              "description": "17"
            },
            { 
              "name": "VHacks", 
              "type" : "DBAdmin", 
              "description": "96"
            }
          ];
          var s5rows = s5.map(function(row){
            return <tr>
                <td className="danger">{row.name}</td>
                <td className="info">{row.type}</td>
                <td className="success">{row.description}</td>
              </tr>
            });  
            var s6 =  [
              { 
                "name": "Python Solutions", 
                "type" : "Developer", 
                "description": "35"
              },
              { 
                "name": "NodeKnockout", 
                "type" : "Backend Dev", 
                "description": "167"
              },
              { 
                "name": "Music Hack Day", 
                "type" : "FullStackDeveloper", 
                "description": "67"
              },
              
              { 
                "name": "VZthon", 
                "type" : "FrontendDev", 
                "description": "17"
              },
              { 
                "name": "VHacks", 
                "type" : "Debugger", 
                "description": "96"
              }
            ];
            var s6rows = s6.map(function(row){
              return <tr>
                  <td className="danger">{row.name}</td>
                  <td className="info">{row.type}</td>
                  <td className="success">{row.description}</td>
                </tr>
              });  


function displayTable(props, context) {
  context.setTitle(title);
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img className="img-responsive center-block" width={450} height={250} alt="500x500" src="/profile3.jpg"/>
    <Carousel.Caption>
      <div style={{ backgroundColor: 'white' }}>
      <h3 style={{ color: 'black' }}><b>MVP of the team</b></h3>
      <p style={{ color: 'black' }}><b>Participated in : 11 Hackathons</b></p>
      </div>    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="img-responsive center-block" width={450} height={250} alt="500x500" src="/profile2.png" />
    <Carousel.Caption>
    <div style={{ backgroundColor: 'white' }}>
      <h3 style={{ color: 'black' }}><b>Code machine</b></h3>
      <p style={{ color: 'black' }}><b>23000 lines of code!! Uff </b></p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="img-responsive center-block" width={450} height={250} alt="500x500" src="/profile1.jpg" />
    <Carousel.Caption>
    <div style={{ backgroundColor: 'white' }}>
    <h3 style={{ color: 'black' }}><b>Engagement Engineer</b></h3>
      <p style={{ color: 'black' }}><b>123 likes, 36 Comments, 45 saved solutions</b></p>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <div className="col-lg-12">
        <PageHeader>Team Stats</PageHeader>
      </div>

      <div className="col-lg-12">
        <Panel header={<span>Hackathon Participation Statistics</span>} >
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
                            aria-sort="ascending"
                            style={{ width: 265 }}
                          >
                          Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: 321 }}
                          >
                          Level
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: 299 }}
                          >
                          Knowledge Base
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: 201 }}
                          >
                          Overall Ranking
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTables-example"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: 210 }}
                          >Rank in Team
                          </th>
                        </tr>
                      </thead>
                      <tbody>  
                        {teamstatrows}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
      
      <div className="col-lg-12">
        <PageHeader>Individual Stats</PageHeader>
      </div>

      <div className="row ng-scope">
        <div className="col-lg-6">
          <Panel header={<span>Abhishek</span>} >
          <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Hackathon Name </th><th>Role</th><th>Overall Rank</th>
                  </tr>
                </thead>
                <tbody>
                {s1rows}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>

        <div className="col-lg-6">
          <Panel header={<span>Nidhi</span>} >
          <div className="table-responsive">
          <table className="table">
                <thead>
                  <tr>
                    <th>Hackathon Name </th><th>Role</th><th>Overall Rank</th>
                  </tr>
                </thead>
                <tbody> {s2rows}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
      </div>

      <div className="row ng-scope">
        <div className="col-lg-6">
          <Panel header={<span>Tanmayee</span>} >
          <div className="table-responsive">
          <table className="table">
                <thead>
                  <tr>
                    <th>Hackathon Name </th><th>Role</th><th>Overall Rank</th>
                  </tr>
                </thead>
                <tbody> {s3rows}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
        <div className="col-lg-6">
          <Panel header={<span>Akshay</span>} >
          <div className="table-responsive">
          <table className="table">
                <thead>
                  <tr>
                    <th>Hackathon Name </th><th>Role</th><th>Overall Rank</th>
                  </tr>
                </thead>
                <tbody> {s4rows}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
      </div>

      <div className="row ng-scope">
        <div className="col-lg-6">
          <Panel header={<span>Divyansh</span>} >
          <div className="table-responsive">
          <table className="table">
                <thead>
                  <tr>
                    <th>Hackathon Name </th><th>Role</th><th>Overall Rank</th>
                  </tr>
                </thead>
                <tbody> {s5rows}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
        <div className="col-lg-6">
          <Panel header={<span>Sudeep</span>} >
            <div className="table-responsive">
            <table className="table">
                <thead>
                  <tr>
                    <th>Hackathon Name </th><th>Role</th><th>Overall Rank</th>
                  </tr>
                </thead>
                <tbody> {s6rows}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
      </div>

    </div>

  );
}


displayTable.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayTable;