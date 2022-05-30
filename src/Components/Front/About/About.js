import { WhatsApp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./About.css";
import CallIcon from "@mui/icons-material/Call";
import DirectionsIcon from "@mui/icons-material/Directions";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const About = () => {
  const gotowhatsApp = () => {
    console.log("WhatsApp");
  };
  return (
    <>
      <div>
        <h3>About Us</h3>
        <img
          onClick={() => {
            "https://www.google.com/maps/place/Tushar+Event%27s/data=!3m1!4b1!4m2!3m1!1s0x3be7c96187c3ec85:0xdc7ff4669f317c1";
          }}
          className="map"
          src="./img/staticmap.jpeg"
        />
      </div>
      <h3>Contact Us</h3>

      <div>
        <ul className="nav">
          <li className="nav-item">
            <h4>WhatsApp Mgs</h4>

            <a
              className="nav-link active"
              aria-current="page"
              href="https://api.whatsapp.com/send?phone=919224347232&text="
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <br />
            <p className="contact">
              9224347232 <br />
              9819400173 <br />
              9870555703 <br />

            </p>
          </li>

          <li className="nav-item">
            <h4>Constact</h4>

            <a className="nav-link">
              <CallIcon />
              Call Now
            </a>
            <br />
            <p className="contact">
              9224347232 <br />
              9819400173 <br />
              9870555703 <br />
            </p>
          </li>
          <li className="nav-item">
            <h4>Address</h4>

            <a
              className="nav-link"
              href="https://www.google.com/maps/dir//Tushar+Event's/@19.0511683,72.8173849,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7c96187c3ec85:0xdc7ff4669f317c1!2m2!1d72.8874254!2d19.0511815"
            >
              <DirectionsIcon />
              Get Direction
            </a>
            <br />
            <p className="contact">
              118-A, Lal Dongar Rd ,Sindhi Society,
              <br />
              Chembur East,Mumbai, <br />
              Maharashtra 400071 India
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
