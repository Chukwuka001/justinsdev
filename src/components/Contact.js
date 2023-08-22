import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm(
          'service_bu2h056',
          'template_wv1ce19',
          form.current,
          '7655oFV-Lena997vj')
      .then((result) => {
          alert('Message sent successfully');
          window.location.reload(true);
      }, (error) => {
          alert('Message failed');
      });

  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} target="_blank" onSubmit={sendEmail} action="https://formsubmit.co/chukwukajustin80@gmail.com" method="POST">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_fname" placeholder="First Name" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_lname"  placeholder="Last Name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                  <input type="email" name="user_email"   placeholder="Email Address" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="user_phone" placeholder="Phone No." required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message"  placeholder="Message" required></textarea>
                  <button type="submit"><span>Submit</span></button>
                  </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
