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
        <Col md="4" className={styles.footer_left}>Developed by Jimmy Yuan</Col>
        <Col md="4" className={styles.footer_middle}>
          <ul className={styles.social_media}>
            <li className={styles.social_media_icon}>
              <a href="https://github.com/jimmymxyuan">
                <AiFillGithub/>
              </a>
            </li>
            <li className={styles.social_media_icon}>
              <a href="https://x.com/jimmymxyuan">
                  <AiOutlineTwitter/>
              </a>
            </li>
            <li className={styles.social_media_icon}>
              <a href="https://www.linkedin.com/in/jimmy-yuan-54a32858/">
                <FaLinkedinIn/>
              </a>
            </li>
            <li className={styles.social_media_icon}>
              <a href="mailto:jimmy.mx.yuan@gmail.com">
                <AiOutlineMail/>
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className={styles.footer_right}>Copyright © 2024 JY</Col>
      </Row>
      </Container>
    );
  }