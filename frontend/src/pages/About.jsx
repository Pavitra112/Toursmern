import React from 'react'
import ServiceList from '../services/ServiceList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import { Container, Row, Col } from 'reactstrap'
import Subtitle from './../shared/subtitle'
function About() {
  return (
    <section>
        <section>
         <Container>
            <Row>
               <Col lg='3'>
                  <h5 className="services__subtitle">What we serve</h5>
                  <h2 className="services__title">We offer our best services</h2>
               </Col>
               <ServiceList />
            </Row>
         </Container>
      </section>
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Gallery'} />
                  <h2 className="gallery__title">Visit our customers tour gallery</h2>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
      </section>
    </section>
  )
}

export default About
