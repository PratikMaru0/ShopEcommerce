import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHub from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import profile from "../../../images/profilePhotoForEcom.jpeg";



const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/patrick.__01/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={profile}
              alt="Founder"
            />
            <Typography>Pratik Maru</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This website name is "HandiCraft Stores" where users can buy HandiCrafts coming from different parts of India. This is my college project. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">For Code</Typography>
            <a
              href="https://github.com/PratikMaru0/mernProjectEcommerce"
              target="blank"
            >
              <GitHub className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/patrick.__01/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
