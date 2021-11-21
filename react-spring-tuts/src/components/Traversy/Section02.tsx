import { useSpring, animated } from "react-spring";

const { component } = {
  component: {
    background: "blue",
    color: "white",
    padding: "1.5rem",
  },
};

export const Section02 = () => {
  const animate = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  return (
    <animated.div style={animate}>
      <div style={component}>
        <h1>Section 02</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          voluptatum reiciendis cum saepe? Tenetur dolores vero debitis,
          similique provident deserunt sit inventore! Corporis doloremque
          pariatur modi illum aperiam sint laudantium!
        </p>
      </div>
    </animated.div>
  );
};
