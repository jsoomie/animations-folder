import "./navbar.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const Navbar = () => {
  const NavbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.from(NavbarRef.current, {
      duration: 1,
      y: "-100%",
      ease: "power1",
    });

    gsap.from(".links", {
      duration: 2,
      opacity: 0,
      delay: 1,
      stagger: 0.5,
    });
  }, [NavbarRef]);

  return (
    <div ref={NavbarRef} id="Navbar">
      <h1 className="links">Link 1</h1>
      <h1 className="links">Link 2</h1>
      <h1 className="links">Link 3</h1>
    </div>
  );
};
