import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HomeBody, HomeButton, HomeTitle, HomeLink, HomeCard, HomeImage } from './Home.elements';
import '../../css/style.css';
import './home-styles.css';

const Home = () => {
  return (
  <>
    <HomeBody className="color-primary-bg">
      <Container>
        <HomeCard className="home-card">
          <HomeTitle className='home-title'>Make It<br/> Art</HomeTitle>
          <HomeLink href="/MakeItArt"><HomeButton>ENTER</HomeButton></HomeLink>
        </HomeCard>
        <Row style={{ textAlign: 'center', marginBottom: '5vh' }}>
          <Col>
            <HomeImage src='images/y00t/Yoot9040.webp' alt='Y00ts NFT #9040'/>
          </Col>
        </Row>
      </Container>
    </HomeBody>
  </>
  )
}

export default Home;