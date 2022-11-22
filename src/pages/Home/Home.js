import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HomeBody, HomeButton, HomeTitle, HomeLink, HomeCard, HomeImage} from './Home.elements';
import '../../css/style.css';
import './home-styles.css';

const Home = () => {
  return (
  <>
    <HomeBody>
      <Container>
        <HomeCard className="home-card">
          <HomeTitle>Make It<br/> Art</HomeTitle>
          <HomeLink href="/MakeItArt"><HomeButton>ENTER</HomeButton></HomeLink>
        </HomeCard>
        <Row style={{ textAlign: 'center', marginBottom: '5vh' }}>
          <Col>
          <HomeLink href="https://twitter.com/makeitartai" target="_blank" rel="noopener noreferrer">
            <HomeImage src='images/y00t/Yoot9040.webp' alt='Y00ts NFT #9040'/>
          </HomeLink>
          </Col>
        </Row>
      </Container>
    </HomeBody>
  </>
  )
}

export default Home;