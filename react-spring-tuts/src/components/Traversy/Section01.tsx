import { useSpring, animated } from "react-spring";

const { component } = {
  component: {
    background: "steelblue",
    color: "white",
    padding: "1.5rem",
  },
};

export const Section01 = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
      marginTop: -500,
    },
    opacity: 1,
    marginTop: 0,
  });

  return (
    <animated.div style={fade}>
      <div style={component}>
        <h1>Section 01</h1>
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
