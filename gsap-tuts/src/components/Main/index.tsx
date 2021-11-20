import "./main.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { footerAnimate, navAnimate, linksAnimate } from "components";

export const leftAnimate = () => {
  return gsap.from(".left", {
    x: "-100%",
    ease: "power2.in",
  });
};

export const rightAnimate = () => {
  return gsap.from(".right", {
    x: "-100vw",
    ease: "power2.in",
  });
};

export const buttonAnimate = () => {
  return gsap.fromTo(
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
    }
  );
};

export const mainAnimate = (reverse: boolean = false) => {
  const master = gsap.timeline({ defaults: { duration: 1 } });
  master
    .add(navAnimate())
    .add(linksAnimate())
    .add(rightAnimate())
    .add(leftAnimate())
    .add(buttonAnimate(), "<1")
    .add(footerAnimate(), "<");

  if (reverse) {
    master.timeScale(3);
    master.reverse();
  }
};

export const Main = () => {
  useEffect(() => {
    mainAnimate();
  }, []);

  return (
    <div id="Main">
      <div className="content">
        <div className="sidebar left"></div>
        <button className="button" onClick={() => mainAnimate(true)}>
          Reverse!
        </button>
        <div className="sidebar right"></div>
      </div>
    </div>
  );
};
