import { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const fade = useSpring({
    // opacity: toggle ? 1 : 0,
    // fontSize: toggle ? "2rem" : "5em",
    color: toggle ? "#000" : "green",
    transform: toggle ? "translate3d(0, 0, 0)" : "translate3d(0, -50px, 0)",
  });

  return (
    <div>
      <animated.h1 style={fade}>Hello</animated.h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};
