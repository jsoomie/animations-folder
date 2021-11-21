import { Section01 } from "./Section01";
import { Section02 } from "./Section02";
import { Section03 } from "./Section03";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

export const Traversy = () => {
  const [show, setShow] = useState(false);
  const transition = useTransition(show, {
    from: { opacity: 0, x: "-100%" },
    enter: { opacity: 1, x: "0" },
    leave: { opacity: 0, x: "100%" },
  });

  const toggleSection = () => {
    setShow(!show);
  };

  return (
    <div>
      <Section01 />
      <Section02 toggle={toggleSection} />
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <Section03 />
          </animated.div>
        ) : undefined
      )}
    </div>
  );
};
