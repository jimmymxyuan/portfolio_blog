import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillHouseFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function ProjectCard(data) {
    return (
        <Card className="project-card">
            <Card.Img variant="top" src={data.imgPath} />
            <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
                {data.description}
            </Card.Text>
            <Button variant="primary" href={data.demoLink} >
                <BsFillHouseFill />
                {" Demo"}
            </Button>
            <Button variant="primary" href={data.githubLink} style={{ marginLeft: "10px" }}>
                <BsGithub />
                {" Github"}
            </Button>
            </Card.Body>
        </Card>
    );
}
export default ProjectCard;