import { makeStyles } from "@material-ui/core";
import {
  background_color_2,
  primary_color_1,
  primary_color_2,
} from "../../themes/colors";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    backgroundColor: background_color_2,
    display: "flex",
    flexDirection: "row",
  },
  left_bar: {
    backgroundColor: "white",
    height: "100%",
    width: "100px",
    boxShadow: "-2px -8px 8px 0px #88888896",
  },
  logo_outer: {
    height: "80px",
    width: "80px",
    margin: "auto",
    marginTop: "10px",
  },
  right_bar: {
    height: "100%",
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  main_row: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    paddingTop: "20px",
  },
  main_left_container: {
    height: "100%",
    width: "65%",
  },
  main_right_container: {
    height: "100%",
    width: "35%",
  },
  add_category: {
    width: "80px",
    height: "80px",
    margin: "10px auto",
    textAlign: "center",
    cursor: "pointer",
    border: `5px solid ${primary_color_1}`,
    borderRadius: "5px",
  },
  add_category_button: {
    height: "100%",
    width: "100%",
  },
  add_category_icon: {
    height: "100%",
    width: "100%",
    color: "grey",
    transition: "0.5s",
    "&:hover": {
      color: `${primary_color_2} !important`,
    },
  },
  add_item_button_outer: { width: "100%", textAlign: "center" },
});

export default useStyles;
