import "./main.css";
import { useEffect } from "react";
import { gsap } from "gsap";

export const Main = () => {
  useEffect(() => {
    gsap.from(".right", {
      duration: 1,
      x: "-100vw",
      delay: 1,
      ease: "power2.in",
    });

    gsap.from(".left", {
      duration: 1,
      x: "-100%",
      delay: 1.5,
      ease: "power2.in",
    });
  }, []);
  return (
    <div id="Main">
      <div className="content">
        <div className="sidebar left"></div>
        <button className="button">Reverse!</button>
        <div className="sidebar right"></div>
      </div>
    </div>
  );
};
