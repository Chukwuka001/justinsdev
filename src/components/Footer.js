import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/mylogo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={18} sm={9}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={16} sm={8} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/justin-obikezie-442b5427a?trk=contact-info"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/justin.obikezie.7"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/justin44808?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
