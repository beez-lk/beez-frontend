import { makeStyles } from "@material-ui/core";
import {
  primary_color_1,
  primary_gradient_reverse,
  text_color_light,
} from "../../themes/colors";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  message_card: {
    width: "400px",
    borderRadius: "10px",
    border: `2px solid ${primary_color_1}`,
  },
  message_head: {
    padding: "10px",
    backgroundImage: primary_gradient_reverse,
    color: text_color_light,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  message_body: {
    padding: "10px",
    fontFamily: "system-ui",
    minHeight: "50px",
    color: "#6f6f6f",
  },
  message_buttons: {
    textAlign: "right",
  },
}));

export default useStyles;
