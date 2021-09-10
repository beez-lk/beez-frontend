import { makeStyles } from "@material-ui/core";
import { primary_color_1, primary_color_2 } from "../../themes/colors";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    backgroundImage: "url(images/background_1.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "30px",
  },
  app_bar: {
    backgroundColor: "#ffffff21",
    borderRadius: "20px",
    padding: "10px 10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo_text: {
    color: primary_color_2,
    fontSize: "25px",
    fontWeight: "bold",
    marginLeft: "20px",
    cursor: "pointer",
    padding: "2px 15px",
    borderRadius: "10px",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: primary_color_1,
      color: "white",
    },
  },
});

export default useStyles;
