import "./footer.css";
import { gsap } from "gsap";

export const footerAnimate = () => {
  return gsap.to("#Footer", {
    y: 0,
    ease: "elastic",
  });
};

export const Footer = () => {
  return (
    <div id="Footer">
      <h1>Footer</h1>
    </div>
  );
};
