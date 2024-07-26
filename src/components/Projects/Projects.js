import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import etch from "../../Assets/Projects/Etch.jpg";
import snake from "../../Assets/Projects/snake.jpg";
import music from "../../Assets/Projects/music.jpg";
import todo from "../../Assets/Projects/todo.jpg";
import quiz from "../../Assets/Projects/quiz.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etch}
              isBlog={false}
              title="Etch-A-Sketch"
              description="Etch A Sketch code simulates the classic toy digitally. Typically, it involves creating a virtual screen represented as a grid or image. Users interact with the code through inputs (like mouse movements or keyboard keys) to manipulate virtual knobs. These inputs modify the screen's state, drawing lines or shapes."
              ghLink="https://github.com/Sushant9473/Etch-a-Sketch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Classic Snake Game"
              description="A classic Snake game built with JavaScript, HTML, and CSS. Navigate the snake to eat the food, grow longer, and avoid hitting the walls or itself. Features smooth animations and responsive controls."
              ghLink="https://github.com/Sushant9473/Snake_game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Player"
              description="A feature-rich music player built with modern web technologies. It supports various audio formats, playlists, and provides a sleek, user-friendly interface. Enjoy seamless playback, volume control, and track navigation."
              ghLink="https://github.com/Sushant9473/Music-Player"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo"
              description="A simple and intuitive Todo application built with React. Manage your tasks efficiently with features like adding, editing, and deleting tasks. Stay organized and boost your productivity."
              ghLink="https://github.com/Sushant9473/ReactProjects/tree/main/todo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="A simple Quiz App application build using vanilla Javascript . Test your programming skills by attempting this Quizz App"
              ghLink="https://github.com/Sushant9473/WebDevQuiz"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
