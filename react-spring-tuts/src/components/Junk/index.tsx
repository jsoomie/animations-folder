import { useSpring, animated } from "react-spring";

export const Junk = () => {
  const spring = useSpring({
    loop: true,
    from: { opacity: 0 },
    opacity: 1,
    config: {
      duration: 5000,
    },
  });

  const colorSpring = useSpring({
    from: { color: "blue" },
    color: "rgb(255, 0, 0)",
  });

  const multiSpring = useSpring({
    loop: true,
    from: { opacity: 0, color: "red" },
    to: [
      { opacity: 1, color: "#FFAAEE" },
      { opacity: 1, color: "red" },
      { opacity: 0.5, color: "#008000" },
      { opacity: 0.8, color: "black" },
    ],
  });

  return (
    <div>
      <animated.h1 style={spring}>Animation</animated.h1>
      <animated.h1 style={colorSpring}>Color Animation</animated.h1>
      <animated.h1 style={multiSpring}>Animation</animated.h1>
    </div>
  );
};
