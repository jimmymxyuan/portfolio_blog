import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../components/ProjectCard';
import Layout from '@/components/layout';

const project1_image = "./images/project1.png"
const project2_image = "./images/project2.png"
const project3_image = "./images/project3.png"

export default function Projects() {
    return (
      <Layout>
        <Container className="project-container">
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are some projects I have worked on. 
          </p>
          <Row>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project1_image}
                title="Portfolio"
                description="My Portfolio site with descriptions, timeline, resume and projects"
                githubLink="https://github.com/jimmymxyuan/portfolio"
                demoLink="https://jimmyyuan.net"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project2_image}
                title="Jimmy's Blog"
                description="My personal blog built with Next.js and react"
                githubLink="https://github.com/jimmymxyuan/blog"
                demoLink="https://jimmyblog.vercel.app"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project3_image}
                title="React Chat"
                description="A Real-time Chat App that utilizes Firebases Google Authentication to login using Gmail as users, and sends/stores messages to Firebases online database in a global chat"
                githubLink="https://github.com/jimmymxyuan/react-chat"
                demoLink="https://react-chat-peach-iota.vercel.app"
              />
            </Col>
          </Row>
          <Row className='empty_space'>

          </Row>
        </Container>
      </Layout>
    );
  }
  