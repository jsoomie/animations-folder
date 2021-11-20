import "./footer.css";
import { useEffect } from "react";
import { gsap } from "gsap";

export const Footer = () => {
  useEffect(() => {
    gsap.to("#Footer", {
      duration: 1,
      y: 0,
      ease: "elastic",
      delay: 2.5,
    });
  });

  return (
    <div id="Footer">
      <h1>Footer</h1>
    </div>
  );
};
