import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import RDR from '../images/rdr2.jpg';
import Valorant from '../images/valorant.jpg';
import GTA from '../images/gta v.jpg'
import Navbar from '../Navbar/navbar';


import './Home.css';

function UncontrolledExample() {
  return (
    <>
    <Navbar />
      <div id='container11'>
        <div id='container12'>
          <Carousel>
              <Carousel.Item>
                <img src={RDR} alt='' className='img'/>
                <Carousel.Caption>
                  <h3> Red Dead Redemption 2</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Valorant} alt='' className='img'/>
                  <Carousel.Caption>
                    <h3>Valorant</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img src={GTA} alt='' className='img'/>
              </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div id='container14'>
        <h2 id='heading'>Top Article's</h2>
          <div id='container15'>
            <Card style={{ width: '18rem' }} className='card'>
              <Card.Img variant="top" src={GTA} />
              <Card.Body>
                <Card.Title>GTA V</Card.Title>
                <Card.Text>
                Dive into one the best game.
                </Card.Text>
                <Button variant="primary" href='https://www.rockstargames.com/gta-online' target='blank'>Read More</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='card'>
              <Card.Img variant="top" src={RDR} />
              <Card.Body>
                <Card.Title>RDR 2</Card.Title>
                <Card.Text>
                Want to roll back to cowboy's time?
                </Card.Text>
                <Button variant="primary" href='https://www.rockstargames.com/reddeadredemption2' target='blank'>Read More</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='card'>
              <Card.Img variant="top" src={Valorant} />
              <Card.Body>
                <Card.Title>Valorant</Card.Title>
                <Card.Text>
                Looking for a Career in Esports!
                </Card.Text>
                <Button variant="primary" href='https://playvalorant.com/en-us/' target='blank'>Read More</Button>
              </Card.Body>
            </Card>
          </div>
      </div>

    </>
  );
}

export default UncontrolledExample;