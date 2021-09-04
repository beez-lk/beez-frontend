import { makeStyles } from "@material-ui/core";
import {
  primary_color_1,
  primary_color_2,
  text_color_dark,
  text_color_light,
} from "../../themes/colors";

const useStyles = makeStyles({
  button: {
    padding: "10px 20px !important",
    margin: "10px !important",
    fontSize: "12px !important",
    color: `${text_color_dark} !important`,
    border: `1px solid ${primary_color_1} !important`,
    borderRadius: "50px !important",
    cursor: "pointer !important",
    fontFamily: "sans-serif !important",
    transition: "0.5s !important",
    "&:hover": {
      padding: "10px 22px !important",
      border: `1px solid ${primary_color_2} !important`,
      color: `${primary_color_2} !important`,
      fontWeight: "bold !important",
    },
  },
  button_mobile: {
    fontSize: "10px !important",
  },
  button_active: {
    backgroundColor: `${primary_color_1} !important`,
    color: `${text_color_light} !important`,
    "&:hover": {
      padding: "10px 22px !important",
      backgroundColor: `${primary_color_2} !important`,
      color: `${text_color_light} !important`,
    },
  },
});

export default useStyles;
