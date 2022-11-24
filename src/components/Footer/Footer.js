  import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { FooterSection, FooterText, FooterLink, DalleAsterik } from './Footer.elements';

export default function MainFooter() {
  return(
    <>
      <FooterSection>
        <Container style={{ textAlign: 'center' }}>
          <Row>
            <Col md>
              <FooterText style={{ marginRight: '10px' }}><FooterLink href="https://openai.com/dall-e-2/" target="_blank" rel="noopener noreferrer">Docs</FooterLink> *</FooterText>
              <FooterText style={{ marginRight: '10px' }}><FooterLink href="https://twitter.com/makeitartai" target="_blank" rel="noopener noreferrer">Twitter</FooterLink> *</FooterText>
              <FooterText><FooterLink href="#" target="_blank" rel="noopener noreferrer">Contact</FooterLink></FooterText>
              <DalleAsterik>*Powered By Dalle2</DalleAsterik>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  )
};