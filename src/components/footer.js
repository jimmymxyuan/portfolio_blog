import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
      <Container className="footer" fluid>
        <Row>
          <Col className="footer-left">Developed by Jimmy Yuan</Col>
          <Col className="footer-right">Copyright © 2024 JY</Col>
        </Row>
      </Container>
    );
  }