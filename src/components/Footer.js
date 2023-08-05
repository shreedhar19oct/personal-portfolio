import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/githubnew.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shreedhar-tiwari-892070202/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/shreedhar19oct"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/shreedhartiwari19/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Lets Connect</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
