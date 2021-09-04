import { makeStyles } from "@material-ui/core";
import { primary_color_1, primary_color_2 } from "../../themes/colors";

const useStyles = makeStyles({
  outer: {
    width: "80px",
    height: "80px",
    margin: "10px auto",
    textAlign: "center",
    cursor: "pointer",
    border: `5px solid ${primary_color_1}`,
    borderRadius: "5px",
    opacity: 0.5,
    transition: "0.5s",
  },
  outer_hover: {
    opacity: 1,
  },
  item_category: {
    height: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "3px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "end",
  },
  category_name: {
    backgroundColor: primary_color_2,
    padding: "3px",
    borderRadius: "3px",
    fontSize: "12px",
    color: "white",
    fontWeight: "bold",
  },
});

export default useStyles;
