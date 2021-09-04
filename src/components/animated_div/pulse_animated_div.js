import React, { useEffect, useState } from "react";
import Radium, { StyleRoot } from "radium";
import { pulse } from "react-animations";
const styles = {
  style: {
    animation: "x 1s",
    animationName: Radium.keyframes(pulse, `pulse`),
  },
};

export default function PulseAnimationDiv({ show, children, delay = 1 }) {
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
