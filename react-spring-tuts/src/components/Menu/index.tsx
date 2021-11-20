import { useSpring, animated } from "react-spring";

export const Menu = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
  });

  return (
    <animated.div style={fade}>
      <h1>
        <a href="/">Menu</a>
      </h1>
    </animated.div>
  );
};
