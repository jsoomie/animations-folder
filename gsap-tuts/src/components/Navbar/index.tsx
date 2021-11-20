import "./navbar.css";
import { gsap } from "gsap";

export const navAnimate = () => {
  return gsap.from("#Navbar", {
    y: "-100%",
    ease: "power1",
  });
};

export const linksAnimate = () => {
  return gsap.from(".links", {
    opacity: 0,
    stagger: 0.5,
  });
};

export const Navbar = () => {
  return (
    <div id="Navbar">
      <h1 className="links">Link 1</h1>
      <h1 className="links">Link 2</h1>
      <h1 className="links">Link 3</h1>
    </div>
  );
};
