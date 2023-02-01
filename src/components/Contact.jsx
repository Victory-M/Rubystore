import React from 'react'
import Map from "../assets/map.png"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container"> 
      <div className="contact-hero d-flex justify-content-center align-items-center">
        <h1 className="text-center fw-bold text-uppercase h2">Contact Us</h1>
      </div>
     
      <div className="contact mt-5">
        <form>
          <input type="text" placeholder="Name" className="" />
          <input type="email" placeholder="Email " />
          <input type="text" placeholder="Subject"/>
          <textarea name="message" placeholder="message" cols="30" rows="5" />
            <Button style={{backgroundColor:"#033644", width:"100%",textAlign:"center"}} className="  text-capitalize px-3 py-2 mt-3 ">submit </Button>
        </form>
        <div className="map">
          <img src={Map} alt="map"  />
        </div>
      </div>
    </div>
  )
}

export default Contact