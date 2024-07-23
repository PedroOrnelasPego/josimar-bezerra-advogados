import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import "./ScrollToTopButton.scss";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="primary"
      onClick={scrollToTop}
      className={`scroll-to-top ${visible ? "visible" : ""}`}
    >
      <img width="20" height="20" src="https://img.icons8.com/ios-filled/FFFFFF/50/double-up.png" alt="double-up"/>
    </Button>
  );
};

export default ScrollToTopButton;
