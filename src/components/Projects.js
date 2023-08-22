import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import companies from "../assets/img/company.jfif";
import invest from "../assets/img/investment.jfif";
import school from "../assets/img/school.jpg";
import main from "../assets/img/main.png";
import realEstate from "../assets/img/real-estate.jfif";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import app1 from "../assets/img/images (3).jpeg";
import app2 from "../assets/img/images (4).jpeg";
import app3 from "../assets/img/images (6).jpeg";
import investt from "../assets/img/images (7).jpeg";
import comp from "../assets/img/images (8).jpeg";

export const Projects = () => {

  const websites = [
    {
      title: "Online Shopping Websites",
      description: "Design & Development",
      imgUrl: main,
    },
    {
      title: "Investment Websites",
      description: "Design & Development",
      imgUrl: investt,
    },
    {
      title: "School Management Websites",
      description: "Design & Development",
      imgUrl: school,
    },
    {
      title: "Company's Websites",
      description: "Design & Development",
      imgUrl: comp,
    },
    {
      title: "Real Estate Websites",
      description: "Design & Development",
      imgUrl: realEstate,
    },
    {
      title: "Content Promotion Websites",
      description: "Design & Development",
      imgUrl: projImg3,
    },

  ];

  const applications = [
    {
      title: "Online Shopping Apps",
      description: "Design & Development",
      imgUrl: app1,
    },
    {
      title: "E-Learning Apps",
      description: "Design & Development",
      imgUrl: app2,
    },
    {
      title: "Real-Estate Apps",
      description: "Design & Development",
      imgUrl: app3,
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>All of my projects feature a unique individual style, high design quality and original concept. I give the best service when it comes to web and mobile Applications. All Applications built by me are always users and admin friendly</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          websites.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          applications.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">

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
