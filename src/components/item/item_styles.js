import { makeStyles } from "@material-ui/core";
import {
  primary_color_2,
  primary_gradient,
  text_color_dark,
} from "../../themes/colors";

const useStyles = makeStyles({
  item_outer: {
    height: "150px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "10px",
    border: `4px solid ${primary_color_2}66 `,
    transition: "0.5s",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      border: `4px solid ${primary_color_2}`,
    },
  },

  name: {
    color: text_color_dark,
    fontWeight: "bold",
    backgroundColor: "white",
    width: "fit-content",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "10px",
    marginTop: "5px",
  },
  price: {
    color: "white",
    fontWeight: "bold",
    backgroundImage: primary_gradient,
    width: "fit-content",
    padding: "2px 10px",
    borderRadius: "5px",
    fontSize: "12px",
  },
  old_price: {
    fontSize: "10px",
    color: "white",
    textDecoration: "line-through",
  },
  edit_row: { position: "absolute", bottom: 5, right: 5, display: "flex" },
  edit_button: {
    backgroundImage: primary_gradient,
    color: "white",
    padding: "5px",
  },
  inactive_seal: {
    backgroundImage: "url(/images/inactive.png)",
    backgroundColor: "#ffffffb0",
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    top: 0,
    left: 0,
  },
});

export default useStyles;
