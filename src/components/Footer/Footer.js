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
              <FooterText style={{ marginRight: '10px' }}><FooterLink>Docs</FooterLink> *</FooterText>
              <FooterText style={{ marginRight: '10px' }}><FooterLink>Twitter</FooterLink> *</FooterText>
              <FooterText><FooterLink>Contact</FooterLink></FooterText>
              <DalleAsterik>*Images generated using Dalle2</DalleAsterik>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  )
};