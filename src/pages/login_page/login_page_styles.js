import { makeStyles } from "@material-ui/core";
import { background_color, text_color_dark } from "../../themes/colors";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    backgroundImage: "url(/images/landing_background.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignItems: "center",
    position: "relative",
  },
  login_card: {
    width: "90%",
    border: 10,
    borderColor: "white",
    marginLeft: "5%",
    height: "90vh",
    top: "5%",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    borderRadius: "20px",
  },
  left_card: {
    backgroundImage: "url(images/login_side.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  right_card: {
    backgroundColor: background_color,
    width: "800px",
    padding: "60px",
    transition: "0.5s",
  },
  right_card_mobile: {
    backgroundColor: background_color,
    width: "800px",
    padding: "30px !important",
  },
  button_bar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  welcome_text: {
    fontSize: "40px",
    color: text_color_dark,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginTop: "20px",
  },
  login_form_outer: { width: "100%", padding: "10% 0px" },
  login_btn_outer: { textAlign: "right" },
  terms_and_conditions: {
    width: "100%",
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "cursive",
    color: "darkgrey",
    fontSize: "12px",
  },
  login_scroll_outer: { height: "65vh", overflow: "auto" },
  contact_scroll_outer: { height: "70vh", overflow: "auto" },
  text_field: { width: "90%" },
});

export default useStyles;
