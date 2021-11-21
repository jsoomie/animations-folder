import { Section01 } from "./Section01";
import { Section02 } from "./Section02";
import { Section03 } from "./Section03";
import { useState } from "react";
import { useTransition } from "react-spring";

export const Traversy = () => {
  const [show, setShow] = useState(false);

  const toggleSection = () => {
    setShow(!show);
  };

  return (
    <div>
      <Section01 />
      <Section02 toggle={toggleSection} />
      <Section03 />
    </div>
  );
};
