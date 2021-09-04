import { makeStyles } from "@material-ui/core";
import { primary_color_1 } from "../../themes/colors";

const useStyles = makeStyles({
  terms_and_conditions: {
    width: "100%",
    textAlign: "center",
    marginTop: "30px",
    fontFamily: "cursive",
    color: "darkgrey",
    fontSize: "12px",
  },
  words: {
    transition: "0.5s",
    cursor: "pointer",
    "&:hover": {
      color: primary_color_1,
    },
  },
});

export default useStyles;
