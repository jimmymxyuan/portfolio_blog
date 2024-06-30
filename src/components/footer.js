import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "@/styles/components.module.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
      <Container className={styles.footer} fluid>
        <Row>
          <Col className={styles.footer_left}>Developed by Jimmy Yuan</Col>
          <Col>
            <Container>
                <Col md="auto" className={styles.social_media_icon}>
                  <a href="https://github.com/jimmymxyuan">
                    <AiFillGithub/>
                  </a>
                </Col>
                <Col md="auto" className={styles.social_media_icon}>
                  <a href="https://x.com/jimmymxyuan">
                    <p>
                      <AiOutlineTwitter/>
                    </p>
                  </a>
                </Col>
                <Col md="auto" className={styles.social_media_icon}>
                  <a href="https://www.linkedin.com/in/jimmy-yuan-54a32858/">
                    <FaLinkedinIn/>
                  </a>
                </Col>
                <Col md="auto" className={styles.social_media_icon}>
                  <a href="mailto:jimmy.mx.yuan@gmail.com">
                    <AiOutlineMail/>
                  </a>
                </Col>
            </Container>
          </Col>
          <Col className={styles.footer_left}>Copyright © 2024 JY</Col>
        </Row>
      </Container>
    );
  }