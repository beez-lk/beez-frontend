import { makeStyles } from "@material-ui/core";
import { background_color_2 } from "../../themes/colors";

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
});

export default useStyles;
