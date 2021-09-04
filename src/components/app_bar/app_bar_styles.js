import { makeStyles } from "@material-ui/core";
import { primary_color_1, primary_color_2, primary_gradient, primary_gradient_reverse, text_color_dark, text_color_light } from "../../themes/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height:'90px',
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "2%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  restaurant_name_card: {
    width: "200px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundImage: primary_gradient,
    borderRadius: "10px",
    padding: "8px",
    color: "white",
  },
  setting_button: {
    height: "50px",
    width: "50px",
    marginLeft: "20px",
  },
  setting_icon: {
    fontSize: "30px",
    color: "#bfbfbf",
    transition: "0.5s",
    "&:hover": {
      color: primary_color_2,
    },
  },
  main_text: {
    fontSize: "25px",
    fontWeight: "bold",
    color: text_color_dark,
  },
  sub_text: {
    fontSize: "12px",
    color: text_color_dark,
  },
  backdrop: {
    zIndex: 2,
    color: '#fff',
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
});

export default useStyles;
