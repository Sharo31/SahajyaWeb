import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Carousel, Button, Media } from 'react-bootstrap';
import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>HEADLINES</h2>
        </Jumbotron>
        <Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="Flood-hit Coorg" src={require('../Coorg.png')}  />
    <Carousel.Caption>
      <h3>Flood-hit Coorg</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/carousel.png" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/carousel.png" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Jumbotron><Media>
    <Media.Left>
      <img width={80} height={80} src="/thumbnail.png" alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>Media Heading</Media.Heading>
        <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <Link to='//github.com/ReactTraining/react-router/issues/1147'>
            <Button bsStyle="primary">Read More</Button>
          </Link>
      </Media.Body>
      </Media>
        </Jumbotron>
        <Jumbotron>
          <h2>Cyclones in Chennai</h2>
          <p>13 Dead, Over 81,000 Evacuated As Cyclone Gaja Hits Tamil Nadu</p>
          <Link to="/DistressLocations">
            <Button bsStyle="primary">Read More</Button>
          </Link>
        </Jumbotron>
        <Jumbotron>
          <h2>Kerala Floods</h2>
          <p>Out of 14 districts 12 in floods.</p>
          <Link to="/DistressLocations">
            <Button bsStyle="primary">Read More</Button>
          </Link>
        </Jumbotron>
      </Grid>
    )
  }
}
