import React, { useEffect, useState } from "react";
import Radium, { StyleRoot } from "radium";
import { zoomIn } from "react-animations";
const styles = {
  style: {
    animation: "x 1s",
    animationName: Radium.keyframes(zoomIn, `zoomIn`),
  },
};

export default function ZoomInAnimatedDiv({ show, children }) {
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
