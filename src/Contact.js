
import logo from './imgs/SunWestLogo.png';
import './App.css';
import React from 'react'; 
import { Button } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,  
} from "react-router-dom";
import {Row,  Col,Form}from 'react-bootstrap';
import emailjs from 'emailjs-com';
const  Contact =() =>{

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(
      'service_z6pby1j',
      'template_9qep1fo',
      e.target,'user_w8UGktdue2sB3dmsdAGC2'
      ).then(res=>{
        console.log(res);
      }).catch(err=> console.log(err));
  }

  return (
      <div className=" bluebg">
         <h2 className="contacth2">Contact Us</h2>
          <div className="container border">
          <Form onSubmit={sendEmail}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Your First Name" name="fname" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Your First Name"  name="lname"/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="emil" placeholder="Your Email" name="email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="text" placeholder="Your Phone Number" name="phone" />
              </Form.Group>
            </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control placeholder="Your State " name="State" />
          </Form.Group>

          <Form.Group className="mb-3"    >
          
            <Form.Control as="textarea" rows={3} placeholder="Your Message "  name="Message"/>
          </Form.Group>
          <div className="centercss">
          <input type="submit" value='Send' className="sendbtn"/>
          </div>
         
          </Form>
           
          </div>
 
          <div className="homecontact">
      <Link to="/">
         <Button color="inherit"  className="homebtn">Home</Button>
      </Link>
      </div>
    </div>
  );
}

export default Contact;
