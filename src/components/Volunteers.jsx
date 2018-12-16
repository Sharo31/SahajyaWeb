import React, { Component } from 'react';
import { Grid, Row, Col, Image, Jumbotron, Tab, Tabs } from 'react-bootstrap';
import './Volunteers.css';
import {coorD} from '../firebase';

export default class Volunteers extends Component {
  constructor(props){
    super(props);
    this.ref = coorD.collection('Volunteers');
    this.unsubscribe = null;
    this.state = {
      Volunteers1: [],
      Volunteers2:[],
      Volunteers3:[]
    };
  }  
  onCollectionUpdate = (querySnapshot) => {
    const Volunteers1 = [];
    const Volunteers2 = [];
    const Volunteers3 = [];
    querySnapshot.forEach((doc) => {
      const { name, age, gender, contact,camp_preference } = doc.data();
      if(camp_preference=="Relief Camp 1"){
      Volunteers1.push({
        key: doc.id,
        name,
        age,
        gender,
        contact,
        camp_preference
      });
    }
    if(camp_preference=="Relief Camp 2"){
      Volunteers2.push({
        key: doc.id,
        name,
        age,
        gender,
        contact,
        camp_preference
      });
    }
    if(camp_preference=="Relief Camp 3"){
      Volunteers3.push({
        key: doc.id,
        name,
        age,
        gender,
        contact,
        camp_preference
      });
    }
    });
    this.setState({
      Volunteers1,
      Volunteers2,
      Volunteers3
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  
  render() {
    return (
      <Grid>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Relief Camp 1">
        <Jumbotron>
          <h2>ALL VOLUNTEERS</h2>
        </Jumbotron>
        <Row className="show-grid text-center">
        {this.state.Volunteers1.map(vol =>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>{vol.name}</h3>
            <p><ul>
              <li>Age: {vol.age}</li>
              <li>Gender: {vol.gender}</li>
              <li>Contact: {vol.contact} </li>
            </ul></p>
          </Col>
          )}
        </Row>
        </Tab>
        <Tab eventKey={2} title="Relief Camp 2">
        <Jumbotron>
          <h2>Relief Camp 2</h2>
        </Jumbotron>
        <Row className="show-grid text-center">
        {this.state.Volunteers2.map(vol =>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>{vol.name}</h3>
            <p><ul>
              <li>Age: {vol.age}</li>
              <li>Gender: {vol.gender}</li>
              <li>Contact: {vol.contact} </li>
            </ul></p>
          </Col>
          )}
        </Row>
        </Tab>
           
        <Tab eventKey={3} title="Relief Camp 3">
        <Jumbotron>
          <h2>Relief Camp 3</h2>
        </Jumbotron>
        <Row className="show-grid text-center">
        {this.state.Volunteers3.map(vol =>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>{vol.name}</h3>
            <p><ul>
              <li>Age: {vol.age}</li>
              <li>Gender: {vol.gender}</li>
              <li>Contact: {vol.contact} </li>
            </ul></p>
          </Col>
          )}
        </Row>
        </Tab>

            

            </Tabs>
            </Grid>
        )
      }
  }
