import React from 'react'
import { Container, Col, Row, Figure } from 'react-bootstrap'
import Zoom from 'react-reveal'
import html5 from '../imgs/html5.png';
import css from '../imgs/css.png';
import javascript from '../imgs/javascript.png';
import node from '../imgs/nodejs.png';
import python from '../imgs/python.png';
import rprogramming from '../imgs/rprogramming.png';
import tableau from '../imgs/tableau.png';

const Skills = () => {
    return (
        <div>
            <Container fluid>
            <Zoom cascade>
              <Row>
                <Col md={true}>
                <Figure>
                  <Figure.Image src={html5} alt="HTML5"/>
                  <Figure.Caption>HTML</Figure.Caption>
                </Figure>
                </Col>
                <Col md={true}>
                <Figure>
                  <Figure.Image src={css} alt="CSS"/>
                  <Figure.Caption>CSS</Figure.Caption>
                </Figure>
                </Col>
                <Col md={true}>
                <Figure>
                  <Figure.Image src={javascript} alt="JavaScript"/>
                  <Figure.Caption>JavaScript</Figure.Caption>
                </Figure>
                </Col>
                <Col md={true}>
                <Figure>
                  <Figure.Image src={node} alt="Node JS"/>
                  <Figure.Caption>Node JS</Figure.Caption>
                </Figure>
                </Col>
              </Row>
            </Zoom>
            <Zoom cascade>
              <Row>
                <Col md={true}>
                <Figure>
                  <Figure.Image src={python} alt="Python"/>
                  <Figure.Caption>Python</Figure.Caption>
                </Figure>
                </Col>
                <Col md={true}>
                <Figure>
                  <Figure.Image src={rprogramming} alt="R Programming"/>
                  <Figure.Caption>R</Figure.Caption>
                </Figure>
                </Col>
                <Col md={true}>
                <Figure style={{ margin: `2.5rem 0` }}>
                  <Figure.Image src={tableau} alt="Tableau"/>
                  <Figure.Caption style={{ marginTop: `1.75rem`}}>Tableau</Figure.Caption>
                </Figure>
                </Col>
              </Row>
            </Zoom>
          </Container>
        </div>
    )
}

export default Skills
