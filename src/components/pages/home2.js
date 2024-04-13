// eslint-disable-next-line
import { Button, Col, Container, Row } from "react-bootstrap";
import './home2.css'
const PendingHome = () => {
  return (
    <Container className="max-width-container " style={{ backgroundColor: "white" }}>
      <Row className="underline-row">
        <Col md="2"><p>JUL16</p></Col>
        <Col md='2'><p>DETROIT,MI</p></Col>
        <Col md="5"><p>DTE ENERGY MUSIC THEATRE</p></Col>
        <Col md="3"><Button variant="primary">BUY TICKETS</Button></Col>
      </Row>
      <Row className="underline-row">
        <Col md="2"><p>JUL19</p></Col>
        <Col md='2'><p>TORONTO,ON</p></Col>
        <Col md="5"><p>BUDWEISER STAGE</p></Col>
        <Col md="3"><Button variant="primary">BUY TICKETS</Button></Col>
      </Row>
      <Row className="underline-row">
        <Col md="2"><p>JUL22</p></Col>
        <Col md='2'><p>BRISTOW,VA</p></Col>
        <Col md="5"><p>JIGGY LUBE LIVE</p></Col>
        <Col md="3"><Button variant="primary">BUY TICKETS</Button></Col>
      </Row>
      <Row className="underline-row">
        <Col md="2"><p>JUL29</p></Col>
        <Col md='2'><p>PHOENIX,AZ</p></Col>
        <Col md="5"><p>AK-CHIN PAVILION</p></Col>
        <Col md="3"><Button variant="primary">BUY TICKETS</Button></Col>
      </Row>
      <Row className="underline-row">
        <Col md="2"><p>AUG2</p></Col>
        <Col md='2'><p>LAS VEGAS,NY</p></Col>
        <Col md="5"><p>T-MOBILE ARENA</p></Col>
        <Col md="3"><Button variant="primary">BUY TICKETS</Button></Col>
      </Row>
      <Row className="underline-row">
        <Col md="2"><p>AUG7</p></Col>
        <Col md='2'><p>CONCORD,CA</p></Col>
        <Col md="5"><p>CONCORD PAVILION</p></Col>
        <Col md="3"><Button variant="primary">BUY TICKETS</Button></Col>
      </Row>
    </Container>
  );
};

export default PendingHome;
