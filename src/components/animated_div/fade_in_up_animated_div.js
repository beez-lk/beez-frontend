import React, { useEffect, useState } from "react";
import Radium, { StyleRoot } from "radium";
import { fadeInUp } from "react-animations";
const styles = {
  style: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUp, `fadeInUp`),
  },
};

export default function FadeInUpAnimationDiv({ show, children }) {
  const [isShow, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, [show]);
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
