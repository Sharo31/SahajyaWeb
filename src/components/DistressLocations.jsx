import React, { Component } from 'react'
import { Grid, Tab, Tabs, Table } from 'react-bootstrap';
import './DistressLocations.css';
import {coorD} from '../firebase';

export default class DistressLocations extends Component {
  constructor(props){
    super(props);
    this.ref = coorD.collection('Emergency Help');
    this.unsubscribe = null;
    this.state = {
      DistressLocation : [],
      DistressLocation1:[],
      DistressLocation2:[],
      DistressLocation3:[],
      DistressLocation4:[]
      
    };
  }  
  
  onCollectionUpdate = (querySnapshot) => {
    const DistressLocation = [];
    const DistressLocation1=[];
    const DistressLocation2=[];
    const DistressLocation3=[];
    const DistressLocation4=[];
    querySnapshot.forEach((doc) => {
     
      
      const { Latitude , Longitude , Emergency,Ward ,Contact,Airlift} = doc.data();
    
      if(Ward=="MGRoad")
       {
        DistressLocation.push({
          key: doc.id,
          Latitude,
          Longitude,
          Emergency,
          Ward,
          Contact,
          Airlift
        });
    }
    if(Ward=="Jalahalli")
    {
     DistressLocation1.push({
       key: doc.id,
       Latitude,
       Longitude,
       Emergency,
       Ward,
       Contact,
          Airlift
     });
 }
 if(Ward=="Yehlanka")
     {
      DistressLocation2.push({
        key: doc.id,
        Latitude,
        Longitude,
        Emergency,
        Ward,
        Contact,
          Airlift
      });
  }
  if(Ward=="Arakere")
     {
      DistressLocation3.push({
        key: doc.id,
        Latitude,
        Longitude,
        Emergency,
        Ward
      });
  }
  if(Ward=="Yeshwanthpura")
     {
      DistressLocation4.push({
        key: doc.id,
        Latitude,
        Longitude,
        Emergency,
        Ward,
        Contact,
          Airlift
      });
  }
  
    });
    this.setState({
      DistressLocation,
      DistressLocation1,
      DistressLocation2,
      DistressLocation3,
      DistressLocation4
   });

   
  
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <Grid>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="MGRoad">
        <Table striped bordered condensed hover id="table">
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>SOS</th>
              <th>Contact</th>
              <th>Airlift </th>
            </tr>
          </thead>
          <tbody>
            {this.state.DistressLocation.map(loc =>
            <tr>
              <td>{loc.Latitude}</td>
              <td>{loc.Longitude}</td>
              <td>{loc.Emergency}</td>
              <td>{loc.Contact}</td>
              <td>{loc.Airlift}</td>
            </tr>
            )}
          </tbody>
        </Table>
        </Tab>
        <Tab eventKey={2} title="Jalahalli">
        <Table striped bordered condensed hover id="table">
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>SOS</th>
              <th>Contact</th>
              <th>Airlift</th>
            </tr>
          </thead>
          <tbody>
            {this.state.DistressLocation1.map(loc =>
            <tr>
              <td>{loc.Latitude}</td>
              <td>{loc.Longitude}</td>
              <td>{loc.Emergency}</td>
              <td>{loc.Contact}</td>
              <td>{loc.Airlift}</td>
            </tr>
            )}
          </tbody>
        </Table>
        </Tab>
        <Tab eventKey={3} title="Yelahanka">
        <Table striped bordered condensed hover id="table">
          <thead>
            <tr>
            <th>Latitude</th>
              <th>Longitude</th>
              <th>SOS</th>
              <th>Contact</th>
              <th>Airlift</th>
            </tr>
          </thead>
          <tbody>
            {this.state.DistressLocation2.map(loc =>
            <tr>
              <td>{loc.Latitude}</td>
              <td>{loc.Longitude}</td>
              <td>{loc.Emergency}</td>
              <td>{loc.Contact}</td>
              <td>{loc.Airlift}</td>
            </tr>
            )}
          </tbody>
        </Table>
        </Tab>
        <Tab eventKey={4} title="Arekere">
        <Table striped bordered condensed hover id="table">
          <thead>
            <tr>
            <th>Latitude</th>
              <th>Longitude</th>
              <th>SOS</th>
              <th>Contact</th>
              <th>Airlift</th>
            </tr>
          </thead>
          <tbody>
            {this.state.DistressLocation3.map(loc =>
            <tr>
              <td>{loc.Latitude}</td>
              <td>{loc.Longitude}</td>
              <td>{loc.Emergency}</td>
              <td>{loc.Contact}</td>
              <td>{loc.Airlift}</td>
            </tr>
            )}
          </tbody>
        </Table>
        </Tab>
        <Tab eventKey={5} title="Yeshwanthpura">
        <Table striped bordered condensed hover id="table">
          <thead>
            <tr>
            <th>Latitude</th>
              <th>Longitude</th>
              <th>SOS</th>
              <th>Contact</th>
              <th>Airlift</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.DistressLocation4.map(loc =>
            <tr>
              <td>{loc.Latitude}</td>
              <td>{loc.Longitude}</td>
              <td>{loc.Emergency}</td>
              <td>{loc.Contact}</td>
              <td>{loc.Airlift}</td>
            </tr>
            )}
          </tbody>
        </Table>
        </Tab>
        </Tabs>
      </Grid>
    )
  }
}
