import "./main.css";
import { useEffect } from "react";
import { gsap } from "gsap";

export const Main = () => {
  const timeline = gsap.timeline({ defaults: { duration: 1 } });

  useEffect(() => {
    timeline
      .from(".right", {
        x: "-100vw",
        delay: 1,
        ease: "power2.in",
      })
      .from(
        ".left",
        {
          x: "-100%",
          ease: "power2.in",
        },
        1
      )
      .fromTo(
        ".button",
        {
          opacity: 0,
          scale: 0,
          rotation: 720,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
        },
        3
      );
  }, [timeline]);

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
