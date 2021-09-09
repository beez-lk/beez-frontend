import { makeStyles } from "@material-ui/core";
import { primary_color_1, primary_color_2 } from "../../themes/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
  },
  background_image: {
    height: "100%",
    width: "100%",
    backgroundImage: "url(images/landing_background.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right top",
    padding: "20px",
  },
  app_bar: {
    backgroundColor: "#ffffff21",
    borderRadius: "20px",
    padding: "0px 10px",
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
  heading: {
    marginTop: "20vh",
    fontSize: "5vw",
    width: "40%",
    fontFamily: "Lobster",
    transition:'1s'
  },
});

export default useStyles;
