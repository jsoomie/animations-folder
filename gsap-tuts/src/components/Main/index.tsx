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

    gsap.fromTo(
      ".button",
      {
        opacity: 0,
        scale: 0,
        rotation: 720,
      },
      {
        duration: 1,
        delay: 3.5,
        opacity: 1,
        scale: 1,
        rotation: 0,
      }
    );
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
