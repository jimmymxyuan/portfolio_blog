import Head from "next/head";
import SSRProvider from 'react-bootstrap/SSRProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from "@/components/Typewriter";
import Wave from "@/components/wave"
import Layout from '@/components/layout';
import Image from 'next/image';
import Particle from "@/components/particle";


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
    <SSRProvider>
    <Layout>
      <Head>
        <title>Port Jimmys</title>
        <meta name="description" content="Jimmy's Portfolio site with his personal blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <Container className="home-content" >
          <Row className="content-row">
            <Col>
              <h1 className="heading">
                Hi There!{" "}
                <Wave/>
              </h1>

              <h1 className="heading-name">
                I&apos;M
                <span className="blue"> JIMMY YUAN</span>
              </h1>
              <Typewriter data={typeWriter} />
              

            </Col>
            <Col>
              <div className="div_centre">
                <Image
                      priority
                      src="/images/avatar_work.png"
                      height={231}
                      width={231}
                      alt=""
                  />
              </div>
            </Col>
          </Row>
          <Row className="content-row">
            <Col>
              <Container>
                <Row>
                  <h1 className="heading-name">Let me tell you a bit about myself.</h1>
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
            <Col>
                  <div className="div_centre">
                    <Image
                        priority
                        src="/images/avatar_smile.png"
                        height={231}
                        width={231}
                        alt=""
                    />
                  </div>

            </Col>
          </Row>
          <Row className="content-row">
            <Container>
              <Row className="social-media"><h1>FIND ME ON</h1></Row>
            </Container>
          </Row>
        </Container>
    </Layout>
    </SSRProvider>
  );
}
