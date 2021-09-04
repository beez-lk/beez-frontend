import React from "react";
import useStyles from "./button_1_styles";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import useWindowSize from "../../utils/use_window_size";

export default function Button1({
  title,
  onClick,
  isSelected,
  width,
  disabled,
  loading,
}) {
  const classes = useStyles();
  const {isMobile} = useWindowSize()
  return (
    <Button
      disabled={disabled || loading}
      onClick={onClick ? onClick : null}
      className={clsx(classes.button, isSelected && classes.button_active, isMobile && classes.button_mobile)}
      style={{
        width: width || "none",
      }}
    >
      {loading ? (
        <div style={{ height: 25 }}>
          <Loader type="Watch" color="white" height={25} />
        </div>
      ) : (
        title
      )}
    </Button>
  );
}
