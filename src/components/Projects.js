import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bloodbank.jpg";
import projImg2 from "../assets/img/musicstore.jpeg";
import projImg3 from "../assets/img/nqueen.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Blood Donor Patient Management System",
      description: "HTML, CSS, Django, SQ-LITE",
      imgUrl: projImg1,
    },
    {
      title: "Music Store Analysis",
      description: "Postgre SQL, PgAdmin 4",
      imgUrl: projImg2,
    },
    {
      title: "N- Queens Visualizer",
      description: "HTML, CSS, Javascript",
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Technical Projects</h2>
                <p>As a CSE Student, I've had the privilege of working on a diverse range of projects that have not only challenged me technically but also allowed me to contribute to meaningful solutions. Each project I've undertaken has been a unique opportunity to apply my problem-solving skills, creativity, and passion for crafting efficient and scalable software solutions</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <h1 align='center'>Blood Donor Patient Management System</h1>
                      <p> Developed for efficient Blood Bank Management, data storage,
processing and analysis. Promoting transparency, simplifying blood bank processes, eliminating corruption,
and improving management effectiveness</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <h1 align='center'>Music Store Analysis</h1>
                      <p>Leveraged SQL joins and subqueries to combine data from multiple tables, enabling comprehensive analysis and correlation of different data dimensions.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <h1 align='center'>N- Queens Visualizer</h1>
                      <p>The project aimed to solve classic N Queens Backtracking problem. Dynamically
updating the visual representation of the chessboard, highlighting the queen placements and backtracking
when necessary, so that N-Queens can be placed on an NXN chessboard without queens attacking each
other</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
