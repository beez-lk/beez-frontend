import { makeStyles } from "@material-ui/core";
import { primary_gradient_reverse } from "../../themes/colors";

const useStyles = makeStyles({
  backdrop: {
    zIndex: 2,
    color: "#fff",
  },
  card: { width: "500px" },
  card_header: {
    backgroundImage: primary_gradient_reverse,
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
    padding: "10px",
  },
  text_field: { width: "100%" },
  button_row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
});

export default useStyles;
