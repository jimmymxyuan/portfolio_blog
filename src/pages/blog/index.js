import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Layout from '@/components/layout';
import Head from "next/head";

export default function About() {
    return (
      <Layout>
        <Container>
            <Row>
                <h1>Blog</h1>
            </Row>
            <Row>
                <Col>
                    <p>Test 11</p>
                </Col>
                <Col>
                    <p>Test 12</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Test 21</p>
                </Col>
                <Col>
                    <p>Test 22</p>
                </Col>
            </Row>
        </Container>
      </Layout>
    );
  }
  