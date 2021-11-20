import { useSpring, animated } from "react-spring";
import { Toggle } from "components";

export const Menu = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
  });

  return (
    <animated.div style={fade}>
      <a href="/">
        <h1>Menu</h1>
      </a>
      <main>
        <Toggle />
      </main>
    </animated.div>
  );
};
