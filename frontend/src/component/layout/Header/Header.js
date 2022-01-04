import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/Logo1.jpg";

const options = {
  burgerColorHover: "#7100FF",
  burgerColor : "#a100ff",
  logo,
  logoWidth: "15vmax",
  navColor1: "rgba(255,255,255,0.9)",
  logoHoverSize: "10px",
  logoHoverColor: "#b0b0ff",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.5vmax",
  link1Color: "#a100ff",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#7100FF",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "#a100ff",
  searchIconColor: "#a100ff",
  cartIconColor: "#a100ff",
  profileIconColorHover: "#7100FF",
  searchIconColorHover: "#7100FF",
  cartIconColorHover: "#7100FF",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
