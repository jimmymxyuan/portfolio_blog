import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from "react-icons/ai";
import Image from 'react-bootstrap/Image'
import Layout from '@/components/layout';


const pdf_url = "./resume/Jimmy_Yuan_Resume.pdf"
const pdf_img_1_url = "./resume/Jimmy_Yuan_Resume_1.png"
const pdf_img_2_url = "./resume/Jimmy_Yuan_Resume_2.png"


export default function Resume() {
  return (
    <Layout>
      <Container className="content" >
        <Row className="justify-content-md-center">
          <div className="div_centre">
            <Col md="auto">
              <Button
                variant="primary"
                href={pdf_url}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
            </Col>
          </div>
        </Row>
        <Row>
          <Image src = {pdf_img_1_url} alt="Jmmy Yuan Resume Page 1"/>
          <p></p>
        </Row>
        <Row>
          <Image src = {pdf_img_2_url} alt="Jmmy Yuan Resume Page 2"/>
          <p></p>
        </Row>
        <Row className="justify-content-md-center">
          <div className="div_centre">
            <Col md="auto">
              <Button
                variant="primary"
                href={pdf_url}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
            </Col>
          </div>
        </Row>
      </Container>
    </Layout>
  );
}
