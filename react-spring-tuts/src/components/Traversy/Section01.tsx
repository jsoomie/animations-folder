import { useSpring, animated } from "react-spring";

const { component } = {
  component: {
    background: "steelblue",
    color: "white",
    padding: "1.5rem",
  },
};

export const Section01 = () => {
  const animate = useSpring({
    from: {
      opacity: 0,
      marginTop: -500,
    },
    opacity: 1,
    marginTop: 0,
  });

  const counter = useSpring({
    from: {
      number: 0,
      opacity: 1,
    },
    opacity: 1,
    number: 10,
    config: {
      duration: 10000,
    },
  });

  return (
    <animated.div style={animate}>
      <div style={component}>
        <h1>Section 01</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          voluptatum reiciendis cum saepe? Tenetur dolores vero debitis,
          similique provident deserunt sit inventore! Corporis doloremque
          pariatur modi illum aperiam sint laudantium!
        </p>
        <animated.div style={counter}>
          {counter.number.to((val) => Math.floor(val))}
        </animated.div>
      </div>
    </animated.div>
  );
};
