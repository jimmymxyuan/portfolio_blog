import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "../components/Typewriter";
import Navbar from "../components/nav";
import Footer from "../components/footer";
/* import Layout from "../components/layout"; */

const inter = Inter({ subsets: ["latin"] });

const typeWriter = [
  "Automation Tester",
  "Full Stack Web Developer",
  "Electrical and Automation Engineer",
  "AWS Certified Developer",
  "Devops Engineer",
  "Video Game Developer",
  "Self Hosting Enthusiast"
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Port Jimmys</title>
        <meta name="description" content="Jimmy's Portfolio site with his personal blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${inter.className}`}>
        <Container className="content" >
          <Row className="content-row">
            <Col>
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;M
                <span className="blue"> JIMMY YUAN</span>
              </h1>
              <Typewriter data={typeWriter} />
              

            </Col>
            <Col>
              <p>(Cartoon Image of Jimmy working)</p>
            </Col>
          </Row>
          <Row className="content-row">
            <Col>(Another Cartoon image of Jimmy Smiling)</Col>
            <Col>
              <Container>
                <Row>
                  <h1 className="heading-name">Let me tell you a bit about myself... </h1>
                </Row>
                <Row>
                  <p>My fields of interests are very broad, and consider myself a <span className="blue">jack of all trades</span> in various fields among Engineering and IT</p>
                </Row>
                <Row>
                  <p>I am fluent in <span className="blue">Python</span> and <span className="blue">Ruby</span>, and can also handle <span className="blue">Javascript</span></p>
                </Row>
                <Row>
                  <p>I studied and worked as an <span className="blue">Electrical and Automation Engineer</span>, but my real passion has always been <span className="blue">Software Development</span></p>
                </Row>
                <Row>
                  <p>Whenever possible, I would turn my ideas into <span className="blue">real products</span> using <span className="blue">Python</span> and <span className="blue">Modern Javascript 
                    Library and Frameworks</span> like <span className="blue">React.js and Next.js</span>
                  </p>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="content-row">
            <Container>
              <Row className="social-media"><h1>FIND ME ON</h1></Row>
              <Row className="justify-content-md-center">
                <Col md="auto" className="social-media-icon">
                  <a href="https://github.com/jimmymxyuan">
                    <AiFillGithub/>
                  </a>
                </Col>
                <Col md="auto" className="social-media-icon">
                  <a href="https://x.com/jimmymxyuan">
                    <p>
                      <AiOutlineTwitter/>
                    </p>
                  </a>
                </Col>
                <Col md="auto" className="social-media-icon">
                  <a href="https://www.linkedin.com/in/jimmy-yuan-54a32858/">
                    <FaLinkedinIn/>
                  </a>
                </Col>
                <Col md="auto" className="social-media-icon">
                  <a href="mailto:jimmy.mx.yuan@gmail.com">
                    <AiOutlineMail/>
                  </a>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
