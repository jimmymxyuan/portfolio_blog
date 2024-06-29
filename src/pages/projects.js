import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../components/ProjectCard';

const project1_image = "./images/project1.png"
const project2_image = "./images/project2.png"
const project3_image = "./images/project3.png"

export default function Projects() {
    return (
      <main>
        <Container fluid className="project-container">
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
                title="Jimmy's Toolbox"
                description="A toolbox site with a series of python scripts as the backend api and react as front end"
                githubLink="https://github.com/jimmymxyuan/jimmystoolbox"
                demoLink="https://jimmystoolbox.com"
              />
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
  