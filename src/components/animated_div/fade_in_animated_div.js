import React, { useEffect, useState } from "react";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
const styles = {
  style: {
    animation: "x 0.5s",
    animationName: Radium.keyframes(fadeIn, `fadeIn`),
  },
};

export default function FadeInAnimatedDiv({ show, children, delay = 1 }) {
  const [isShow, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 100 * delay);
    return () => {
      setShow(false);
    };
  }, [show, delay]);
  return isShow ? (
    <StyleRoot>
      <div className="test" style={styles.style}>
        {children}
      </div>
    </StyleRoot>
  ) : (
    <div />
  );
}
