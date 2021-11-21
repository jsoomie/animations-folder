import { useSpring, animated } from "react-spring";
import { MouseEventHandler } from "react";

const { component } = {
  component: {
    background: "blue",
    color: "white",
    padding: "1.5rem",
  },
};

interface IProps {
  toggle: MouseEventHandler<HTMLButtonElement>;
}

export const Section02 = ({ toggle }: IProps) => {
  const animate = useSpring({
    from: {
      number: 0,
      opacity: 0,
    },
    opacity: 1,
    delay: 1000,
    number: 10,
    config: {
      duration: 1000,
    },
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
        <button onClick={toggle}>Toggle Section 3</button>
      </div>
    </animated.div>
  );
};
